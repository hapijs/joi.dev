const ANNOTATIONS = '@@annotations';

export const annotate = (err: any) => {
  if (!err._original || typeof err._original !== 'object') {
    const message = err.details && err.details.length > 0 ? err.details[0].message : err.message || err.toString();
    return {
      annotated: message,
      errorLines: [1],
    };
  }

  let obj;
  try {
    // oxlint-disable-next-line unicorn/prefer-structured-clone
    obj = JSON.parse(JSON.stringify(err._original));
  } catch {
    return {
      annotated: err.message,
      errorLines: [1],
    };
  }

  for (let i = err.details.length - 1; i >= 0; --i) {
    // Reverse order to process deepest child first
    const pos = i + 1;
    const error = err.details[i];
    const { path } = error;
    let node = obj;
    if (path.length === 0) {
      const refAnnotations = node[ANNOTATIONS] || {
        errors: {},
        missing: {},
      };
      node[ANNOTATIONS] = refAnnotations;
      refAnnotations.errors[''] = refAnnotations.errors[''] || [];
      refAnnotations.errors[''].push(pos);
    } else {
      for (let j = 0; ; ++j) {
        const seg = path[j];
        if (j + 1 < path.length && node[seg] !== undefined && typeof node[seg] !== 'string') {
          node = node[seg];
        } else {
          const refAnnotations = node[ANNOTATIONS] || {
            errors: {},
            missing: {},
          };
          node[ANNOTATIONS] = refAnnotations;

          const cacheKey = seg === undefined ? error.context.key : seg;

          if (node[seg] === undefined) {
            refAnnotations.missing[cacheKey] = pos;
          } else {
            refAnnotations.errors[cacheKey] = refAnnotations.errors[cacheKey] || [];
            refAnnotations.errors[cacheKey].push(pos);
          }

          break;
        }
      }
    }
  }

  const replacers = {
    arrayIndex: /\s*"_\$idx\$_([, \d]+)_\$end\$_",?\n(.*)/g,
    key: /_\$key\$_([, \d]+)_\$end\$_"/g,
    missing: /"_\$miss\$_([^|]+)\|(\d+)_\$end\$_": "__missing__"/g,
    specials: /"\[(NaN|Symbol.*|-?Infinity|function.*|\(.*)]"/g,
  };

  const getMessageFromMatch = (match: string) => {
    const positions = match.split(',').map((p) => p.trim());
    return positions
      .map((p) => {
        const index = Number(p) - 1;
        return err.details[index] ? err.details[index].message : 'Unknown error';
      })
      .join('; ');
  };

  const annotated = JSON.stringify(obj, createSerializer(err), 2)
    .replace(replacers.key, ($0, $1) => `" /* ${getMessageFromMatch($1)} */`)
    .replace(replacers.missing, ($0, $1, $2) => `"${$1}": undefined /* ${getMessageFromMatch($2)} */`)
    .replace(replacers.arrayIndex, ($0, $1, $2) => `\n${$2} /* ${getMessageFromMatch($1)} */`)
    .replace(replacers.specials, ($0, $1) => $1);

  const lines = annotated.split('\n');
  const errorLines = [];
  for (let i = 0; i < lines.length; ++i) {
    if (lines[i].includes('/*')) {
      errorLines.push(i + 1);
    }
  }

  return {
    annotated,
    errorLines,
  };
};

const createSerializer = (_err: any) => {
  const keys: string[] = [];
  const stack: any[] = [];

  const cycleReplacer = (key: string, value: any) => {
    if (stack[0] === value) {
      return '[Circular ~]';
    }

    return `[Circular ~. ${keys.slice(0, stack.indexOf(value)).join('.')}]`;
  };

  return function serializer(this: any, key: string, value: any) {
    if (key === ANNOTATIONS) {
      return;
    }

    if (stack.length > 0) {
      const thisPos = stack.indexOf(this);
      if (~thisPos) {
        stack.length = thisPos + 1;
        keys.length = thisPos + 1;
        keys[thisPos] = key;
      } else {
        stack.push(this);
        keys.push(key);
      }

      if (stack.includes(value)) {
        value = cycleReplacer.call(this, key, value);
      }
    } else {
      stack.push(value);
    }

    if (value) {
      const annotations = value[ANNOTATIONS];
      if (annotations) {
        if (Array.isArray(value)) {
          const annotated = [];

          for (let i = 0; i < value.length; ++i) {
            if (annotations.errors[i]) {
              annotated.push(`_$idx$_${annotations.errors[i].toSorted().join(', ')}_$end$_`);
            }

            annotated.push(value[i]);
          }

          value = annotated;
        } else {
          for (const [errorKey, error] of Object.entries(annotations.errors)) {
            value[`${errorKey}_$key$_${(error as unknown[]).toSorted().join(', ')}_$end$_`] = value[errorKey];
            value[errorKey] = undefined;
          }

          for (const [missingKey, missing] of Object.entries(annotations.missing)) {
            value[`_$miss$_${missingKey}|${missing}_$end$_`] = '__missing__';
          }
        }

        return value;
      }
    }

    if (
      value === Infinity ||
      value === -Infinity ||
      Number.isNaN(value) ||
      typeof value === 'function' ||
      typeof value === 'symbol'
    ) {
      return `[${value.toString()}]`;
    }

    return value;
  };
};
