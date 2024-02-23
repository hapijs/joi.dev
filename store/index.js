export const state = () => ({
  display: 'home',
  language: 'en_US',
  version: '',
  example: false,
  intro: false,
  usage: false,
  faq: false,
  advanced: false,
  family: 'joi',
  schema: `//Insert your joi schema here
Joi.object({
  username: Joi.string().alphanum().min(3).max(30).required(),
  password: Joi.string().pattern(/^[a-zA-Z0-9]{3,30}$/),
  repeat_password: Joi.ref("password"),
  access_token: [Joi.string(), Joi.number()],
  birth_year: Joi.number().integer().min(1900).max(2013),
  email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } } )
}).with('username', 'birth_year').xor('password', 'access_token').with('password', 'repeat_password')`,
  validate: `//Insert data to validate here
{
  username: "abc",
  password: "password",
  repeat_password: "password",
  birth_year: 1994
}`,
  modules: ['address', 'formula', 'joi-date', 'pinpoint'],
});

export const mutations = {
  setPage(state, page) {
    state.page = page;
  },
  setDisplay(state, display) {
    state.display = display;
  },
  setLanguage(state, language) {
    state.language = language;
  },
  setVersion(state, version) {
    state.version = version;
  },
  setExample(state, example) {
    state.example = example;
  },
  setIntro(state, intro) {
    state.intro = intro;
  },
  setUsage(state, usage) {
    state.usage = usage;
  },
  setFaq(state, faq) {
    state.faq = faq;
  },
  setAdvanced(state, advanced) {
    state.advanced = advanced;
  },
  setFamily(state, family) {
    state.family = family;
  },
  setSchema(state, schema) {
    state.schema = schema;
  },
  setValidate(state, validate) {
    state.validate = validate;
  },
};

export const getters = {
  loadPage(state) {
    return state.page;
  },
  loadDisplay(state) {
    return state.display;
  },
  loadLanguage(state) {
    return state.language;
  },
  loadVersion(state) {
    return state.version;
  },
  loadModules(state) {
    return state.modules;
  },
  loadExample(state) {
    return state.example;
  },
  loadIntro(state) {
    return state.intro;
  },
  loadUsage(state) {
    return state.usage;
  },
  loadFaq(state) {
    return state.faq;
  },
  loadAdvanced(state) {
    return state.advanced;
  },
  loadFamily(state) {
    return state.family;
  },
  loadSchema(state) {
    return state.schema;
  },
  loadValidate(state) {
    return state.validate;
  },
};
