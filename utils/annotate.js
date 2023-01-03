// Adapted from joi's original annotate

const internals = {
  annotations: Symbol('annotations'),
};

export function annotate(err) {
  if (!err._original || typeof err._original !== 'object') {
    return err.details[0].message;
  }

  const obj = JSON.parse(JSON.stringify(err._original));

  for (let i = err.details.length - 1; i >= 0; --i) {
    // Reverse order to process deepest child first
    const pos = i + 1;
    const error = err.details[i];
    const path = error.path;
    let node = obj;
    for (let j = 0; ; ++j) {
      const seg = path[j];
      if (j + 1 < path.length && typeof node[seg] !== 'string') {
        node = node[seg];
      } else {
        const refAnnotations = node[internals.annotations] || {
          errors: {},
          missing: {},
        };
        node[internals.annotations] = refAnnotations;

        const cacheKey = seg || error.context.key;

        if (node[seg] !== undefined) {
          refAnnotations.errors[cacheKey] =
            refAnnotations.errors[cacheKey] || [];
          refAnnotations.errors[cacheKey].push(pos);
        } else {
          refAnnotations.missing[cacheKey] = pos;
        }

        break;
      }
    }
  }

  const replacers = {
    key: /_\$key\$_([, \d]+)_\$end\$_"/g,
    missing: /"_\$miss\$_([^|]+)\|(\d+)_\$end\$_": "__missing__"/g,
    arrayIndex: /\s*"_\$idx\$_([, \d]+)_\$end\$_",?\n(.*)/g,
    specials: /"\[(NaN|Symbol.*|-?Infinity|function.*|\(.*)]"/g,
  };

  const getMessage = (pos) => err.details[Number(pos) - 1].message;

  return JSON.stringify(obj, internals.serializer(), 2)
    .replace(replacers.key, ($0, $1) => `" /* ${getMessage($1)} */`)
    .replace(
      replacers.missing,
      ($0, $1, $2) => `"${$1}": undefined /* ${getMessage($2)} */`
    )
    .replace(
      replacers.arrayIndex,
      ($0, $1, $2) => `\n${$2} /* ${getMessage($1)} */`
    )
    .replace(replacers.specials, ($0, $1) => $1);
}

internals.serializer = function () {
  const keys = [];
  const stack = [];

  const cycleReplacer = (key, value) => {
    if (stack[0] === value) {
      return '[Circular ~]';
    }

    return '[Circular ~.' + keys.slice(0, stack.indexOf(value)).join('.') + ']';
  };

  return function (key, value) {
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

      if (~stack.indexOf(value)) {
        value = cycleReplacer.call(this, key, value);
      }
    } else {
      stack.push(value);
    }

    if (value) {
      const annotations = value[internals.annotations];
      if (annotations) {
        if (Array.isArray(value)) {
          const annotated = [];

          for (let i = 0; i < value.length; ++i) {
            if (annotations.errors[i]) {
              annotated.push(
                `_$idx$_${annotations.errors[i].sort().join(', ')}_$end$_`
              );
            }

            annotated.push(value[i]);
          }

          value = annotated;
        } else {
          for (const errorKey in annotations.errors) {
            value[
              `${errorKey}_$key$_${annotations.errors[errorKey]
                .sort()
                .join(', ')}_$end$_`
            ] = value[errorKey];
            value[errorKey] = undefined;
          }

          for (const missingKey in annotations.missing) {
            value[
              `_$miss$_${missingKey}|${annotations.missing[missingKey]}_$end$_`
            ] = '__missing__';
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
      return '[' + value.toString() + ']';
    }

    return value;
  };
};
