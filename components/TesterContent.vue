<template>
  <div class="tester-container vp-doc">
    <h1 class="hapi-header">Sandbox</h1>

    <div v-if="version" class="api-version">
      Selected Joi Version: <span class="version-tag">v{{ version }}</span>
      <span v-if="isLoading" class="loading-indicator"> (Loading...)</span>
    </div>

    <div class="field">
      <div class="field-header">
        <h2 class="tester-subTitle">Schema:</h2>
        <button class="format-button" @click="schemaEditor.format()">Format</button>
      </div>
      <CodeMirrorEditor ref="schemaEditor" v-model="schema" :joi-version="version" />
    </div>

    <div class="field">
      <div class="field-header">
        <h2 class="tester-subTitle">Data To Validate:</h2>
        <button class="format-button" @click="validateEditor.format()">Format</button>
      </div>
      <CodeMirrorEditor ref="validateEditor" v-model="validate" language="json" />
    </div>

    <div class="actions">
      <button class="validate-button" @click="onValidateClick">Validate</button>
      <button class="share-button" @click="onShareClick">
        {{ isCopied ? 'Link Copied!' : 'Share' }}
      </button>
      <button class="reset-button" @click="onResetClick">Reset</button>
    </div>

    <div v-if="hasValidated" class="field">
      <h2 class="tester-subTitle">Result:</h2>
      <div v-if="isError && errorDetails.length > 0" class="tester-result-list">
        <div v-for="(detail, index) in errorDetails" :key="index" class="tester-error-item">
          <span class="error-index">{{ index + 1 }}.</span> {{ detail.message }}
        </div>
      </div>
      <div v-else-if="!isError && result" class="tester-result-list">
        <div class="tester-success-item">
          {{ result }}
        </div>
      </div>
      <pre v-else class="tester-result" :class="{ 'is-error': isError }">{{ result }}</pre>
    </div>

    <div v-if="hasValidated" class="field">
      <h2 class="tester-subTitle">Validated Object:</h2>
      <CodeMirrorEditor
        v-model="resultEditorContent"
        read-only
        language="json"
        :error-lines="errorLines"
        class="result-editor"
        :class="{ 'has-focused-lines': errorLines.length > 0 }"
      />
    </div>

    <!-- Custom Confirmation Modal -->
    <div v-if="showResetConfirm" class="modal-overlay" @click.self="cancelReset">
      <div class="modal-content">
        <h3 class="modal-title">Confirm Reset</h3>
        <p class="modal-text">
          Are you sure you want to reset the schema and data to defaults? This action cannot be undone.
        </p>
        <div class="modal-actions">
          <button class="modal-button cancel" @click="cancelReset">Cancel</button>
          <button class="modal-button confirm" @click="confirmReset">Reset</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useClipboard, useStorage } from '@vueuse/core';
import { useRoute } from 'vitepress';
import { onMounted, ref, watch } from 'vue';

import { annotate } from '../composables/annotate.ts';
import joiInfo from '../generated/modules/joi/info.json' with { type: 'json' };
import CodeMirrorEditor from './CodeMirrorEditor.vue';

const DEFAULT_SCHEMA = `//Insert your joi schema here
Joi.object({
  username: Joi.string().alphanum().min(3).max(30).required(),
  password: Joi.string().pattern(/^[a-zA-Z0-9]{3,30}$/),
  repeat_password: Joi.ref("password"),
  access_token: [Joi.string(), Joi.number()],
  birth_year: Joi.number().integer().min(1900).max(2013),
  email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } } )
}).with('username', 'birth_year').xor('password', 'access_token').with('password', 'repeat_password')`;


const DEFAULT_VALIDATE = `//Insert data to validate here
{
  username: "abc",
  password: "password",
  repeat_password: "password",
  birth_year: 1994
}`;


const route = useRoute();
const schema = useStorage('joi-sandbox-schema', DEFAULT_SCHEMA);
const validate = useStorage('joi-sandbox-validate', DEFAULT_VALIDATE);
const result = ref('');
const resultEditorContent = ref('');
const errorDetails = ref([]);
const isError = ref(false);
const errorLines = ref([]);
const hasValidated = ref(false);
const version = ref('');
const joiInstance = ref(null);
const isLoading = ref(false);
const latestVersion = ref(joiInfo.versionsArray[0]);
const { copy, copied: isCopied } = useClipboard();
const showResetConfirm = ref(false);


const schemaEditor = ref(null);
const validateEditor = ref(null);


const loadJoi = async (v) => {
  if (!v) {
    return;
  }
  isLoading.value = true;


  // Map masked version back to full version if necessary
  let actualVersion = v;
  const match = v.match(/^(\d+)\.x\.x$/);
  if (match) {
    actualVersion = joiInfo.versionsArray.find((ver) => ver.startsWith(`${match[1]}.`)) || v;
  }


  version.value = actualVersion;


  try {
    let module;
    if (actualVersion.startsWith('17.')) {
      module = await import('joi-17');
    } else if (actualVersion.startsWith('18.')) {
      module = await import('joi-18');
    } else {
      throw new Error(`Version ${actualVersion} not supported locally`);
    }


    if (module && module.default) {
      joiInstance.value = module.default;
    } else {
      throw new Error('Default export not found in Joi module');
    }
  } catch (error) {
    result.value = `Error loading Joi v${v}: ${error.message}`;
  } finally {
    isLoading.value = false;
  }
};


