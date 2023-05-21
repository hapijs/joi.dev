const marked = require('marked');
const { markedHighlight } = require('marked-highlight');
const hljs = require('highlight.js');
const slugger = new marked.Slugger();

const renderer = {
  code(...args) {
    const original = marked.Renderer.prototype.code.apply(this, args);
    return `<div class="code-snippet">${original}</div>`;
  },
  heading(text, level, raw, slugger) {
    const id = slugger.slug(raw);
    return `<h${level} class="api-doc-header" id="${id}">${text}</h${level}>\n`;
  },
};

marked.use(
  markedHighlight({
    highlight: function (code, lang) {
      const language = hljs.getLanguage(lang) ? lang : 'plaintext';
      return hljs.highlight(code, { language }).value;
    },
    langPrefix: 'hljs language-', // highlight.js css expects a top-level 'hljs' class.
  }),
  { renderer }
);

marked.setOptions({
  mangle: false,
  headerIds: false,
});

exports.slugger = slugger;
exports.marked = marked;
