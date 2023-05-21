<template>
  <div class="markdown-wrapper" v-html="md" />
</template>

<script>
import { copyToClipboard } from '@/utils/clipboard';
import Vue from 'vue';

export default {
  props: {
    md: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      listeners: new Map(),
    };
  },
  beforeDestroy() {
    this.destroy();
  },
  mounted() {
    this.setContextualActions();
  },
  watch: {
    md() {
      this.destroy();
      Vue.nextTick(() => {
        this.setContextualActions();
      });
    },
  },
  methods: {
    destroy() {
      for (const [element, listener] of this.listeners) {
        element.removeEventListener('click', listener);
      }
      this.listeners.clear();
    },

    setContextualActions() {
      this.setHeaders();
      this.setCodeSnippets();
      this.setCodeTester();

      this.$emit('content-changed');
    },

    setActionIcon(selector, baseNode, onClick, filter = () => true) {
      const handler = (event) => {
        onClick(event);
        event.target.classList.add('clicked');
        setTimeout(() => {
          event.target.classList.remove('clicked');
        }, 3000);
      };
      const parents = document.querySelectorAll(selector);
      for (const parent of parents) {
        if (!filter(parent)) {
          continue;
        }

        const node = baseNode.cloneNode();
        this.listeners.set(node, handler);
        node.addEventListener('click', handler);
        parent.appendChild(node);
      }
    },

    setHeaders() {
      const clipboardNode = document.createElement('span');
      clipboardNode.classList.add('copy-clipboard', 'copy-clipboard-relative');
      clipboardNode.setAttribute('title', 'Copy link to clipboard');

      this.setActionIcon('.api-doc-header', clipboardNode, (event) => {
        const copyLink = new URL(window.location);
        copyLink.hash = event.target.parentNode.getAttribute('id');
        copyToClipboard(copyLink.toString());
      });
    },

    setCodeSnippets() {
      const copyClipBoardElement = document.createElement('span');
      copyClipBoardElement.classList.add(
        'copy-clipboard',
        'copy-clipboard-absolute'
      );
      copyClipBoardElement.title = 'Copy code snippet';

      this.setActionIcon('.code-snippet', copyClipBoardElement, (event) => {
        const code = event.target.parentNode.querySelector('pre').textContent;
        copyToClipboard(code);
      });
    },

    setCodeTester() {
      const testerElement = document.createElement('span');
      testerElement.classList.add('test-snippet');
      testerElement.title = 'Import to joi Schema Tester';

      this.setActionIcon(
        '.code-snippet',
        testerElement,
        (event) => {
          let object = false;
          const text = event.target.parentElement.firstChild.textContent;
          let schema = text.match(/schema\s=\s(Joi.*\(\)([\s\S]*?\);))/);
          if (!schema) {
            schema = text.match(/schema\s=\s(Joi.*\{(.|\n)*?[^)]\));/);
            object = true;
          }
          schema = schema[1].replace(';', '');
          if (!object) {
            this.$store.commit(
              'setSchema',
              '//Insert your joi schema here \nJoi.object({\n  a: ' +
                schema +
                '\n})'
            );
          } else {
            this.$store.commit(
              'setSchema',
              '//Insert your joi schema here \n' + schema
            );
          }

          this.$store.commit(
            'setValidate',
            '//Insert data to validate here \n' + '{ \n' + ' \n' + '}'
          );

          this.$router.push({
            path: '/tester',
          });
        },
        (node) => {
          const textContent = node.textContent;
          return (
            /schema\s=\s(Joi.*\{(.|\n)*?[^)]\));/.test(textContent) ||
            /schema\s=\s(Joi.*\(\)([\s\S]*?\);))/.test(textContent)
          );
        }
      );
    },
  },
};
</script>