onMounted(async () => {
  const path = (route && route.path ? route.path : '').replace(/\/$/, '').replace(/\.html$/, '');
  const testerMatch = path.match(/\/tester\/([^/]+)/);
  let v = latestVersion.value;
  if (testerMatch) {
    v = testerMatch.at(1);
  }

  const { hash } = window.location;
  if (hash.startsWith('#share=')) {
    try {
      const encoded = hash.slice(7);
      const decoded = decodeURIComponent(escape(atob(encoded)));
      const state = JSON.parse(decoded);
      if (state.schema) {
        schema.value = state.schema;
      }
      if (state.data) {
        validate.value = state.data;
      }
    } catch {}
  }

  await loadJoi(v);
});


watch(
  () => route.path,
  async (newPath) => {
    const path = newPath.replace(/\/$/, '').replace(/\.html$/, '');
    const testerMatch = path.match(/\/tester\/([^/]+)/);
    if (testerMatch) {
      const v = testerMatch.at(1);
      if (v !== version.value) {
        await loadJoi(v);
      }
    }
  },
  { immediate: false },
);


const onValidateClick = () => {
  if (!joiInstance.value) {
    result.value = 'Joi is not loaded yet.';
    return;
  }


  try {
    // oxlint-disable-next-line no-new-func
    const dataToValidate = new Function(`"use strict";return (${validate.value})`)();


    // oxlint-disable-next-line no-new-func
    const joiSchemaFunc = new Function('Joi', `"use strict";return (${schema.value})`);


    const joiSchema = joiSchemaFunc(joiInstance.value);


    if (typeof joiSchema.validate !== 'function') {
      throw new TypeError('Created schema does not have a validate method. Is Joi loaded correctly?');
    }


    const { error, value } = joiSchema.validate(dataToValidate, {
      abortEarly: false,
    });


    if (error) {
      result.value = 'Validation Error';
      errorDetails.value = error.details;
      isError.value = true;
      const { annotated, errorLines: lines } = annotate(error);
      errorLines.value = lines;
      resultEditorContent.value = annotated;
    } else {
      result.value = 'Validation Passed';
      errorDetails.value = [];
      isError.value = false;
      errorLines.value = [];
      resultEditorContent.value = JSON.stringify(value, null, 2);
    }
    hasValidated.value = true;
  } catch (error) {
    result.value = error.toString();
    errorDetails.value = [];
    isError.value = true;
    errorLines.value = [];
    resultEditorContent.value = 'Error';
    hasValidated.value = true;
  }
};


const onResetClick = () => {
  showResetConfirm.value = true;
};


const cancelReset = () => {
  showResetConfirm.value = false;
};


const confirmReset = () => {
  showResetConfirm.value = false;


  schema.value = DEFAULT_SCHEMA;
  validate.value = DEFAULT_VALIDATE;
  result.value = '';
  errorDetails.value = [];
  isError.value = false;
  errorLines.value = [];
  resultEditorContent.value = '';
  hasValidated.value = false;
};


const onShareClick = async () => {
  const state = JSON.stringify({
    data: validate.value,
    schema: schema.value,
  });


  try {
    const encoded = btoa(unescape(encodeURIComponent(state)));
    const url = new URL(window.location.href);
    url.hash = `share=${encoded}`;
    await copy(url.toString());
  } catch {}
};
</script>

<style scoped>
.tester-container {
  padding: 20px 0;
}

.field {
  margin-bottom: 20px;
}

.field-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5rem;
}

.field-header .tester-subTitle {
  margin-bottom: 0;
}

.format-button {
  border-radius: 6px;
  border: 1px solid var(--vp-c-divider);
  background: var(--vp-c-bg-soft);
  padding: 2px 10px;
  font-size: 0.9em;
  font-weight: 600;
  color: var(--vp-c-text-1);
  cursor: pointer;
  transition: all 0.2s ease;
}

.format-button:hover {
  border-color: var(--vp-c-brand-1);
  color: var(--vp-c-brand-1);
  background: var(--vp-c-bg);
}

.tester-subTitle {
  font-size: 1.5em;
  margin-bottom: 5px;
  margin-top: 0 !important;
  padding-top: 0 !important;
  border: none !important;
}

.result-editor :deep(.cm-content) {
  transition:
    filter 0.35s,
    opacity 0.35s;
}

.result-editor.has-focused-lines :deep(.cm-line:not(.has-focus)) {
  filter: blur(0.095rem);
  opacity: 0.4;
  transition:
    filter 0.35s,
    opacity 0.35s;
}

.result-editor.has-focused-lines:hover :deep(.cm-line:not(.has-focus)) {
  filter: blur(0);
  opacity: 1;
}

