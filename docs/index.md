---
layout: home

title: Home

hero:
  name: 'joi'
  tagline: 'The most powerful schema description language and data validator for JavaScript'
  actions:
    - theme: brand
      text: Get started with joi
      link: /api
    - theme: alt
      text: Try it in the sandbox
      link: /tester
  image:
    src: /img/joiTransparent.png
    alt: joi logo

features:
  - title: Expressive
    details: |
      <b>Over 150 built-in validators</b> across strings, numbers, dates, arrays, objects, binaries, and more — with chainable rules that read like English.
  - title: Declarative
    details: |
      <b>Describe complex relationships between fields</b> without writing callback logic. Cross-field references, conditional schemas, and key dependencies — all as one-liners.
  - title: Extensible
    details: |
      <b>Build your own schema types</b> with Joi's extension system. Add custom rules, coercions, and chainable methods — then share them as plugins.
---

## Get started in seconds

::: code-group

```console-vue [npm]
npm install joi
```

```console-vue [yarn]
yarn add joi
```

```console-vue [pnpm]
pnpm add joi
```

:::

```js
import Joi from 'joi';

const schema = Joi.object({
  username: Joi.string().alphanum().min(3).max(30).required(),
  email: Joi.string().email().required(),
  age: Joi.number().integer().min(18),
});

const { error, value } = schema.validate({
  username: 'danilo',
  email: 'danilo@example.com',
  age: 28,
});
```

## Built for real-world validation

### 1. Schema Variants with `.alter()` + `.tailor()`

Define one schema. Produce specialized versions for different contexts — like separate validation for `GET` vs `POST` — without duplicating anything.

```js
const schema = Joi.object({
  id: Joi.number().alter({
    create: (s) => s.forbidden(),
    update: (s) => s.required(),
  }),
  name: Joi.string().required(),
});

const createSchema = schema.tailor('create');
const updateSchema = schema.tailor('update');
```

_One source of truth. No drift between schemas._

### 2. Declarative Field Dependencies

Express relationships between fields without writing validation logic. Joi handles the permutations.

```js
const schema = Joi.object({
  email: Joi.string().email(),
  phone: Joi.string().pattern(/^\+?[0-9]{7,15}$/),
  address: Joi.string(),
})
  .or('email', 'phone') // at least one contact method
  .with('phone', 'address') // phone requires address
  .xor('email', 'phone'); // but not both
```

_Seven dependency methods: `.with()`, `.without()`, `.or()`, `.and()`, `.xor()`, `.oxor()`, `.nand()`._

### 3. Cross-Field References

Reference other fields directly in validation rules. No callbacks, no workarounds.

```js
const schema = Joi.object({
  startDate: Joi.date().required(),
  endDate: Joi.date().greater(Joi.ref('startDate')).required(),
  password: Joi.string().min(8).required(),
  confirm: Joi.any().valid(Joi.ref('password')).required(),
});
```

_References support relative paths, value transforms, and even context variables._

### 4. Rich, Actionable Errors

Every validation failure includes the exact path, a machine-readable type code, the failing value, and the constraint that was violated. Use `.annotate()` to visualize errors in context.

```js
const { error } = schema.validate(data, { abortEarly: false });
// error.details → [
//   {
//     message: '"age" must be greater than or equal to 18',
//     path: ['age'],
//     type: 'number.min',
//     context: { limit: 18, value: 12, label: 'age', key: 'age' }
//   }
// ]
```

_Type codes like `string.email`, `number.min`, `any.required` make programmatic error handling straightforward._
