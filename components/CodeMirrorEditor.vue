<template>
  <div ref="editorContainer" class="editor-container"></div>
</template>

<script setup>
import { javascript } from '@codemirror/lang-javascript';
import { json } from '@codemirror/lang-json';
import { HighlightStyle, syntaxHighlighting } from '@codemirror/language';
import { Compartment, EditorState, StateEffect, StateField } from '@codemirror/state';
import { Decoration } from '@codemirror/view';
import { tags as t } from '@lezer/highlight';
import { darcula } from '@uiw/codemirror-theme-darcula';
import { eclipse } from '@uiw/codemirror-theme-eclipse';
import { EditorView, basicSetup } from 'codemirror';
import { useData } from 'vitepress';
import { onBeforeUnmount, onMounted, ref, watch } from 'vue';

const { errorLines, language, modelValue, readOnly } = defineProps({
  errorLines: { default: () => [], type: Array },
  language: { default: 'javascript', type: String },
  modelValue: { default: '', type: String },
  readOnly: { default: false, type: Boolean },
});


const emit = defineEmits(['update:modelValue']);


const { isDark } = useData();
const editorContainer = ref(null);
let view = null;


const themeCompartment = new Compartment();
const setErrorLines = StateEffect.define();


const errorLineField = StateField.define({
  create() {
    return Decoration.none;
  },
  provide: (f) => EditorView.decorations.from(f),
  update(underlines, tr) {
    underlines = underlines.map((change) => tr.changes.map(change));
    for (const e of tr.effects) {
      if (e.is(setErrorLines)) {
        const decorations = [];
        for (const lineNum of e.value) {
          if (lineNum > 0 && lineNum <= tr.state.doc.lines) {
            const line = tr.state.doc.line(lineNum);
            decorations.push(Decoration.line({ class: 'has-focus' }).range(line.from));
          }
        }
        underlines = Decoration.set(decorations, true);
      }
    }
    return underlines;
  },
});


const getThemeExtension = () => {
  const theme = isDark.value ? darcula : eclipse;
  const cursorTheme = EditorView.theme({
    '&.cm-focused .cm-cursor': {
      borderLeftColor: isDark.value ? 'var(--vp-c-white)' : 'var(--vp-c-black)',
    },
    '&.cm-focused .cm-selectionBackground, .cm-selectionBackground, ::selection': {
      backgroundColor: isDark.value ? 'var(--cm-selection-bg-dark)' : 'var(--cm-selection-bg-light)',
    },
  });
  return [theme, cursorTheme];
};


onMounted(() => {
  const extensions = [
    basicSetup,
    language === 'json' ? json() : javascript(),
    EditorView.lineWrapping,
    themeCompartment.of(getThemeExtension()),
    EditorView.updateListener.of((update) => {
      if (update.docChanged) {
        emit('update:modelValue', update.state.doc.toString());
      }
    }),
  ];

  if (readOnly) {
    extensions.push(
      errorLineField,
      EditorState.readOnly.of(true),
      syntaxHighlighting(HighlightStyle.define([{ color: 'var(--tester-error)', tag: t.comment }])),
      EditorView.theme({ '& .cm-content': { color: 'inherit' }, '&.cm-focused .cm-content': { border: 'none' } }),
    );
  }

  view = new EditorView({
    parent: editorContainer.value,
    state: EditorState.create({ doc: modelValue, extensions }),
  });

  if (readOnly && errorLines.length > 0) {
    view.dispatch({ effects: setErrorLines.of(errorLines) });
  }
});


watch(
  () => modelValue,
  (newValue) => {
    if (view && newValue !== view.state.doc.toString()) {
      view.dispatch({
        changes: { from: 0, insert: newValue, to: view.state.doc.length },
      });
    }
  },
);


watch(
  () => errorLines,
  (newLines) => {
    if (view && readOnly) {
      view.dispatch({
        effects: setErrorLines.of(newLines),
      });
    }
  },
  { deep: true },
);


watch(isDark, () => {
  if (view) {
    view.dispatch({
      effects: themeCompartment.reconfigure(getThemeExtension()),
    });
  }
});


onBeforeUnmount(() => {
  if (view) {
    view.destroy();
  }
});
</script>

<style scoped>
.editor-container {
  border: 1px solid var(--vp-c-divider);
  border-radius: 4px;
  overflow: hidden;
  font-family: var(--vp-font-family-mono);
  font-size: 14px;
}
</style>
