<template>
  <no-ssr>
    <SlotLayout>
      <template #header>
        <TopNav class="header" />
      </template>

      <template #main>
        <div class="main test-container">
          <div class="markdown-wrapper tester-wrapper">
            <h1 class="hapi-header">
              joi Sandbox <span class="api-version-span">v{{ version }}</span>
            </h1>
            <h2 class="tester-subTitle">Schema:</h2>
            <codemirror
              :value="schema"
              :options="options"
              @input="onSchemaChange"
            />
            <h2 class="tester-subTitle">Data To Validate:</h2>
            <codemirror
              :value="validate"
              :options="options"
              @input="onValidateChange"
            />
            <button class="validate-button" @click="onValidateClick">
              Validate
            </button>
            <h2 class="tester-subTitle">Result:</h2>
            <pre class="tester-result">{{ result }}</pre>
            <h2 class="tester-subTitle">Validated Object:</h2>
            <codemirror
              class="validated-result"
              :options="options"
              :value="validatedResult"
            />
          </div>
        </div>
      </template>
    </SlotLayout>
  </no-ssr>
</template>

<script>
import TopNav from '@/components/Navs/TopNav.vue';
import SlotLayout from '@/components/SlotLayout.vue';
import moduleInfo from '../static/lib/joi/info.json';
import Joi from 'joi';
import { annotate } from '../utils/annotate';

if (process.client) {
  require('codemirror/mode/javascript/javascript.js');
}

export default {
  components: {
    SlotLayout,
    TopNav,
  },
  data() {
    return {
      schema: '',
      validate: '',
      result: '',
      validatedResult: '',
      moduleAPI: moduleInfo,
      page: 'tester',
      intro: false,
      example: false,
      usage: false,
      faq: false,
      advanced: false,
      version: '',
    };
  },
  head() {
    return {
      title: 'joi.dev - Schema Tester v' + this.version,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Test your joi schemas',
        },
      ],
    };
  },
  computed: {
    getSchema() {
      return this.$store.getters.loadSchema;
    },
    getValidate() {
      return this.$store.getters.loadValidate;
    },
    options() {
      return {
        theme: this.$darkMode.theme === 'dark' ? 'darcula' : 'eclipse',
        tabSize: 2,
        mode: 'text/javascript',
        lineNumbers: true,
        lineWrapping: true,
        addModeClass: true,
      };
    },
  },
  created() {
    let versionsArray = this.moduleAPI.versionsArray;
    this.$data.version = versionsArray[0];
    this.$data.schema = this.getSchema;
    this.$data.validate = this.getValidate;
    this.$store.commit('setDisplay', 'tester');
    this.$store.commit('setFamily', 'joi');
    if (this.moduleAPI.docs[versionsArray[0]].intro) {
      this.$store.commit('setIntro', true);
    }
    if (this.moduleAPI.docs[versionsArray[0]].example) {
      this.$store.commit('setExample', true);
    }
    if (this.moduleAPI.docs[versionsArray[0]].usage) {
      this.$store.commit('setUsage', true);
    }
    if (this.moduleAPI.docs[versionsArray[0]].faq) {
      this.$store.commit('setFaq', true);
    }
    if (this.moduleAPI.docs[versionsArray[0]].advanced) {
      this.$store.commit('setAdvanced', true);
    }
  },
  methods: {
    onSchemaChange(input) {
      this.$store.commit('setSchema', input);
      this.$data.schema = this.getSchema;
    },
    onValidateChange(input) {
      this.$store.commit('setValidate', input);
      this.$data.validate = this.getValidate;
    },
    onValidateClick() {
      this.validatedResult = '';
      let isSchema;
      if (this.schema[this.schema.length - 1] === ';') {
        this.schema = this.schema.slice(0, -1);
      }
      if (this.validate[this.validate.length - 1] === ';') {
        this.validate = this.validate.slice(0, -1);
      }
      try {
        let validatedObject = Function(
          '"use strict";return (' + this.validate + ')'
        )();
        let joiSchema = Function(
          'Joi',
          '"use strict";return (' + this.schema + ')'
        );
        isSchema = Joi.isSchema(joiSchema(Joi));
        const validatedResults = joiSchema(Joi).validate(validatedObject, {
          abortEarly: false,
        });

        if (validatedResults.error) {
          let errorMessage = validatedResults.error.message.toString();
          this.result = 'Validation Error: ' + errorMessage;
          this.validatedResult = annotate(validatedResults.error);
        } else {
          this.result = 'Validation Passed';
          this.validatedResult = JSON.stringify(
            validatedResults.value,
            null,
            2
          );
        }
      } catch (error) {
        if (!isSchema && error instanceof TypeError) {
          this.result = 'Not a valid joi Schema';
        } else {
          this.result = error.toString();
          this.validatedResult = 'Error';
        }
      }
    },
  },
};
</script>

<style lang="postcss">
@import 'codemirror/lib/codemirror.css';
@import 'codemirror/theme/eclipse.css';
@import 'codemirror/theme/darcula.css';

.test-wrapper {
  width: 100%;
  margin: 0;
  padding: 20px 40px;
}

.tester-title {
  font-size: 2rem;
  margin-bottom: 20px;
}

.tester-version {
  font-size: 1.1rem;
}

.tester-subTitle {
  font-size: 1.5em;
  margin-bottom: 5px;
  margin-top: 0 !important;
  padding-top: 0 !important;
  border: none !important;
}

.CodeMirror {
  border: 1px solid var(--dark-white);
  width: 100%;
  margin-left: 0 !important;
  overflow-x: hidden;
  overflow-y: auto;
  font-family: inconsolata, menlo, consolas, monospace !important;
  height: 100% !important;
  margin-bottom: 30px;
}

.CodeMirror-sizer {
  border: none !important;
}

.cm-comment {
  color: var(--gray-light) !important;
}

.validated-result .cm-comment {
  color: #ff6a6a !important;
}

.validate-button {
  display: block;
  border-radius: 10px;
  border: none;
  background: var(--orange);
  padding: 5px 15px;
  font-size: 1em;
  font-weight: 700;
  color: var(--white);
  cursor: pointer;
  border: 4px solid rgba(0, 0, 0, 0);
  margin-bottom: 30px;
}

.validate-button:hover {
  border: 4px solid var(--orange);
  background: var(--white);
  color: var(--orange);
  text-decoration: none;
  transition: all 0.3s ease 0s;
}

.validate-button:focus {
  outline: none;
}

.tester-result {
  min-height: 66px;
  box-sizing: border-box;
  height: auto;
  color: #000;
  margin-bottom: 30px;
}

.error-span {
  display: inline-block;
  background: #ff6a6a;
  padding: 5px;
  margin: 1px 0;
}

@media screen and (max-width: 900px) {
  .tester-wrapper {
    padding: 0 20px !important;
  }
}

@media (prefers-color-scheme: dark) {
  .tester-result {
    background: var(--blacker);
    color: var(--white);
  }
}
</style>
