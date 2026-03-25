import { createDefaultMapFromCDN, createSystem, createVirtualTypeScriptEnvironment } from '@typescript/vfs';

import type { CompletionContext } from '@codemirror/autocomplete';
import type { VirtualTypeScriptEnvironment } from '@typescript/vfs';

let env: VirtualTypeScriptEnvironment | null = null;
let currentVersion: string | null = null;

const getEnv = async (version: string) => {
  if (env && currentVersion === version) {
    return env;
  }

  const ts = await import('typescript');

  const compilerOptions = {
    lib: ['es2024'],
    module: ts.ModuleKind.ESNext,
    target: ts.ScriptTarget.ESNext,
  };

  const fsMap = await createDefaultMapFromCDN(compilerOptions, ts.version, true, ts);

  const { default: joiDts } = version.startsWith('17.')
    ? await import('joi-17/lib/index.d.ts?raw')
    : await import('joi-18/lib/index.d.ts?raw');

  fsMap.set('/node_modules/joi/index.d.ts', joiDts);
  fsMap.set('/node_modules/joi/package.json', JSON.stringify({ name: 'joi', types: 'index.d.ts' }));

  if (version.startsWith('18.')) {
    const { default: standardSchemaTypes } = await import('../node_modules/@standard-schema/spec/dist/index.d.ts?raw');
    fsMap.set('/node_modules/@standard-schema/spec/index.d.ts', standardSchemaTypes);
    fsMap.set(
      '/node_modules/@standard-schema/spec/package.json',
      JSON.stringify({ name: '@standard-schema/spec', types: 'index.d.ts' }),
    );
  }

  const system = createSystem(fsMap);
  env = createVirtualTypeScriptEnvironment(system, [], ts, compilerOptions);
  currentVersion = version;

  return env;
};

const filterJoiOperations = (name: string) =>
  name.startsWith('$') ||
  name.startsWith('_') ||
  name.startsWith('validate') ||
  name === 'cache' ||
  name === 'ValidationError';

export const joiCompletionSource = async (context: CompletionContext, version: string) => {
  try {
    const tsEnv = await getEnv(version);
    const code = context.state.doc.toString();

    const prefix = "import Joi from 'joi';\n";
    const wrappedCode = prefix + code;
    const pos = context.pos + prefix.length;

    const fileName = 'index.ts';
    if (tsEnv.getSourceFile(fileName)) {
      tsEnv.updateFile(fileName, wrappedCode);
    } else {
      tsEnv.createFile(fileName, wrappedCode);
    }

    const completions = tsEnv.languageService.getCompletionsAtPosition(fileName, pos, {});
    if (!completions) {
      return null;
    }

    const word = context.matchBefore(/\w*/);
    if (!word && !context.explicit) {
      return null;
    }

    return {
      from: word ? word.from : context.pos,
      options: completions.entries
        .filter((entry) => !filterJoiOperations(entry.name))
        .map((entry) => {
          let type = 'variable';
          if (entry.kind === 'method') {
            type = 'method';
          } else if (entry.kind === 'property') {
            type = 'property';
          }

          return {
            boost: entry.sortText ? -Number(entry.sortText) : 0,
            info: () => {
              const details = tsEnv.languageService.getCompletionEntryDetails(
                fileName,
                pos,
                entry.name,
                {},
                entry.source,
                {},
                entry.data,
              );
              if (!details) {
                return null;
              }

              const doc = `${details.documentation?.map((d) => d.text).join('\n') || ''}`;

              const div = document.createElement('div');
              div.className = 'cm-completionInfo-text';
              div.style.whiteSpace = 'pre-wrap';
              div.textContent = doc;
              return div;
            },
            label: entry.name,
            type,
          };
        }),
    };
  } catch (error) {
    console.error('Joi completion error:', error);
    return null;
  }
};