.result-editor :deep(.cm-line.has-focus) {
  background-color: var(--vp-code-line-highlight-color);
  transition: background-color 0.5s;
}

.tester-result.is-error {
  color: var(--tester-error);
}

.validate-button {
  border-radius: 10px;
  border: 4px solid transparent;
  background: var(--vp-c-brand-1);
  padding: 5px 15px;
  font-size: 1em;
  font-weight: 700;
  color: var(--vp-c-white);
  cursor: pointer;
  transition: all 0.3s ease 0s;
}

.validate-button:hover {
  border: 4px solid var(--vp-c-brand-1);
  background: var(--vp-c-bg);
  color: var(--vp-c-brand-1);
}

.share-button {
  border-radius: 10px;
  border: 4px solid transparent;
  background: var(--vp-c-bg-soft);
  padding: 5px 15px;
  font-size: 1em;
  font-weight: 700;
  color: var(--vp-c-text-1);
  cursor: pointer;
  transition: all 0.3s ease 0s;
  border: 1px solid var(--vp-c-divider);
}

.share-button:hover {
  border: 1px solid var(--vp-c-brand-1);
  background: var(--vp-c-bg);
  color: var(--vp-c-brand-1);
}

.reset-button {
  border-radius: 10px;
  border: 4px solid transparent;
  background: var(--vp-c-bg-soft);
  padding: 5px 15px;
  font-size: 1em;
  font-weight: 700;
  color: var(--vp-c-text-1);
  cursor: pointer;
  transition: all 0.3s ease 0s;
  border: 1px solid var(--vp-c-divider);
}

.reset-button:hover {
  border: 1px solid var(--tester-error);
  background: var(--vp-c-bg);
  color: var(--tester-error);
}

.validate-button:focus,
.share-button:focus,
.reset-button:focus {
  outline: none;
}

.actions {
  display: flex;
  gap: 15px;
  margin-bottom: 30px;
}

.tester-result {
  padding: 10px;
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-divider);
  border-radius: 4px;
  white-space: pre-wrap;
  word-break: break-all;
  min-height: 66px;
  box-sizing: border-box;
  height: auto;
  margin-bottom: 30px;
  color: var(--vp-c-text-1);
}

.tester-result-list {
  margin-bottom: 30px;
}

.tester-error-item {
  padding: 10px 15px;
  background: var(--vp-c-bg-soft);
  border-left: 4px solid var(--tester-error);
  border-top: 1px solid var(--vp-c-divider);
  border-right: 1px solid var(--vp-c-divider);
  border-bottom: 1px solid var(--vp-c-divider);
  border-radius: 0 4px 4px 0;
  margin-bottom: 8px;
  color: var(--vp-c-text-1);
  font-size: 0.95em;
  display: flex;
  gap: 10px;
}

.tester-success-item {
  padding: 10px 15px;
  background: var(--vp-c-bg-soft);
  border-left: 4px solid var(--tester-success);
  border-top: 1px solid var(--vp-c-divider);
  border-right: 1px solid var(--vp-c-divider);
  border-bottom: 1px solid var(--vp-c-divider);
  border-radius: 0 4px 4px 0;
  margin-bottom: 8px;
  color: var(--vp-c-text-1);
  font-size: 0.95em;
  display: flex;
  gap: 10px;
}

.error-index {
  color: var(--tester-error);
  font-weight: bold;
  font-family: var(--vp-font-family-mono);
  min-width: 20px;
}
.api-version {
  margin-bottom: 20px;
  font-size: 1.1rem;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 10px;
}
.version-tag {
  background: var(--vp-c-brand-1);
  color: var(--vp-c-white);
  padding: 2px 8px;
  border-radius: 4px;
  font-family: monospace;
  font-weight: bold;
}
.loading-indicator {
  font-size: 0.9em;
  color: var(--vp-c-text-2);
  font-style: italic;
}

/* Modal Styles */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: var(--overlay-bg);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  backdrop-filter: blur(2px);
}

.modal-content {
  background: var(--vp-c-bg);
  padding: 24px;
  border-radius: 12px;
  max-width: 400px;
  width: 90%;
  box-shadow: 0 4px 20px var(--modal-shadow);
  border: 1px solid var(--vp-c-divider);
}

.modal-title {
  margin-top: 0 !important;
  margin-bottom: 12px;
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--vp-c-text-1);
}

.modal-text {
  margin-bottom: 24px;
  color: var(--vp-c-text-2);
  line-height: 1.5;
}

.modal-actions {
  display: flex;
  gap: 12px;
  justify-content: flex-end;
}

.modal-button {
  padding: 8px 16px;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
}

.modal-button.cancel {
  background: var(--vp-c-bg-soft);
  color: var(--vp-c-text-1);
  border: 1px solid var(--vp-c-divider);
}

.modal-button.cancel:hover {
  background: var(--vp-c-bg-mute);
}

.modal-button.confirm {
  background: var(--tester-error);
  color: var(--vp-c-white);
  border: none;
}

.modal-button.confirm:hover {
  background: var(--tester-error);
  filter: brightness(0.9);
}
</style>
