## Version 18 {#v18}

### [18.1.2](https://github.com/hapijs/joi/milestone/212) {#18.1.2}

- [#3107](https://github.com/hapijs/joi/pull/3107) fix: improve JSON Schema conversion for number.port() and number.sign()

### [18.1.1](https://github.com/hapijs/joi/milestone/211) {#18.1.1}

- [#3103](https://github.com/hapijs/joi/pull/3103) fix: allow NaN in schema describe() output validation
- [#3099](https://github.com/hapijs/joi/pull/3099) Fix braces escaping when template doesn't contains any variable
- [#3098](https://github.com/hapijs/joi/issues/3098) Support libraryOptions in standard validator validate()
- [#3097](https://github.com/hapijs/joi/pull/3097) feat: enhance validation to support options in standard function
- [#3094](https://github.com/hapijs/joi/issues/3094) any.describe() throws an error if the schema contains .allow(NaN)

### [18.1.0](https://github.com/hapijs/joi/milestone/210) {#18.1.0}

- [#3102](https://github.com/hapijs/joi/pull/3102) feat: add Standard JSON Schema
- [#3096](https://github.com/hapijs/joi/issues/3096) Consider implementing Standard JSON Schema

### [18.0.2](https://github.com/hapijs/joi/milestone/209) {#18.0.2}

- [#3092](https://github.com/hapijs/joi/pull/3092) fix: allow coercion of string booleans with trailing whitespace
- [#3091](https://github.com/hapijs/joi/issues/3091) Joi.boolean() does not handle strings with trailing spaces

### [18.0.1](https://github.com/hapijs/joi/milestone/208) {#18.0.1}

- [#3087](https://github.com/hapijs/joi/pull/3087) fix: proper types for more complex cases of array
- [#3086](https://github.com/hapijs/joi/issues/3086) .array().items() dynamic type item type schema causes issues in typescript

### [18.0.0](https://github.com/hapijs/joi/milestone/190) <a class="release-notes-link" href="https://github.com/hapijs/joi/issues/2926" target="_blank" title="View Release Notes"><img class="release-notes-img" src="/img/release-notes.png" alt="" /></a> <span class="breaking-badge"></span> {#18.0.0}

- [#3084](https://github.com/hapijs/joi/pull/3084) feat: add isAsync() helper
- [#3082](https://github.com/hapijs/joi/pull/3082) Added wrapper option to uuid function
- [#3080](https://github.com/hapijs/joi/pull/3080) feat: implement standard schema spec
- [#3078](https://github.com/hapijs/joi/issues/3078) Implement Standard Schema
- [#2993](https://github.com/hapijs/joi/issues/2993) What version of node does this library support?
- [#2982](https://github.com/hapijs/joi/pull/2982) feat: Improve array().items type
- [#2981](https://github.com/hapijs/joi/pull/2981) feat: Improve alternatives type
- [#2926](https://github.com/hapijs/joi/issues/2926) 18.0.0 Release Notes
- [#2925](https://github.com/hapijs/joi/pull/2925) chore: upgrade modules

## Version 17 {#v17}

### [17.13.3](https://github.com/hapijs/joi/milestone/207) {#17.13.3}

- [#3043](https://github.com/hapijs/joi/pull/3043) fix: correct function type in alternatives error

### [17.13.2](https://github.com/hapijs/joi/milestone/206) {#17.13.2}

- [#3037](https://github.com/hapijs/joi/pull/3037) fix: `stripUnknown` should honor local explicit `.unknown(false)`

### [17.13.1](https://github.com/hapijs/joi/milestone/205) {#17.13.1}

- [#3034](https://github.com/hapijs/joi/pull/3034) fix: label false should also hide explicit labels
- [#3033](https://github.com/hapijs/joi/issues/3033) Setting `errors.label` to `false` does not remove labels from error messages for keys with labels

### [17.13.0](https://github.com/hapijs/joi/milestone/204) {#17.13.0}

- [#3032](https://github.com/hapijs/joi/pull/3032) feat: support encoding uri (follow-up to #3027)
- [#3027](https://github.com/hapijs/joi/pull/3027) feat: Support encoding uri
- [#2889](https://github.com/hapijs/joi/issues/2889) string().uri() not working with accented characters

### [17.12.3](https://github.com/hapijs/joi/milestone/203) {#17.12.3}

- [#3026](https://github.com/hapijs/joi/pull/3026) fix: handle bigint in unique rule

### [17.12.2](https://github.com/hapijs/joi/milestone/202) {#17.12.2}

- [#3018](https://github.com/hapijs/joi/pull/3018) Fix issue 2730 - Wrong State['path'] type
- [#2730](https://github.com/hapijs/joi/issues/2730) Wrong `State['path']` type

### [17.12.1](https://github.com/hapijs/joi/milestone/201) {#17.12.1}

- [#3016](https://github.com/hapijs/joi/pull/3016) fix: domain default tld validation
- [#3015](https://github.com/hapijs/joi/pull/3015) fix: domain default tld validation
- [#3007](https://github.com/hapijs/joi/issues/3007) Domain validation not checking IANA registry by default

### [17.12.0](https://github.com/hapijs/joi/milestone/200) {#17.12.0}

- [#3014](https://github.com/hapijs/joi/pull/3014) feat: hex prefix
- [#3011](https://github.com/hapijs/joi/pull/3011) Allow 0x prefix for hex strings
- [#2386](https://github.com/hapijs/joi/issues/2386) Allow 0x prefix for hex strings

### [17.11.1](https://github.com/hapijs/joi/milestone/199) {#17.11.1}

- [#3013](https://github.com/hapijs/joi/pull/3013) fix: precision issue on number().multiple()
- [#3009](https://github.com/hapijs/joi/pull/3009) fix: LanguageMessages type now supports languages in TypeScript
- [#3001](https://github.com/hapijs/joi/pull/3001) fix: do not override existing labels of underlying schemas in alternatives
- [#2962](https://github.com/hapijs/joi/issues/2962) Multiple doesn't work correct
- [#2875](https://github.com/hapijs/joi/pull/2875) Fix for #2874
- [#2874](https://github.com/hapijs/joi/issues/2874) Missing helper.error() method parameter type definition
- [#2720](https://github.com/hapijs/joi/issues/2720) Type declaration for `messages` option of any.validate() inconsistent with the documentation and actual code

### [17.11.0](https://github.com/hapijs/joi/milestone/198) {#17.11.0}

- [#2988](https://github.com/hapijs/joi/pull/2988) feat: allow custom expression functions

### [17.10.2](https://github.com/hapijs/joi/milestone/197) {#17.10.2}

- [#2986](https://github.com/hapijs/joi/pull/2986) fix: missing template reference
- [#2985](https://github.com/hapijs/joi/pull/2985) Unit test showing example of formula parsing bug
- [#2974](https://github.com/hapijs/joi/issues/2974) Unable to access object property with a space in its key via expression templates

### [17.10.1](https://github.com/hapijs/joi/milestone/196) {#17.10.1}

- [#2983](https://github.com/hapijs/joi/pull/2983) fix: allow any.error() return type to be ErrorReport[]

### [17.10.0](https://github.com/hapijs/joi/milestone/195) {#17.10.0}

- [#2975](https://github.com/hapijs/joi/pull/2975) property metas in Description
- [#2964](https://github.com/hapijs/joi/pull/2964) #2963 make return value of validate match type definitions
- [#2961](https://github.com/hapijs/joi/pull/2961) Associate Buffer with BinarySchema
- [#2960](https://github.com/hapijs/joi/pull/2960) feat: support bindary buffer that has been JSON.parse(JSON.strinified())
- [#2957](https://github.com/hapijs/joi/pull/2957) feat: support uuidv6, uuidv7 and uuidv8 guid types
- [#2954](https://github.com/hapijs/joi/issues/2954) Coerce toJSON'ed Buffer to real Buffer

### [17.9.2](https://github.com/hapijs/joi/milestone/194) {#17.9.2}

- [#2945](https://github.com/hapijs/joi/pull/2945) fix: commit states to avoid memory leak

### [17.9.1](https://github.com/hapijs/joi/milestone/193) {#17.9.1}

- [#2932](https://github.com/hapijs/joi/pull/2932) fix: do not trigger warnings and externals on arrays and alternatives mismatches

### [17.9.0](https://github.com/hapijs/joi/milestone/192) {#17.9.0}

- [#2931](https://github.com/hapijs/joi/pull/2931) feat: improve external helpers

### [17.8.4](https://github.com/hapijs/joi/milestone/191) {#17.8.4}

- [#2928](https://github.com/hapijs/joi/pull/2928) fix: validation warning types
- [#2927](https://github.com/hapijs/joi/issues/2927) Type definition incorrect for "warning" return type from validateAsync

### [17.8.3](https://github.com/hapijs/joi/milestone/189) {#17.8.3}

- [#2919](https://github.com/hapijs/joi/pull/2919) chore: revert 17.8.x line
- [#2917](https://github.com/hapijs/joi/issues/2917) Cannot find module '@hapi/hoek/assert' from 'index.js'
- [#2914](https://github.com/hapijs/joi/issues/2914) Support for older Node versions maybe lost in v17.8
- [#2913](https://github.com/hapijs/joi/issues/2913) node_modules/@hapi/hoek/lib/deepEqual.js:274  

### [17.8.2](https://github.com/hapijs/joi/milestone/188) {#17.8.2}

- [#2916](https://github.com/hapijs/joi/pull/2916) fix: properly transform domain
- [#2915](https://github.com/hapijs/joi/issues/2915) Email validation error in v17.8.1

### [17.8.1](https://github.com/hapijs/joi/milestone/187) {#17.8.1}

- [#2910](https://github.com/hapijs/joi/pull/2910) fix: transpile optional chaining

### [17.8.0](https://github.com/hapijs/joi/milestone/186) {#17.8.0}

- [#2909](https://github.com/hapijs/joi/pull/2909) chore: use latest address module
- [#2630](https://github.com/hapijs/joi/issues/2630) Joi.string().domain() treats '\_http.\_tcp.archive.ubuntu.com' as invalid domain name, even though it works

### [17.7.1](https://github.com/hapijs/joi/milestone/185) {#17.7.1}

- [#2905](https://github.com/hapijs/joi/pull/2905) Upgrade `@sideway/formula` to `3.0.1` for `CVE-2023-25166`
- [#2892](https://github.com/hapijs/joi/pull/2892) Allow null values in BooleanSchema methods

### [17.7.0](https://github.com/hapijs/joi/milestone/184) {#17.7.0}

- [#2867](https://github.com/hapijs/joi/pull/2867) fix: better unsafe check of exponential numbers
- [#2762](https://github.com/hapijs/joi/pull/2762) Add isPresent option to object dependencies
- [#2672](https://github.com/hapijs/joi/issues/2672) Some exponential notation strings are validated as unsafe numbers
- [#2542](https://github.com/hapijs/joi/issues/2542) Number validation fails on some strings with E-notation

### [17.6.4](https://github.com/hapijs/joi/milestone/183) {#17.6.4}

- [#2859](https://github.com/hapijs/joi/pull/2859) Fix/throwing errors if required argument is omitted
- [#2729](https://github.com/hapijs/joi/issues/2729) Some validation methods don't throw an error when their required argument is omitted

### [17.6.3](https://github.com/hapijs/joi/milestone/182) {#17.6.3}

- [#2860](https://github.com/hapijs/joi/pull/2860) fix: allow all schema types to be defined and inferred
- [#2857](https://github.com/hapijs/joi/issues/2857) Typing issues with `attempt()`
- [#2753](https://github.com/hapijs/joi/issues/2753) Typescript typing on `Joi.string().validate(...)`

### [17.6.2](https://github.com/hapijs/joi/milestone/181) {#17.6.2}

- [#2851](https://github.com/hapijs/joi/pull/2851) Try improving handling of unions
- [#2850](https://github.com/hapijs/joi/pull/2850) fix: do not confuse booleans for alernatives in strict mode
- [#2848](https://github.com/hapijs/joi/issues/2848) Strict object schema with a boolean property expects alternative, not boolean

### [17.6.1](https://github.com/hapijs/joi/milestone/180) {#17.6.1}

- [#2844](https://github.com/hapijs/joi/pull/2844) types: support strict alternatives
- [#2843](https://github.com/hapijs/joi/pull/2843) chore: update license
- [#2842](https://github.com/hapijs/joi/pull/2842) Fix spelling
- [#2841](https://github.com/hapijs/joi/pull/2841) Allow sub-objects for TypeScript strict object schema
- [#2838](https://github.com/hapijs/joi/pull/2838) feat: change validateAsync return type to match options
- [#2836](https://github.com/hapijs/joi/pull/2836) fix(d.ts): allow nested object schema for strictly typed object
- [#2829](https://github.com/hapijs/joi/pull/2829) fix(d.ts)!: type details param of ValidationError constructor
- [#2819](https://github.com/hapijs/joi/pull/2819) Add artifact to typings.
- [#2818](https://github.com/hapijs/joi/issues/2818) Typescript support for .artifact()
- [#2813](https://github.com/hapijs/joi/pull/2813) Fix Joi issue #2746
- [#2808](https://github.com/hapijs/joi/pull/2808) feat(d.ts): Add type information for `maxDomainSegments` to `EmailOptions` and `DomainOptions` interfaces
- [#2797](https://github.com/hapijs/joi/pull/2797) feat(d.ts): improve attempt return type
- [#2788](https://github.com/hapijs/joi/pull/2788) Include local into `ErrorReport` type
- [#2785](https://github.com/hapijs/joi/pull/2785) fix(typings): incompatible type issue for nested strict object schemas
- [#2764](https://github.com/hapijs/joi/issues/2764) Incompatible type expected for object schemas nested in strict object schemas
- [#2749](https://github.com/hapijs/joi/pull/2749) fixed typo
- [#2746](https://github.com/hapijs/joi/issues/2746) Using `Joi.attempt` with `{ convert: false }` does not prevent conversion.
- [#2727](https://github.com/hapijs/joi/pull/2727) Fix validateAsync return type
- [#2663](https://github.com/hapijs/joi/issues/2663) Property "local" does not exist on type "ErrorReport"

### [17.6.0](https://github.com/hapijs/joi/milestone/179) {#17.6.0}

- [#2732](https://github.com/hapijs/joi/issues/2732) Support length() in templates

### [17.5.0](https://github.com/hapijs/joi/milestone/178) {#17.5.0}

- [#2708](https://github.com/hapijs/joi/issues/2708) How can I define both specific error messages and a default error message?
- [#2706](https://github.com/hapijs/joi/issues/2706) Error messages do not distinguish between numbers and strings！Easily misleading
- [#2703](https://github.com/hapijs/joi/pull/2703) issue #2606: pass TSchema from ObjectSchema to .validate function
- [#2698](https://github.com/hapijs/joi/pull/2698) Add Date -&gt; Joi.DateSchema map to ObjectPropertiesSchema&lt;T&gt;
- [#2687](https://github.com/hapijs/joi/issues/2687) string().min(0) is failing to validate a zero-length string
- [#2666](https://github.com/hapijs/joi/pull/2666) Updated `multiple` rule to support decimal/float base
- [#2665](https://github.com/hapijs/joi/pull/2665) Fix typings on any.external(): add helpers argument
- [#2651](https://github.com/hapijs/joi/pull/2651) Fix label elimination for externals
- [#2649](https://github.com/hapijs/joi/pull/2649) fix: Joi.string().hostname() not returning errors for CIDR notation
- [#2648](https://github.com/hapijs/joi/issues/2648) Incorrect hostname validation
- [#2635](https://github.com/hapijs/joi/issues/2635) any.external: can't disable label
- [#2605](https://github.com/hapijs/joi/issues/2605) "ExternalValidationFunction" type is missing "helpers" parameter in index.d.ts
- [#2600](https://github.com/hapijs/joi/issues/2600) Joi.external() error message
- [#2590](https://github.com/hapijs/joi/issues/2590) defaults in alternatives should work recursively
- [#2589](https://github.com/hapijs/joi/pull/2589) merge subschema matches when subchemas are objects, or alternatives of objects
- [#2577](https://github.com/hapijs/joi/pull/2577) add subschema property validation failures to context

### [17.4.3](https://github.com/hapijs/joi/milestone/177) {#17.4.3}

- [#2685](https://github.com/hapijs/joi/issues/2685) Joi.string().email() passes for `foo@bar%2ecom`

### [17.4.2](https://github.com/hapijs/joi/milestone/176) {#17.4.2}

- [#2642](https://github.com/hapijs/joi/pull/2642) Fix issue with only required items. Fixes #2620.
- [#2624](https://github.com/hapijs/joi/pull/2624) Fix Web Workers compatibility
- [#2620](https://github.com/hapijs/joi/issues/2620) If all elements of array is required, it does not validate unknown items
- [#2251](https://github.com/hapijs/joi/issues/2251) `dist/joi-browser.min.js` doesn't work in workers

### [17.4.1](https://github.com/hapijs/joi/milestone/175) {#17.4.1}

- [#2627](https://github.com/hapijs/joi/pull/2627) Add object type guards schema
- [#2586](https://github.com/hapijs/joi/pull/2586) fix isSchema type definition
- [#2585](https://github.com/hapijs/joi/issues/2585) type problem in Joi.isSchema function
- [#2573](https://github.com/hapijs/joi/pull/2573) Add option array type to AlternativesSchema.conditional

### [17.4.0](https://github.com/hapijs/joi/milestone/174) {#17.4.0}

- [#2556](https://github.com/hapijs/joi/pull/2556) fix: any.when() options parameters not supported as Array in index.d.ts
- [#2555](https://github.com/hapijs/joi/issues/2555) Type definition for the function `any.when()` mismatch the documentation and usage
- [#2551](https://github.com/hapijs/joi/pull/2551) feat: Make Joi.Schema generic
- [#2548](https://github.com/hapijs/joi/pull/2548) fix: defaults in ordered array are not filled
- [#2543](https://github.com/hapijs/joi/issues/2543) URI validation, allowRelative with domain
- [#2536](https://github.com/hapijs/joi/pull/2536) merge the results of a .match('all') if all the subschemas are objects
- [#2535](https://github.com/hapijs/joi/issues/2535) defaults in alternatives with a match mode set are not returned
- [#2534](https://github.com/hapijs/joi/pull/2534) Remove incorrect errors type
- [#2532](https://github.com/hapijs/joi/pull/2532) Fix confusing message when refs are passed
- [#2528](https://github.com/hapijs/joi/pull/2528) Added guid separator and made version optional
- [#2523](https://github.com/hapijs/joi/issues/2523) errors is always undefined in ValidationResult
- [#2521](https://github.com/hapijs/joi/pull/2521) Fix type of schema passed to alter functions
- [#2518](https://github.com/hapijs/joi/pull/2518) fix for stripUnknown not working for nested object on invalid object
- [#2502](https://github.com/hapijs/joi/pull/2502) Appends the allowed object keys in typescript
- [#2479](https://github.com/hapijs/joi/issues/2479) Inconsistency with stripUnknown: true and failing validation rules
- [#2471](https://github.com/hapijs/joi/issues/2471) Joi.object().xor() throws with "must be a string or a reference" when passed a reference
- [#2459](https://github.com/hapijs/joi/issues/2459) stripUnknown doesn't work for nested objects
- [#2404](https://github.com/hapijs/joi/issues/2404) defaults in ordered array are not filled

### [17.3.0](https://github.com/hapijs/joi/milestone/173) {#17.3.0}

- [#2477](https://github.com/hapijs/joi/pull/2477) Add RegExp to the supported types for Extension.type
- [#2475](https://github.com/hapijs/joi/pull/2475) Add render property to ReferenceOptions TS def
- [#2465](https://github.com/hapijs/joi/issues/2465) @hapi/formula@2.0.0 Deprecated
- [#2455](https://github.com/hapijs/joi/pull/2455) Expose prefs in external()
- [#2454](https://github.com/hapijs/joi/pull/2454) CustomValidator return type adjusted in typescript
- [#2442](https://github.com/hapijs/joi/pull/2442) Update index.d.ts
- [#2441](https://github.com/hapijs/joi/issues/2441) Wrong field name in ValidationError (index.d.ts)

### [17.2.1](https://github.com/hapijs/joi/milestone/171) {#17.2.1}

- [#2450](https://github.com/hapijs/joi/issues/2450) Update dev site

### [17.2.0](https://github.com/hapijs/joi/milestone/170) <span class="breaking-badge"></span> {#17.2.0}

- [#2431](https://github.com/hapijs/joi/issues/2431) Import types from DT
- [#2421](https://github.com/hapijs/joi/pull/2421) Support ISO8601 with hours timeshift only
- [#2419](https://github.com/hapijs/joi/issues/2419) isoDate doesn't recognize correct string
- [#2408](https://github.com/hapijs/joi/pull/2408) Fix number padding (e.g. 00000) and trailing decimal points (e.g. 2.)
- [#2407](https://github.com/hapijs/joi/issues/2407) "2." throws number.unsafe
- [#2406](https://github.com/hapijs/joi/issues/2406) "00000" throws number.unsafe
- [#2398](https://github.com/hapijs/joi/issues/2398) Support maxDomainSegments
- [#2380](https://github.com/hapijs/joi/issues/2380) Joi.build() does not work with complex extension bases
- [#2377](https://github.com/hapijs/joi/pull/2377) Add extension validation for "cast"
- [#2361](https://github.com/hapijs/joi/issues/2361) Validation artifacts collected from successful rules
- [#2348](https://github.com/hapijs/joi/issues/2348) object.default() broke when object is extended
- [#2337](https://github.com/hapijs/joi/issues/2337) tlds fails to error on invalid segment
- [#2330](https://github.com/hapijs/joi/issues/2330) Consistently apply wrap setting
- [#2320](https://github.com/hapijs/joi/issues/2320) invalid GUID/UUID is validated as valid
- [#2318](https://github.com/hapijs/joi/issues/2318) `larger than` is incorrect for comparing quanties
- [#2303](https://github.com/hapijs/joi/issues/2303) Add option to resolve `.ref()` and `.in()` values in error messages.
- [#2284](https://github.com/hapijs/joi/issues/2284) Array item could not be an Error

### [17.1.1](https://github.com/hapijs/joi/milestone/169) {#17.1.1}

- [#2316](https://github.com/hapijs/joi/issues/2316) Validate domain in relative uri
- [#2293](https://github.com/hapijs/joi/pull/2293) Fix error on changeless forks. Fixes #2292.
- [#2292](https://github.com/hapijs/joi/issues/2292) Fork object with option already applied

### [17.1.0](https://github.com/hapijs/joi/milestone/168) {#17.1.0}

- [#2280](https://github.com/hapijs/joi/issues/2280) isError()
- [#2279](https://github.com/hapijs/joi/issues/2279) Remove annotate() from assert() when used in the browser

### [17.0.2](https://github.com/hapijs/joi/milestone/167) {#17.0.2}

- [#2269](https://github.com/hapijs/joi/issues/2269) Ensure keys term always has right constructor

### [17.0.1](https://github.com/hapijs/joi/milestone/166) {#17.0.1}

- [#2268](https://github.com/hapijs/joi/issues/2268) Move flag back to proto

### [17.0.0](https://github.com/hapijs/joi/milestone/164) <a class="release-notes-link" href="https://github.com/hapijs/joi/issues/2262" target="_blank" title="View Release Notes"><img class="release-notes-img" src="/img/release-notes.png" alt="" /></a> <span class="breaking-badge"></span> {#17.0.0}

- [#2263](https://github.com/hapijs/joi/issues/2263) Update deps
- [#2262](https://github.com/hapijs/joi/issues/2262) 17.0.0 Release Notes
- [#2261](https://github.com/hapijs/joi/issues/2261) Remove ValidationError.annotate() from browser build
- [#2260](https://github.com/hapijs/joi/issues/2260) object.regex()
- [#2254](https://github.com/hapijs/joi/issues/2254) Giving an array argument to any.valid returns incorrect error
- [#2243](https://github.com/hapijs/joi/pull/2243) Allow `_` in alias, arg, flag, modifier, override, rule, and term names
- [#2242](https://github.com/hapijs/joi/issues/2242) Can you allow `_` in rule names?
- [#2231](https://github.com/hapijs/joi/issues/2231) Change errors.wrapArrays to errors.wrap.array
- [#2219](https://github.com/hapijs/joi/issues/2219) Add the ability to extend all types in place
- [#2200](https://github.com/hapijs/joi/issues/2200) Move ip and uri logic to address
- [#2199](https://github.com/hapijs/joi/issues/2199) Remove node 8, 10
- [#2189](https://github.com/hapijs/joi/issues/2189) Change default function second argument to full helpers (from prefs)
- [#2182](https://github.com/hapijs/joi/issues/2182) Remove quotation marks from error messages
- [#2163](https://github.com/hapijs/joi/issues/2163) string().hostiname() - validation of non-ASCII chars containing domains

## Version 16 {#v16}

### [16.1.8](https://github.com/hapijs/joi/milestone/163) {#16.1.8}

- [#2226](https://github.com/hapijs/joi/issues/2226) object.with and object.without throw error on $ prefixed keys
- [#2218](https://github.com/hapijs/joi/issues/2218) Maximum call stack size exceeded​​ error for dataUri validation
- [#2212](https://github.com/hapijs/joi/issues/2212) Joi.string().email() considers "a@a.com/asd" as valid email
- [#2208](https://github.com/hapijs/joi/pull/2208) fix: describe() on schema with default value null
- [#2207](https://github.com/hapijs/joi/issues/2207) describe() on schema with default value null results in "Cannot read property 'Symbol(literal)' of null"
- [#2205](https://github.com/hapijs/joi/issues/2205) Cannot require a minimal number of matching object properties with `pattern`
- [#2190](https://github.com/hapijs/joi/issues/2190) Joi.string().domain() treats an email address as a valid domain name
- [#2187](https://github.com/hapijs/joi/issues/2187) Giving an array argument to any.allow(...values) gives incorrect error
- [#2181](https://github.com/hapijs/joi/issues/2181) Joi.alternatives produces confusing message when used with nested object and `{ abortEarly: false }`
- [#2176](https://github.com/hapijs/joi/issues/2176) joi.types() is missing `func` alias
- [#2173](https://github.com/hapijs/joi/issues/2173) [Request] Allow mixing patch version

### [16.1.7](https://github.com/hapijs/joi/milestone/162) {#16.1.7}

- [#2168](https://github.com/hapijs/joi/issues/2168) Date fails to enforce format when value is a number string

### [16.1.6](https://github.com/hapijs/joi/milestone/161) {#16.1.6}

- [#2167](https://github.com/hapijs/joi/issues/2167) Error.captureStackTrace can't be used in all browser builds
- [#2165](https://github.com/hapijs/joi/issues/2165) Cannot read property 'delete' of undefined

### [16.1.5](https://github.com/hapijs/joi/milestone/160) {#16.1.5}

- [#2156](https://github.com/hapijs/joi/issues/2156) node.get is not a function when validating
- [#2147](https://github.com/hapijs/joi/issues/2147) Joi v16: TypeError issue with valid(Joi.ref(x)).error()

### [16.1.4](https://github.com/hapijs/joi/milestone/159) {#16.1.4}

- [#2134](https://github.com/hapijs/joi/issues/2134) Joi.any().default(&lt;object&gt;).describe() throws validation errors

### [16.1.3](https://github.com/hapijs/joi/milestone/158) {#16.1.3}

- [#2131](https://github.com/hapijs/joi/issues/2131) TypeError: false.byteLength is not a function

### [16.1.2](https://github.com/hapijs/joi/milestone/157) {#16.1.2}

- [#2128](https://github.com/hapijs/joi/issues/2128) when() fails when combined with prefs()

### [16.1.1](https://github.com/hapijs/joi/milestone/156) {#16.1.1}

- [#2119](https://github.com/hapijs/joi/issues/2119) Use ^version

### [16.1.0](https://github.com/hapijs/joi/milestone/155) {#16.1.0}

- [#2118](https://github.com/hapijs/joi/issues/2118) array.items() fails to invalidate when custom item error is used
- [#2116](https://github.com/hapijs/joi/issues/2116) Support `.when({ is, then })` without subject ref

### [16.0.1](https://github.com/hapijs/joi/milestone/154) {#16.0.1}

- [#2113](https://github.com/hapijs/joi/issues/2113) Valid emails are considered invalid
- [#2111](https://github.com/hapijs/joi/issues/2111) Joi.only is not a function

### [16.0.0](https://github.com/hapijs/joi/milestone/138) <a class="release-notes-link" href="https://github.com/hapijs/joi/issues/2037" target="_blank" title="View Release Notes"><img class="release-notes-img" src="/img/release-notes.png" alt="" /></a> <span class="breaking-badge"></span> {#16.0.0}

- [#2103](https://github.com/hapijs/joi/issues/2103) Support errors in manifest
- [#2102](https://github.com/hapijs/joi/issues/2102) Always convert -0 to 0
- [#2101](https://github.com/hapijs/joi/issues/2101) Apply link.concat() on resolved schema
- [#2099](https://github.com/hapijs/joi/issues/2099) Add when() break
- [#2097](https://github.com/hapijs/joi/issues/2097) Number validation fails with "1E3"
- [#2096](https://github.com/hapijs/joi/issues/2096) Apply link whens on linked schema, not the link
- [#2093](https://github.com/hapijs/joi/issues/2093) Manifest type conflicts with key type
- [#2092](https://github.com/hapijs/joi/issues/2092) Support Joi.in() for object keys
- [#2091](https://github.com/hapijs/joi/issues/2091) "-0" throw number.unsafe
- [#2089](https://github.com/hapijs/joi/issues/2089) Joi.in()
- [#2088](https://github.com/hapijs/joi/issues/2088) Always perform deep equal on valid() and invalid()
- [#2087](https://github.com/hapijs/joi/issues/2087) Fix comparison of array values (literals and references)
- [#2086](https://github.com/hapijs/joi/issues/2086) Preference to change label to path edge instead of full path
- [#2085](https://github.com/hapijs/joi/issues/2085) Default assert() to include stack
- [#2084](https://github.com/hapijs/joi/issues/2084) Shared schemas in links
- [#2083](https://github.com/hapijs/joi/issues/2083) Add a browser build to the github repo and npm package
- [#2082](https://github.com/hapijs/joi/pull/2082) Fix error thrown in the browser build. Closes #2081
- [#2081](https://github.com/hapijs/joi/issues/2081) The browser build (produced by webpack) throws an error when loading
- [#2080](https://github.com/hapijs/joi/issues/2080) Named schema links
- [#2079](https://github.com/hapijs/joi/issues/2079) Support `no` in when()
- [#2078](https://github.com/hapijs/joi/issues/2078) Default `is` to Joi.invalid(null, false, 0, '').required()
- [#2077](https://github.com/hapijs/joi/issues/2077) Compile valid values into valid+override
- [#2076](https://github.com/hapijs/joi/issues/2076) Allow/disallow list override
- [#2075](https://github.com/hapijs/joi/issues/2075) Log when() partials
- [#2074](https://github.com/hapijs/joi/issues/2074) Compile function into Joi.custom()
- [#2073](https://github.com/hapijs/joi/issues/2073) When object.pattern() matches option is not an array(), apply to each item
- [#2072](https://github.com/hapijs/joi/issues/2072) Custom function error shortcut
- [#2068](https://github.com/hapijs/joi/issues/2068) schema.describe() does not work, when default value is assigned to array in schema
- [#2065](https://github.com/hapijs/joi/issues/2065) Change alternatives to be consistent with other spread arguments
- [#2064](https://github.com/hapijs/joi/issues/2064) Throw on invalid schema during validation
- [#2062](https://github.com/hapijs/joi/issues/2062) Support chained when()
- [#2061](https://github.com/hapijs/joi/issues/2061) Keep switch as single condition on when() and conditional()
- [#2060](https://github.com/hapijs/joi/issues/2060) object.assert() ref should be relative to parent, not self
- [#2059](https://github.com/hapijs/joi/issues/2059) Support multiple usage of same schema with id
- [#2056](https://github.com/hapijs/joi/issues/2056) Schema test coverage
- [#2054](https://github.com/hapijs/joi/issues/2054) Rename alternatives.when() to alternatives.conditional()
- [#2051](https://github.com/hapijs/joi/issues/2051) Support for combine schema: allOf, oneOf, anyOf
- [#2049](https://github.com/hapijs/joi/issues/2049) Compile literals into any type with exact literal
- [#2048](https://github.com/hapijs/joi/issues/2048) Replace marker with Symbol.for()
- [#2046](https://github.com/hapijs/joi/issues/2046) Cast multi values of into a single type with valid()
- [#2041](https://github.com/hapijs/joi/issues/2041) Exclude error stack trace by default
- [#2040](https://github.com/hapijs/joi/issues/2040) Replace boolean.insensitive() with sensitive() and not apply to allow()
- [#2039](https://github.com/hapijs/joi/issues/2039) Allow mapping flags to rule methods with a different name
- [#2038](https://github.com/hapijs/joi/issues/2038) Stop matching object patterns once a match is found
- [#2037](https://github.com/hapijs/joi/issues/2037) v16.0.0 Release Notes
- [#2036](https://github.com/hapijs/joi/issues/2036) { result, error } changed to error undefined instead of null
- [#2035](https://github.com/hapijs/joi/issues/2035) Skip error rendering preference
- [#2034](https://github.com/hapijs/joi/issues/2034) Consolidate date format errors
- [#2033](https://github.com/hapijs/joi/issues/2033) msg() template function to access other messages
- [#2032](https://github.com/hapijs/joi/issues/2032) Support custom sync functions for rules
- [#2031](https://github.com/hapijs/joi/issues/2031) Remove object and array string coerce
- [#2030](https://github.com/hapijs/joi/issues/2030) string.isoDate() fails on allow() and convert:false
- [#2027](https://github.com/hapijs/joi/issues/2027) Support templates as object.assert() subject
- [#2026](https://github.com/hapijs/joi/issues/2026) Change object.assert error context and rule argument name
- [#2024](https://github.com/hapijs/joi/issues/2024) Remove binary and string encoding support from the browser
- [#2023](https://github.com/hapijs/joi/issues/2023) Rule arguments validation
- [#2022](https://github.com/hapijs/joi/issues/2022) Support reverse order coerce
- [#2019](https://github.com/hapijs/joi/issues/2019) Consolidate refs with args
- [#2018](https://github.com/hapijs/joi/issues/2018) Support joi schema in refs assert
- [#2016](https://github.com/hapijs/joi/issues/2016) Consolidate refs assert's message/code
- [#2015](https://github.com/hapijs/joi/issues/2015) Ensure all levels of coerce are only called on non-undefined values
- [#2014](https://github.com/hapijs/joi/issues/2014) Change all \_methods used on schema to use definition
- [#2013](https://github.com/hapijs/joi/issues/2013) Expose all internal extend() options externally
- [#2012](https://github.com/hapijs/joi/issues/2012) Rename func to function
- [#2010](https://github.com/hapijs/joi/issues/2010) New extension API
- [#2009](https://github.com/hapijs/joi/issues/2009) Global defaults
- [#2007](https://github.com/hapijs/joi/issues/2007) Change Infinity errors from any.invalid to number.infinity
- [#2006](https://github.com/hapijs/joi/issues/2006) Change error code any.empty to string.empty
- [#2005](https://github.com/hapijs/joi/issues/2005) Merging of two empty() should allow '' if it was explicitly defined
- [#2002](https://github.com/hapijs/joi/issues/2002) Remove prefs schema validation
- [#2001](https://github.com/hapijs/joi/issues/2001) Remove joi.defaults()
- [#1999](https://github.com/hapijs/joi/pull/1999) Fix outdated use of Joi.func().ref()
- [#1998](https://github.com/hapijs/joi/issues/1998) Split validate() to sync and async versions
- [#1995](https://github.com/hapijs/joi/issues/1995) Replace strip flag with result flag
- [#1994](https://github.com/hapijs/joi/issues/1994) Joi.string().uri() accepts 'http:/' as valid URL
- [#1993](https://github.com/hapijs/joi/issues/1993) Root reference
- [#1987](https://github.com/hapijs/joi/issues/1987) Extension build() support
- [#1986](https://github.com/hapijs/joi/issues/1986) Improve schema description validation
- [#1985](https://github.com/hapijs/joi/issues/1985) Refactor root
- [#1983](https://github.com/hapijs/joi/issues/1983) Change any.notes() to any.note() and require separate arguments
- [#1982](https://github.com/hapijs/joi/issues/1982) Change any.tags() to any.tag() and require separate arguments
- [#1981](https://github.com/hapijs/joi/issues/1981) Change any.example() to append by default
- [#1980](https://github.com/hapijs/joi/issues/1980) Rename string.regex() to string.pattern()
- [#1979](https://github.com/hapijs/joi/issues/1979) Link to root (regardless of depth)
- [#1978](https://github.com/hapijs/joi/issues/1978) Change only() to flag instead of alias of valid()
- [#1977](https://github.com/hapijs/joi/issues/1977) Replace date multiple and timestamp flag with format
- [#1976](https://github.com/hapijs/joi/issues/1976) Rename object.allowUnknown error to object.unknown
- [#1975](https://github.com/hapijs/joi/issues/1975) Remove description for `default()` function
- [#1974](https://github.com/hapijs/joi/issues/1974) Deep clone all values returned in describe()
- [#1973](https://github.com/hapijs/joi/issues/1973) Behavior of .concat() with tests redefinition
- [#1972](https://github.com/hapijs/joi/issues/1972) Applying `raw` after successful validation
- [#1968](https://github.com/hapijs/joi/issues/1968) Repalce lazy with link
- [#1965](https://github.com/hapijs/joi/issues/1965) How to properly detect domains?
- [#1962](https://github.com/hapijs/joi/issues/1962) Don't require pre function to take 3 arguments
- [#1961](https://github.com/hapijs/joi/issues/1961) Lazy once ignored when using with when()
- [#1960](https://github.com/hapijs/joi/issues/1960) Fix object peer dependencies error path
- [#1959](https://github.com/hapijs/joi/issues/1959) Debug tools
- [#1958](https://github.com/hapijs/joi/issues/1958) Warnings
- [#1957](https://github.com/hapijs/joi/issues/1957) Feature: Marking options as deprecated
- [#1956](https://github.com/hapijs/joi/issues/1956) Extension messages override base
- [#1954](https://github.com/hapijs/joi/issues/1954) Schema specialization
- [#1952](https://github.com/hapijs/joi/issues/1952) Support fork into array and alternatives
- [#1951](https://github.com/hapijs/joi/issues/1951) Remove requiredKeys(), optionalKeys(), and forbiddenKeys()
- [#1950](https://github.com/hapijs/joi/issues/1950) any.fork()
- [#1949](https://github.com/hapijs/joi/issues/1949) Replace Joi.reach() with schema.extract()
- [#1948](https://github.com/hapijs/joi/issues/1948) Cannot read property 'ancestors' of null
- [#1946](https://github.com/hapijs/joi/issues/1946) Remove applyFunctionToChildren()
- [#1945](https://github.com/hapijs/joi/issues/1945) Throw when Joi.reach() is reaching into non-object
- [#1944](https://github.com/hapijs/joi/issues/1944) Remove any.\_getLabel()
- [#1943](https://github.com/hapijs/joi/issues/1943) Rename any.schemaType to any.type
- [#1942](https://github.com/hapijs/joi/issues/1942) Rename object.type() to object.instance()
- [#1941](https://github.com/hapijs/joi/issues/1941) Remove root.validate() and root.describe()
- [#1940](https://github.com/hapijs/joi/issues/1940) Array validation with .error()
- [#1939](https://github.com/hapijs/joi/issues/1939) Replace attempt() with assert() alias
- [#1938](https://github.com/hapijs/joi/issues/1938) Remove callback support
- [#1937](https://github.com/hapijs/joi/issues/1937) Support post-validation async operations
- [#1935](https://github.com/hapijs/joi/issues/1935) Rename var to expression and x
- [#1932](https://github.com/hapijs/joi/issues/1932) Support base parameters in extend()
- [#1930](https://github.com/hapijs/joi/issues/1930) Template calculations
- [#1929](https://github.com/hapijs/joi/issues/1929) Cast date and boolean to number
- [#1925](https://github.com/hapijs/joi/issues/1925) Cast to string
- [#1924](https://github.com/hapijs/joi/issues/1924) Move dateFormat pref out of errors
- [#1922](https://github.com/hapijs/joi/issues/1922) Support ref into Set and Map cast values
- [#1921](https://github.com/hapijs/joi/issues/1921) Replace raw flag with result flag in description
- [#1920](https://github.com/hapijs/joi/issues/1920) Remove support for raw(false)
- [#1919](https://github.com/hapijs/joi/issues/1919) Cannot combine function rules with object keys
- [#1917](https://github.com/hapijs/joi/issues/1917) Complex conditional validation
- [#1914](https://github.com/hapijs/joi/issues/1914) A way to cast the result of a array to Set and object to Map
- [#1913](https://github.com/hapijs/joi/issues/1913) Prevent mixing different versions of joi schema types
- [#1912](https://github.com/hapijs/joi/issues/1912) Identify blocked schema (valid + invalid = no valid options)
- [#1911](https://github.com/hapijs/joi/issues/1911) Unknown object keys ignore abortEarly flag
- [#1907](https://github.com/hapijs/joi/issues/1907) Support ref in prefs.errors.language
- [#1906](https://github.com/hapijs/joi/issues/1906) Precompile prefs.messages and extensions
- [#1905](https://github.com/hapijs/joi/issues/1905) Move error related prefs to `errors`
- [#1904](https://github.com/hapijs/joi/issues/1904) Remove ability to change template for implicit label prefix in error messages
- [#1903](https://github.com/hapijs/joi/issues/1903) Remove implicit label prefix for error messages
- [#1902](https://github.com/hapijs/joi/issues/1902) Rename `language` preference to `messages`
- [#1901](https://github.com/hapijs/joi/issues/1901) Rename messages.wrapArrays with wrapArrays
- [#1898](https://github.com/hapijs/joi/issues/1898) Change object.rename() from description to { regex } when using from pattern
- [#1896](https://github.com/hapijs/joi/issues/1896) Support `{.}` in error for value
- [#1895](https://github.com/hapijs/joi/issues/1895) Remove isJoi from Errors.Report
- [#1894](https://github.com/hapijs/joi/issues/1894) Pre-compile error messages
- [#1893](https://github.com/hapijs/joi/issues/1893) Language format requires # prefix for error context
- [#1892](https://github.com/hapijs/joi/issues/1892) Change "context:" ref prefix in errors to "ref:global:"
- [#1891](https://github.com/hapijs/joi/issues/1891) Replace ref.type description to ref.ref
- [#1890](https://github.com/hapijs/joi/issues/1890) Replace {{!var}} notation with {var}
- [#1889](https://github.com/hapijs/joi/issues/1889) Replace escapeHtml with escapeErrors
- [#1888](https://github.com/hapijs/joi/issues/1888) Joi.ref() is not a function
- [#1887](https://github.com/hapijs/joi/issues/1887) Remove object.rename.regex.multiple and object.rename.regex.override errors
- [#1886](https://github.com/hapijs/joi/issues/1886) Change object.rename() override option to not delete existing if nothing match
- [#1885](https://github.com/hapijs/joi/issues/1885) array().sort([{ order, by }])
- [#1884](https://github.com/hapijs/joi/pull/1884) Fix: Exponential decimal #1876
- [#1881](https://github.com/hapijs/joi/issues/1881) Mark rule for keep
- [#1878](https://github.com/hapijs/joi/issues/1878) Flatten language object
- [#1877](https://github.com/hapijs/joi/issues/1877) Rule sets
- [#1876](https://github.com/hapijs/joi/issues/1876) Joi.number() throws error for "0.00000095" string.
- [#1875](https://github.com/hapijs/joi/issues/1875) Labels only used on path edge
- [#1874](https://github.com/hapijs/joi/issues/1874) Remove flags argument from createError()
- [#1873](https://github.com/hapijs/joi/issues/1873) Add object.schema() type support
- [#1872](https://github.com/hapijs/joi/issues/1872) Replace alternatives.child with alternatives.match error code
- [#1870](https://github.com/hapijs/joi/issues/1870) New alternatives.types error code
- [#1869](https://github.com/hapijs/joi/issues/1869) Remove support for string or array or errors return value from error() function
- [#1867](https://github.com/hapijs/joi/issues/1867) Bidirectional describe() &lt;-&gt; build()
- [#1866](https://github.com/hapijs/joi/issues/1866) Support multiple languages at the same time
- [#1865](https://github.com/hapijs/joi/issues/1865) Joi.ref() map option
- [#1864](https://github.com/hapijs/joi/issues/1864) Merge positive and negative number rules into single sign rule
- [#1862](https://github.com/hapijs/joi/issues/1862) Consistently use Utils.assertOptions() in all rules with options
- [#1860](https://github.com/hapijs/joi/issues/1860) when() switch statement
- [#1859](https://github.com/hapijs/joi/issues/1859) Remove any.createOverrideError()
- [#1858](https://github.com/hapijs/joi/issues/1858) Remove this from error() function
- [#1857](https://github.com/hapijs/joi/issues/1857) Remove self option from error()
- [#1856](https://github.com/hapijs/joi/issues/1856) Remove automatic example validation
- [#1854](https://github.com/hapijs/joi/issues/1854) .rename() causes errors when nothing has to be renamed
- [#1853](https://github.com/hapijs/joi/issues/1853) Remove case flag
- [#1852](https://github.com/hapijs/joi/issues/1852) Remove trim flag
- [#1851](https://github.com/hapijs/joi/issues/1851) Remove byteAligned flag
- [#1850](https://github.com/hapijs/joi/issues/1850) Remove precision flag
- [#1849](https://github.com/hapijs/joi/issues/1849) Error on unreachable when() statement
- [#1848](https://github.com/hapijs/joi/issues/1848) Forbid chaining when() calls when the first was not on alternatives type
- [#1847](https://github.com/hapijs/joi/issues/1847) any.error() fails to clear self option in override call
- [#1846](https://github.com/hapijs/joi/issues/1846) Skip type check if valids fail
- [#1843](https://github.com/hapijs/joi/issues/1843) Change object and array errors to use path instead of nested errors
- [#1842](https://github.com/hapijs/joi/pull/1842) String multiple email address
- [#1840](https://github.com/hapijs/joi/issues/1840) Limit array.single() to only non-array items
- [#1839](https://github.com/hapijs/joi/issues/1839) Remove Hoek.reach() options from Ref
- [#1838](https://github.com/hapijs/joi/issues/1838) Unique tests duplicated on concat()
- [#1837](https://github.com/hapijs/joi/issues/1837) Perform base type conversions before extension pre
- [#1836](https://github.com/hapijs/joi/issues/1836) Apply array.single() regardless of options.convert
- [#1835](https://github.com/hapijs/joi/issues/1835) Run extension coerce only if options.convert is true
- [#1834](https://github.com/hapijs/joi/issues/1834) Remove isJoi from schema
- [#1833](https://github.com/hapijs/joi/issues/1833) Array items using references to array peers are ignored in order of processing
- [#1832](https://github.com/hapijs/joi/issues/1832) Change reference view in array item rules
- [#1831](https://github.com/hapijs/joi/issues/1831) Move func().ref() to object().ref()
- [#1830](https://github.com/hapijs/joi/issues/1830) Change Ref to class
- [#1828](https://github.com/hapijs/joi/issues/1828) Remove isRegExp from object.rename description
- [#1827](https://github.com/hapijs/joi/issues/1827) string min/max/length description missing encoding
- [#1826](https://github.com/hapijs/joi/issues/1826) string.truncate() doesn't account for max with ref
- [#1825](https://github.com/hapijs/joi/issues/1825) Apply only last min/max/length rules
- [#1824](https://github.com/hapijs/joi/issues/1824) string methods change provided options
- [#1823](https://github.com/hapijs/joi/issues/1823) Description changes
- [#1822](https://github.com/hapijs/joi/issues/1822) Inconsistent reference error reporting
- [#1819](https://github.com/hapijs/joi/pull/1819) Reduce reach
- [#1812](https://github.com/hapijs/joi/issues/1812) Multiple email address validation
- [#1807](https://github.com/hapijs/joi/issues/1807) Ability to perform custom calculations on referenced fields
- [#1806](https://github.com/hapijs/joi/issues/1806) Number validation fails with a valid number (".30")
- [#1796](https://github.com/hapijs/joi/pull/1796) fix: copy object including Symbols
- [#1778](https://github.com/hapijs/joi/issues/1778) Make certain rules (min/max/length) override themselves revisited
- [#1770](https://github.com/hapijs/joi/pull/1770) Don't delete object key when it equals the rename.to in a rename with regex
- [#1769](https://github.com/hapijs/joi/pull/1769) Merge v14 changes
- [#1767](https://github.com/hapijs/joi/pull/1767) V14 temp
- [#1762](https://github.com/hapijs/joi/issues/1762) Customize formatting for dates in error messages of min/max/greater/less (with ISO default)
- [#1746](https://github.com/hapijs/joi/issues/1746) Validate base64 URI safe strings
- [#1737](https://github.com/hapijs/joi/issues/1737) Translate validation messages based on header request
- [#1736](https://github.com/hapijs/joi/issues/1736) truthy() / falsy() values apply when convert is false
- [#1732](https://github.com/hapijs/joi/issues/1732) Joi.string().uri() accepts "https://" as a valid url
- [#1730](https://github.com/hapijs/joi/issues/1730) Continue array validation even if items() fails
- [#1727](https://github.com/hapijs/joi/issues/1727) Caching for strings / numbers / booleans
- [#1723](https://github.com/hapijs/joi/pull/1723) Allow validate options to be passed through assert/attempt #1722
- [#1722](https://github.com/hapijs/joi/issues/1722) Check all errors on joi.assert and joi.attempt
- [#1705](https://github.com/hapijs/joi/issues/1705) Validate URI domain
- [#1702](https://github.com/hapijs/joi/issues/1702) Ref inside top-level array items/ordered
- [#1696](https://github.com/hapijs/joi/issues/1696) Joi should not strip non-enumerable properties of an object
- [#1695](https://github.com/hapijs/joi/issues/1695) Support schema keys with '.' (without forcing path reach)
- [#1687](https://github.com/hapijs/joi/issues/1687) Validation fails with valid UUID 3
- [#1652](https://github.com/hapijs/joi/pull/1652) Throw typed ValidationErrors
- [#1651](https://github.com/hapijs/joi/pull/1651) Reference above parent. Closes #1650
- [#1650](https://github.com/hapijs/joi/issues/1650) Support references above the parent
- [#1648](https://github.com/hapijs/joi/pull/1648) Move object rename to own function
- [#1646](https://github.com/hapijs/joi/pull/1646) Remove flatten arguments. Closes #1644
- [#1645](https://github.com/hapijs/joi/pull/1645) Support self references. Closes #1569
- [#1644](https://github.com/hapijs/joi/issues/1644) Remove all arguments flattening
- [#1623](https://github.com/hapijs/joi/issues/1623) Check for valid/invalid values after conversion only
- [#1613](https://github.com/hapijs/joi/pull/1613) Support ISO 8601 duration as a string validator
- [#1612](https://github.com/hapijs/joi/issues/1612) Validate ISO Duration string
- [#1606](https://github.com/hapijs/joi/issues/1606) schema.describe minor issues and feature suggestions
- [#1569](https://github.com/hapijs/joi/issues/1569) Allow self references
- [#1535](https://github.com/hapijs/joi/issues/1535) failover() support for default on errors
- [#1457](https://github.com/hapijs/joi/issues/1457) Specify required matches for .pattern()
- [#1403](https://github.com/hapijs/joi/issues/1403) Support regexp capture group for rename
- [#1264](https://github.com/hapijs/joi/issues/1264) Override rule message with any.message() rule
- [#1244](https://github.com/hapijs/joi/issues/1244) Throw typed errors
- [#925](https://github.com/hapijs/joi/issues/925) Validating a FQDN
- [#667](https://github.com/hapijs/joi/issues/667) Validate a number, which depends on other validate numbers

## Version 15 {#v15}

### [15.1.1](https://github.com/hapijs/joi/milestone/152) {#15.1.1}

- [#2047](https://github.com/hapijs/joi/issues/2047) Replace marker with Symbol.for()

### [15.1.0](https://github.com/hapijs/joi/milestone/150) {#15.1.0}

- [#1926](https://github.com/hapijs/joi/issues/1926) Add legacy API

### [15.0.3](https://github.com/hapijs/joi/milestone/149) {#15.0.3}

- [#1808](https://github.com/hapijs/joi/issues/1808) bool() cannot be binded

### [15.0.2](https://github.com/hapijs/joi/milestone/148) {#15.0.2}

- [#1801](https://github.com/hapijs/joi/pull/1801) remove strip from defaults now that it has been removed

### [15.0.1](https://github.com/hapijs/joi/milestone/147) <span class="breaking-badge"></span> {#15.0.1}

- [#1761](https://github.com/hapijs/joi/issues/1761) Validate object keys related to another value
- [#1753](https://github.com/hapijs/joi/issues/1753) Override extension language
- [#1750](https://github.com/hapijs/joi/pull/1750) Pass options to pattern validation to support refs
- [#1748](https://github.com/hapijs/joi/issues/1748) .pattern doesn't respect .valid when using .ref
- [#1747](https://github.com/hapijs/joi/issues/1747) Extension which has a return value in setup() does not call validate()
- [#1714](https://github.com/hapijs/joi/issues/1714) Undocumented strip option on Joi.validate
- [#1704](https://github.com/hapijs/joi/pull/1704) Resolved issue of maximum call stack exceeded
- [#1700](https://github.com/hapijs/joi/issues/1700) base64 validation returns RangeError

### [15.0.0](https://github.com/hapijs/joi/milestone/146) <a class="release-notes-link" href="https://github.com/hapijs/joi/issues/1776" target="_blank" title="View Release Notes"><img class="release-notes-img" src="/img/release-notes.png" alt="" /></a> <span class="breaking-badge"></span> {#15.0.0}

- [#1776](https://github.com/hapijs/joi/issues/1776) Replace isemail with @hapi/address
- [#1768](https://github.com/hapijs/joi/issues/1768) Fix dependency

## Version 14 {#v14}

### [14.5.0](https://github.com/hapijs/joi/milestone/151) {#14.5.0}

- [#1928](https://github.com/hapijs/joi/issues/1928) Add legacy API

### [14.4.0](https://github.com/hapijs/joi/milestone/145) {#14.4.0}

- [#1766](https://github.com/hapijs/joi/issues/1766) Change module namespace

### [14.3.1](https://github.com/hapijs/joi/milestone/142) {#14.3.1}

- [#1691](https://github.com/hapijs/joi/issues/1691) joi.bind yields any() methods not fully bound

### [14.3.0](https://github.com/hapijs/joi/milestone/141) {#14.3.0}

- [#1665](https://github.com/hapijs/joi/issues/1665) path-related methods (`with(), `nand()`...) broken when applied on `func()`
- [#1631](https://github.com/hapijs/joi/issues/1631) Destructuring Throws Fatal

### [14.2.0](https://github.com/hapijs/joi/milestone/140) {#14.2.0}

- [#1659](https://github.com/hapijs/joi/pull/1659) Add array().assertItem(). Closes #1656
- [#1656](https://github.com/hapijs/joi/issues/1656) Complex array validation requirements
- [#1608](https://github.com/hapijs/joi/issues/1608) Custom message overload another one
- [#1528](https://github.com/hapijs/joi/issues/1528) joi errors not overriding for nested objects
- [#1219](https://github.com/hapijs/joi/issues/1219) In case custom error messages are passed to Joi.any.error, joi.validate returning parent object error even if child validation fails.

### [14.1.1](https://github.com/hapijs/joi/milestone/139) {#14.1.1}

- [#1658](https://github.com/hapijs/joi/issues/1658) Extensions remove language of previous extension with the same base

### [14.1.0](https://github.com/hapijs/joi/milestone/137) {#14.1.0}

- [#1654](https://github.com/hapijs/joi/pull/1654) Bump to lab@18. Fixes #1653.
- [#1647](https://github.com/hapijs/joi/pull/1647) Add object().oxor(). Closes #1628
- [#1628](https://github.com/hapijs/joi/issues/1628) xor but none required

### [14.0.6](https://github.com/hapijs/joi/milestone/136) {#14.0.6}

- [#1607](https://github.com/hapijs/joi/issues/1607) invalid mime types on data uri

### [14.0.5](https://github.com/hapijs/joi/milestone/135) {#14.0.5}

- [#1638](https://github.com/hapijs/joi/pull/1638) fix condition, add tests for safe numbers
- [#1637](https://github.com/hapijs/joi/issues/1637) Using Number.MAX_SAFE_INTEGER throw error that number unsafe.

### [14.0.4](https://github.com/hapijs/joi/milestone/134) {#14.0.4}

- [#1634](https://github.com/hapijs/joi/issues/1634) Remove engines

### [14.0.2](https://github.com/hapijs/joi/milestone/133) {#14.0.2}

- [#1622](https://github.com/hapijs/joi/issues/1622) Maximum call stack size exceeded​​ error from Joi.defaults with Joi.empty flags

### [14.0.1](https://github.com/hapijs/joi/milestone/132) {#14.0.1}

- [#1617](https://github.com/hapijs/joi/issues/1617) object().with using nested paths validates when it shouldn't in Joi 14

### [14.0.0](https://github.com/hapijs/joi/milestone/130) <a class="release-notes-link" href="https://github.com/hapijs/joi/issues/1615" target="_blank" title="View Release Notes"><img class="release-notes-img" src="/img/release-notes.png" alt="" /></a> <span class="breaking-badge"></span> {#14.0.0}

- [#1615](https://github.com/hapijs/joi/issues/1615) 14.0.0 Release Notes
- [#1614](https://github.com/hapijs/joi/issues/1614) Default stripUnknown = true to only strip object keys, not arrays
- [#1595](https://github.com/hapijs/joi/issues/1595) Overriding array.min() when using reach
- [#1568](https://github.com/hapijs/joi/issues/1568) Trying to get multiple custom error messages in details array with {abortEarly: false}
- [#1555](https://github.com/hapijs/joi/issues/1555) Chaining multiple examples does not overwrite the old examples
- [#1554](https://github.com/hapijs/joi/pull/1554) #1477 Add Support for nested path with Joi.object().or(), .nand(), .and(), .with(), .without(), .xor()
- [#1544](https://github.com/hapijs/joi/issues/1544) Error at integer validation
- [#1504](https://github.com/hapijs/joi/issues/1504) Max safe integers
- [#1478](https://github.com/hapijs/joi/issues/1478) .example SHOULD perform validation on the provided value
- [#1477](https://github.com/hapijs/joi/issues/1477) Joi.object().or() does not support nested paths
- [#1429](https://github.com/hapijs/joi/issues/1429) Joi.string().regex() with support for all modifiers
- [#1364](https://github.com/hapijs/joi/issues/1364) Need to override twice the key name for error messages
- [#1258](https://github.com/hapijs/joi/issues/1258) Feature Request: lazy once
- [#1247](https://github.com/hapijs/joi/issues/1247) Year-only iso date string is parsed incorrectly
- [#1191](https://github.com/hapijs/joi/issues/1191) Chaining string.insensitive() will not convert values with lowercase/uppercase modifiers
- [#1127](https://github.com/hapijs/joi/issues/1127) Make certain rules override themselves
- [#1113](https://github.com/hapijs/joi/issues/1113) Number validation on '0x1' reports no error with a value of 0.

## Version 13 {#v13}

### [13.7.0](https://github.com/hapijs/joi/milestone/131) {#13.7.0}

- [#1562](https://github.com/hapijs/joi/pull/1562) Add symbol() type
- [#1420](https://github.com/hapijs/joi/issues/1420) Add Symbol() support

### [13.6.0](https://github.com/hapijs/joi/milestone/129) {#13.6.0}

- [#1558](https://github.com/hapijs/joi/issues/1558) Add value to number.base errors

### [13.5.2](https://github.com/hapijs/joi/milestone/128) {#13.5.2}

### [13.5.1](https://github.com/hapijs/joi/milestone/127) {#13.5.1}

### [13.5.0](https://github.com/hapijs/joi/milestone/126) {#13.5.0}

- [#1532](https://github.com/hapijs/joi/pull/1532) Add enabled flag to string.trim()
- [#1525](https://github.com/hapijs/joi/issues/1525) Add boolean flag to Joi.string().trim()
- [#1511](https://github.com/hapijs/joi/pull/1511) Add optional "config" param to array.unique for ignoreUndefined. Closes #1498
- [#1510](https://github.com/hapijs/joi/pull/1510) Data uri validation
- [#1498](https://github.com/hapijs/joi/issues/1498) Validating unique optional fields in array elements.
- [#1487](https://github.com/hapijs/joi/pull/1487) Allow square braces in URL validation
- [#1461](https://github.com/hapijs/joi/issues/1461) URI validator rejects query param square brackets
- [#999](https://github.com/hapijs/joi/issues/999) Where is the documentation for `this.createError()`?

### [13.4.0](https://github.com/hapijs/joi/milestone/125) {#13.4.0}

- [#1521](https://github.com/hapijs/joi/issues/1521) Extended object does not parse JSON
- [#1515](https://github.com/hapijs/joi/issues/1515) Joi.reach() can no longer handles empty string path
- [#1514](https://github.com/hapijs/joi/pull/1514) remove indirect require reference to index.js
- [#1513](https://github.com/hapijs/joi/issues/1513) require('../') statement in schemas.js causing bundler issues.
- [#1500](https://github.com/hapijs/joi/pull/1500) add date greater less rules
- [#1499](https://github.com/hapijs/joi/pull/1499) Allow object keys to be verified by schema
- [#1382](https://github.com/hapijs/joi/issues/1382) Add a key validator with Joi objects
- [#1000](https://github.com/hapijs/joi/issues/1000) Correct way to write an "identity" extension?

### [13.3.0](https://github.com/hapijs/joi/milestone/124) {#13.3.0}

- [#1479](https://github.com/hapijs/joi/issues/1479) Is it possible to capture the value of field being validated in custom error messages using the options - language
- [#1438](https://github.com/hapijs/joi/pull/1438) Use Set() for handling of unprocessed keys
- [#1422](https://github.com/hapijs/joi/pull/1422) Add byteAligned option to hex string
- [#1415](https://github.com/hapijs/joi/pull/1415) Use Set() for internal Set backend

### [13.2.0](https://github.com/hapijs/joi/milestone/123) {#13.2.0}

- [#1476](https://github.com/hapijs/joi/issues/1476) Cannot validate an array with 'constructor' as unique entry
- [#1452](https://github.com/hapijs/joi/pull/1452) Add new validation number().port()
- [#1448](https://github.com/hapijs/joi/pull/1448) Include describe() documentation in API. Fixes #1447
- [#1435](https://github.com/hapijs/joi/pull/1435) Add an object.append() method. Fixes #1381.
- [#1433](https://github.com/hapijs/joi/pull/1433) Changed a separator for path parameter to pre-split array approach for Joi.reach
- [#1423](https://github.com/hapijs/joi/pull/1423) Avoid redundant copies of settings
- [#1414](https://github.com/hapijs/joi/pull/1414) Fix cloned valid() / invalid() object values
- [#1383](https://github.com/hapijs/joi/issues/1383) Add an separator parameter to Joi.reach
- [#1381](https://github.com/hapijs/joi/issues/1381) Add an object.append() method
- [#1346](https://github.com/hapijs/joi/issues/1346) Validate port numbers

### [13.1.2](https://github.com/hapijs/joi/milestone/122) {#13.1.2}

- [#1392](https://github.com/hapijs/joi/issues/1392) undefined in the array with label returns wrong missing value message

### [13.1.1](https://github.com/hapijs/joi/milestone/121) {#13.1.1}

- [#1395](https://github.com/hapijs/joi/pull/1395) Asserts that two arguments are provided to object.with() and object.without()

### [13.1.0](https://github.com/hapijs/joi/milestone/120) {#13.1.0}

- [#1386](https://github.com/hapijs/joi/pull/1386) Fix object pattern in combination with empty

### [13.0.2](https://github.com/hapijs/joi/milestone/119) {#13.0.2}

- [#1354](https://github.com/hapijs/joi/pull/1354) Remove validation from .example
- [#1350](https://github.com/hapijs/joi/issues/1350) joi.ref doesn't work properly with max() function for dependant dates
- [#1189](https://github.com/hapijs/joi/issues/1189) Should .example perform validation on the provided value?

### [13.0.1](https://github.com/hapijs/joi/milestone/118) {#13.0.1}

- [#1334](https://github.com/hapijs/joi/issues/1334) Impossible to disable language.key in options

### [13.0.0](https://github.com/hapijs/joi/milestone/117) <a class="release-notes-link" href="https://github.com/hapijs/joi/issues/1328" target="_blank" title="View Release Notes"><img class="release-notes-img" src="/img/release-notes.png" alt="" /></a> <span class="breaking-badge"></span> {#13.0.0}

- [#1328](https://github.com/hapijs/joi/issues/1328) 13.0.0 Release Notes
- [#1327](https://github.com/hapijs/joi/issues/1327) Bump joi to node 8+

## Version 12 {#v12}

### [12.1.0](https://github.com/hapijs/joi/milestone/143) <span class="breaking-badge"></span> {#12.1.0}

- [#1757](https://github.com/hapijs/joi/issues/1757) Commercial version of v12 branch

### [12.0.0](https://github.com/hapijs/joi/milestone/112) <a class="release-notes-link" href="https://github.com/hapijs/joi/issues/1326" target="_blank" title="View Release Notes"><img class="release-notes-img" src="/img/release-notes.png" alt="" /></a> <span class="breaking-badge"></span> {#12.0.0}

- [#1326](https://github.com/hapijs/joi/issues/1326) 12.0.0 Release Notes
- [#921](https://github.com/hapijs/joi/issues/921) $-sign in object keys are escaped in the ValidationError message

## Version 11 {#v11}

### [11.4.0](https://github.com/hapijs/joi/milestone/116) {#11.4.0}

- [#1325](https://github.com/hapijs/joi/issues/1325) Allow `alternatives.when` to "peek" inside the current value

### [11.3.4](https://github.com/hapijs/joi/milestone/115) {#11.3.4}

- [#1230](https://github.com/hapijs/joi/issues/1230) Missing `language` entry in `joi.extend` causes obscure runtime error

### [11.3.1](https://github.com/hapijs/joi/milestone/114) {#11.3.1}

- [#1311](https://github.com/hapijs/joi/issues/1311) import { any } does not work on v11

### [11.3.0](https://github.com/hapijs/joi/milestone/113) {#11.3.0}

- [#1240](https://github.com/hapijs/joi/pull/1240) Fixes [#1239]
- [#1239](https://github.com/hapijs/joi/issues/1239) Rename multiple keys to another name

### [11.2.0](https://github.com/hapijs/joi/milestone/111) {#11.2.0}

- [#1308](https://github.com/hapijs/joi/pull/1308) Add Joi.func().class()

### [11.1.1](https://github.com/hapijs/joi/milestone/110) {#11.1.1}

- [#1316](https://github.com/hapijs/joi/issues/1316) Remove items module dependency

### [11.1.0](https://github.com/hapijs/joi/milestone/109) {#11.1.0}

- [#1315](https://github.com/hapijs/joi/pull/1315) Add promise-like API to validate. Fixes #1314.
- [#1314](https://github.com/hapijs/joi/issues/1314) Support promises on `validate()`
- [#1291](https://github.com/hapijs/joi/pull/1291) Add string.normalize for unicode normalization
- [#1289](https://github.com/hapijs/joi/issues/1289) Feature request: Unicode normalization

### [11.0.3](https://github.com/hapijs/joi/milestone/108) {#11.0.3}

- [#1266](https://github.com/hapijs/joi/pull/1266) remove empty flag if only reset is used
- [#1249](https://github.com/hapijs/joi/issues/1249) describe doesn't work for empty() breaking lout

### [11.0.2](https://github.com/hapijs/joi/milestone/107) {#11.0.2}

- [#1303](https://github.com/hapijs/joi/issues/1303) empty string is wrongly accepted as a timestamp

### [11.0.0](https://github.com/hapijs/joi/milestone/95) <a class="release-notes-link" href="https://github.com/hapijs/joi/issues/1302" target="_blank" title="View Release Notes"><img class="release-notes-img" src="/img/release-notes.png" alt="" /></a> <span class="breaking-badge"></span> {#11.0.0}

- [#1302](https://github.com/hapijs/joi/issues/1302) 11.0.0 Release Notes
- [#1283](https://github.com/hapijs/joi/issues/1283) Error: Item cannot come after itself
- [#1282](https://github.com/hapijs/joi/issues/1282) There is a bug in 10.6.0 API Reference.
- [#1278](https://github.com/hapijs/joi/issues/1278) Joi.defaults(): Cannot default object type
- [#1256](https://github.com/hapijs/joi/pull/1256) Add `Joi.defaults()`
- [#1254](https://github.com/hapijs/joi/issues/1254) ipv6 with cidr greater than 32
- [#1235](https://github.com/hapijs/joi/pull/1235) Fix Value Range for IPv6 CIDRs
- [#1232](https://github.com/hapijs/joi/issues/1232) ipv6 string with mask between 33 and 128 are rejected.
- [#1229](https://github.com/hapijs/joi/pull/1229) Update isemail from 2.x.x to 3.x.x
- [#1197](https://github.com/hapijs/joi/pull/1197) Allow passing an option to string().isoDate()
- [#1196](https://github.com/hapijs/joi/issues/1196) string isoDate should allow the string to be converted to same format as date iso schema
- [#1167](https://github.com/hapijs/joi/issues/1167) Errors: context.key is actually the label, not the key
- [#1126](https://github.com/hapijs/joi/pull/1126) Passes the "default" function to the schema description
- [#1121](https://github.com/hapijs/joi/issues/1121) [Request] Add detail to .describe for function defaults
- [#931](https://github.com/hapijs/joi/issues/931) Email validation doesn't allow emails which are compliant with RFC 6530

## Version 10 {#v10}

### [10.6.0](https://github.com/hapijs/joi/milestone/106) {#10.6.0}

- [#1215](https://github.com/hapijs/joi/pull/1215) #1201 - setup can return joi object to replace origin schema
- [#1211](https://github.com/hapijs/joi/pull/1211) Performance Improvements for string().guid()
- [#1206](https://github.com/hapijs/joi/pull/1206) Added the ability to use a reference for Array min/max/length
- [#1201](https://github.com/hapijs/joi/issues/1201) Question: how to extend joi to add some key by rule?
- [#1174](https://github.com/hapijs/joi/pull/1174) Fix #1156 - Adds support for optional base64 padding validation.
- [#1156](https://github.com/hapijs/joi/issues/1156) base64 validation too strict; padding is optional
- [#1017](https://github.com/hapijs/joi/issues/1017) Array length cannot reference to another field

### [10.5.2](https://github.com/hapijs/joi/milestone/105) {#10.5.2}

- [#1199](https://github.com/hapijs/joi/pull/1199) Make isemail an optional dependency

### [10.5.1](https://github.com/hapijs/joi/milestone/104) {#10.5.1}

- [#1203](https://github.com/hapijs/joi/issues/1203) Nested child/uncle condition causes annotate() to throw

### [10.5.0](https://github.com/hapijs/joi/milestone/103) {#10.5.0}

- [#1183](https://github.com/hapijs/joi/pull/1183) add forbiddenKeys method to object

### [10.4.2](https://github.com/hapijs/joi/milestone/102) {#10.4.2}

- [#1161](https://github.com/hapijs/joi/pull/1161) Alternatives respect subsequent "when"s if first has only "otherwise"
- [#1151](https://github.com/hapijs/joi/issues/1151) Alternatives based on a type with only otherwise take precedence over any following one
- [#1146](https://github.com/hapijs/joi/issues/1146) Keep converted values even when stripped for reference uses
- [#1132](https://github.com/hapijs/joi/pull/1132) Add "options" to describe output
- [#1130](https://github.com/hapijs/joi/issues/1130) Joi.any().options() should be reported in .describe()

### [10.4.1](https://github.com/hapijs/joi/milestone/101) {#10.4.1}

- [#1119](https://github.com/hapijs/joi/issues/1119) alternatives doesn't work with error
- [#844](https://github.com/hapijs/joi/issues/844) Label in object.and()

### [10.4.0](https://github.com/hapijs/joi/milestone/100) {#10.4.0}

- [#1131](https://github.com/hapijs/joi/pull/1131) Add basic error overriding

### [10.3.4](https://github.com/hapijs/joi/milestone/99) {#10.3.4}

- [#1143](https://github.com/hapijs/joi/issues/1143) number().integer() can fail for values outside MAX_SAFE_INTEGER

### [10.3.3](https://github.com/hapijs/joi/milestone/98) {#10.3.3}

- [#1145](https://github.com/hapijs/joi/issues/1145) Don't try to touch custom error messages with attempt message

### [10.3.2](https://github.com/hapijs/joi/milestone/97) {#10.3.2}

- [#1144](https://github.com/hapijs/joi/issues/1144) Possible bug in custom Error message

### [10.3.1](https://github.com/hapijs/joi/milestone/96) {#10.3.1}

- [#1097](https://github.com/hapijs/joi/pull/1097) Fix #964 Joi wrong value parsing
- [#964](https://github.com/hapijs/joi/issues/964) Joi wrong value parsing

### [10.3.0](https://github.com/hapijs/joi/milestone/94) {#10.3.0}

- [#1128](https://github.com/hapijs/joi/issues/1128) Avoid unnecessary clones
- [#1067](https://github.com/hapijs/joi/issues/1067) "Describe" behavior changes for "implicit" Any with extended Joi
- [#1047](https://github.com/hapijs/joi/issues/1047) Creating multiple extensions for the same base type
- [#983](https://github.com/hapijs/joi/issues/983) Unexpected interaction between Joi.object().unknown() and stripUnknown
- [#831](https://github.com/hapijs/joi/issues/831) Joi valid fails, when ref is used with a stripped key.

### [10.2.2](https://github.com/hapijs/joi/milestone/93) {#10.2.2}

- [#1103](https://github.com/hapijs/joi/pull/1103) allow param defaults to be set by the param validations

### [10.2.1](https://github.com/hapijs/joi/milestone/92) {#10.2.1}

- [#1095](https://github.com/hapijs/joi/issues/1095) noDefaults behaviour with any.empty()

### [10.2.0](https://github.com/hapijs/joi/milestone/91) {#10.2.0}

- [#1076](https://github.com/hapijs/joi/pull/1076) Added support for ISO_8601 expansion (+/-YYYYYY)

### [10.1.0](https://github.com/hapijs/joi/milestone/90) {#10.1.0}

- [#1075](https://github.com/hapijs/joi/issues/1075) Allow shorthand accessor string in array().unique()
- [#1073](https://github.com/hapijs/joi/issues/1073) Provide value which duplicates an item in array().unique()
- [#1072](https://github.com/hapijs/joi/issues/1072) Path of array().unique() is wrong

### [10.0.6](https://github.com/hapijs/joi/milestone/89) <span class="breaking-badge"></span> {#10.0.6}

- [#1065](https://github.com/hapijs/joi/issues/1065) Fix boolean strings parsing

### [10.0.4](https://github.com/hapijs/joi/milestone/88) {#10.0.4}

### [10.0.3](https://github.com/hapijs/joi/milestone/87) {#10.0.3}

- [#1054](https://github.com/hapijs/joi/pull/1054) adding validation for unnecessary arguments in primary types.
- [#1009](https://github.com/hapijs/joi/issues/1009) Request: Warn when functions are passed unexpected arguments

### [10.0.2](https://github.com/hapijs/joi/milestone/86) {#10.0.2}

- [#1052](https://github.com/hapijs/joi/issues/1052) [Request] truthy/falsy case insensitive

### [10.0.1](https://github.com/hapijs/joi/milestone/85) {#10.0.1}

- [#1039](https://github.com/hapijs/joi/issues/1039) trim + empty confuses me

### [10.0.0](https://github.com/hapijs/joi/milestone/84) <a class="release-notes-link" href="https://github.com/hapijs/joi/issues/1037" target="_blank" title="View Release Notes"><img class="release-notes-img" src="/img/release-notes.png" alt="" /></a> <span class="breaking-badge"></span> {#10.0.0}

- [#1037](https://github.com/hapijs/joi/issues/1037) 10.0.0 Release Notes
- [#1035](https://github.com/hapijs/joi/pull/1035) Implement String.regex "invalidate" configuration
- [#1034](https://github.com/hapijs/joi/pull/1034) added support for string.uri relativeOnly option
- [#1032](https://github.com/hapijs/joi/pull/1032) Clean up any.valid code
- [#1030](https://github.com/hapijs/joi/issues/1030) Conditional validation of object properties with different parent key
- [#1028](https://github.com/hapijs/joi/pull/1028) Extend describe() for type
- [#1027](https://github.com/hapijs/joi/pull/1027) Extending describe() to include renames in metadata
- [#1026](https://github.com/hapijs/joi/issues/1026) object renames do not appear in describe api.
- [#1020](https://github.com/hapijs/joi/issues/1020) Joi.string().invalid (not, disallow) doesn't support regex?
- [#1016](https://github.com/hapijs/joi/pull/1016) Added a string.base64() method.
- [#1015](https://github.com/hapijs/joi/issues/1015) Suggestion: Joi.string().uri({ allowRelativeOnly })
- [#1010](https://github.com/hapijs/joi/pull/1010) Update Joi.validate options with removal of error
- [#998](https://github.com/hapijs/joi/pull/998) Add support for truthy/falsy boolean values
- [#985](https://github.com/hapijs/joi/issues/985) Move time rules to an extension

## Version 9 {#v9}

### [9.2.0](https://github.com/hapijs/joi/milestone/83) {#9.2.0}

- [#1008](https://github.com/hapijs/joi/pull/1008) Bugfix/error annotate

### [9.1.1](https://github.com/hapijs/joi/milestone/82) {#9.1.1}

- [#1002](https://github.com/hapijs/joi/issues/1002) Ref will not be converted if it is inside array passed to default

### [9.1.0](https://github.com/hapijs/joi/milestone/81) {#9.1.0}

- [#989](https://github.com/hapijs/joi/pull/989) Adds UUID Support

### [9.0.4](https://github.com/hapijs/joi/milestone/80) {#9.0.4}

- [#947](https://github.com/hapijs/joi/issues/947) .without(), runs before .empty()

### [9.0.3](https://github.com/hapijs/joi/milestone/79) {#9.0.3}

- [#945](https://github.com/hapijs/joi/issues/945) required() does not catch specific empty values

### [9.0.2](https://github.com/hapijs/joi/milestone/78) {#9.0.2}

- [#960](https://github.com/hapijs/joi/issues/960) Coercion doesn't run early enough

### [9.0.1](https://github.com/hapijs/joi/milestone/77) {#9.0.1}

- [#949](https://github.com/hapijs/joi/pull/949) Returning credit card number when is valid, fixes #948
- [#948](https://github.com/hapijs/joi/issues/948) Credit Card returning null when valid

### [9.0.0](https://github.com/hapijs/joi/milestone/64) <a class="release-notes-link" href="https://github.com/hapijs/joi/issues/920" target="_blank" title="View Release Notes"><img class="release-notes-img" src="/img/release-notes.png" alt="" /></a> <span class="breaking-badge"></span> {#9.0.0}

- [#934](https://github.com/hapijs/joi/pull/934) Fix missing top-level methods
- [#933](https://github.com/hapijs/joi/issues/933) Extended Joi does not contain certain top-level functions
- [#929](https://github.com/hapijs/joi/issues/929) labels don't always get included in error messages with Joi.extend()
- [#928](https://github.com/hapijs/joi/issues/928) Different error message for date().format()
- [#927](https://github.com/hapijs/joi/issues/927) Check error messages in tests
- [#920](https://github.com/hapijs/joi/issues/920) 9.0.0 Release Notes
- [#918](https://github.com/hapijs/joi/pull/918) number.multiple() enhancement - Issue #916
- [#916](https://github.com/hapijs/joi/issues/916) number.multiple() throws exception for non-integer and ref values
- [#899](https://github.com/hapijs/joi/issues/899) Treat empty string as null
- [#894](https://github.com/hapijs/joi/issues/894) Add Joi.object().schema()
- [#893](https://github.com/hapijs/joi/pull/893) Fix item ref. Closes #892
- [#892](https://github.com/hapijs/joi/issues/892) References in array items() do not work
- [#880](https://github.com/hapijs/joi/pull/880) Add synchronous extensibility
- [#874](https://github.com/hapijs/joi/issues/874) any.label() significantly slows validation of large arrays
- [#860](https://github.com/hapijs/joi/pull/860) Add the ability to specify a comparator for `array.unique()` for objects only
- [#859](https://github.com/hapijs/joi/issues/859) custom compare for Joi.array().unique()
- [#856](https://github.com/hapijs/joi/pull/856) Allow 1 to be true and 0 to be false.
- [#577](https://github.com/hapijs/joi/issues/577) RFC: Joi plugins/extensions/custom functions

## Version 8 {#v8}

### [8.4.2](https://github.com/hapijs/joi/milestone/76) {#8.4.2}

- [#919](https://github.com/hapijs/joi/issues/919) joi.date().timestamp() failing validation for millisecond value

### [8.4.1](https://github.com/hapijs/joi/milestone/75) {#8.4.1}

- [#909](https://github.com/hapijs/joi/issues/909) Using empty in items on sparse array allows undefined elements.

### [8.4.0](https://github.com/hapijs/joi/milestone/74) {#8.4.0}

- [#884](https://github.com/hapijs/joi/issues/884) Synchronous schema.validate fails if called with options

### [8.3.0](https://github.com/hapijs/joi/milestone/73) {#8.3.0}

- [#904](https://github.com/hapijs/joi/issues/904) Add stripUnknownKeys option to Joi.validate
- [#903](https://github.com/hapijs/joi/issues/903) stripUnknown: What is the expected behavior when validating nested data? (array)

### [8.2.0](https://github.com/hapijs/joi/milestone/71) {#8.2.0}

- [#833](https://github.com/hapijs/joi/issues/833) Proposal: string().truncate()
- [#379](https://github.com/hapijs/joi/issues/379) Recursive schema (tree-like) validation

### [8.1.1](https://github.com/hapijs/joi/milestone/72) {#8.1.1}

- [#900](https://github.com/hapijs/joi/issues/900) When using reach, changing the label doesn't get applied, when an existing label is there

### [8.1.0](https://github.com/hapijs/joi/milestone/69) {#8.1.0}

- [#883](https://github.com/hapijs/joi/pull/883) Support error override per rule. Closes #882
- [#882](https://github.com/hapijs/joi/issues/882) Support error override per rule

### [8.0.5](https://github.com/hapijs/joi/milestone/70) {#8.0.5}

- [#851](https://github.com/hapijs/joi/issues/851) Joi 8.x breaks describe().meta in alternatives

### [8.0.4](https://github.com/hapijs/joi/milestone/68) {#8.0.4}

- [#837](https://github.com/hapijs/joi/pull/837) Fix RegEx translation of IP6 BNF, where [] denotes an option

### [8.0.3](https://github.com/hapijs/joi/milestone/67) {#8.0.3}

- [#834](https://github.com/hapijs/joi/issues/834) TypeError: cannot delete property '0' of [object String]

### [8.0.2](https://github.com/hapijs/joi/milestone/66) {#8.0.2}

- [#830](https://github.com/hapijs/joi/pull/830) Return any.empty error for trimmed whitespace (fixes #827)
- [#828](https://github.com/hapijs/joi/issues/828) Example for Array Schema Not Possible
- [#827](https://github.com/hapijs/joi/issues/827) Unexpected Errors with Strings

### [8.0.1](https://github.com/hapijs/joi/milestone/65) {#8.0.1}

- [#824](https://github.com/hapijs/joi/issues/824) Description of assert modifying the original value

### [8.0.0](https://github.com/hapijs/joi/milestone/30) <a class="release-notes-link" href="https://github.com/hapijs/joi/issues/823" target="_blank" title="View Release Notes"><img class="release-notes-img" src="/img/release-notes.png" alt="" /></a> <span class="breaking-badge"></span> {#8.0.0}

- [#823](https://github.com/hapijs/joi/issues/823) 8.0.0 Release Notes
- [#822](https://github.com/hapijs/joi/issues/822) Problem with multiple when and conditional forbidden field
- [#763](https://github.com/hapijs/joi/issues/763) Multiple alternatives with default
- [#735](https://github.com/hapijs/joi/pull/735) Print string versions of NaN, Infinity and -Infinity - resolves #696
- [#696](https://github.com/hapijs/joi/issues/696) NaN printed in cosole as null
- [#592](https://github.com/hapijs/joi/issues/592) Some refs not converted in .describe()

## Version 7 {#v7}

### [7.3.0](https://github.com/hapijs/joi/milestone/63) {#7.3.0}

- [#815](https://github.com/hapijs/joi/issues/815) uri() fails RFC3986 4.2 relative reference URIs
- [#807](https://github.com/hapijs/joi/issues/807) Question: Validate against sub-schema?
- [#565](https://github.com/hapijs/joi/issues/565) Combine uppercase with valid

### [7.2.3](https://github.com/hapijs/joi/milestone/62) {#7.2.3}

- [#812](https://github.com/hapijs/joi/issues/812) Improve error message

### [7.2.2](https://github.com/hapijs/joi/milestone/61) {#7.2.2}

- [#803](https://github.com/hapijs/joi/issues/803) Label declaration/Validation

### [7.2.1](https://github.com/hapijs/joi/milestone/60) {#7.2.1}

- [#800](https://github.com/hapijs/joi/pull/800) Generate versioned API Reference link in README

### [7.2.0](https://github.com/hapijs/joi/milestone/59) {#7.2.0}

- [#791](https://github.com/hapijs/joi/pull/791) Date enhancements and support for Unix Timestamps
- [#789](https://github.com/hapijs/joi/issues/789) Date() does not validate Unix timestamp with fractional seconds (decimals)
- [#787](https://github.com/hapijs/joi/pull/787) Add a arity predicate for functions

### [7.1.0](https://github.com/hapijs/joi/milestone/58) {#7.1.0}

- [#779](https://github.com/hapijs/joi/issues/779) Throw custom Joi Errors

### [7.0.1](https://github.com/hapijs/joi/milestone/56) {#7.0.1}

- [#774](https://github.com/hapijs/joi/pull/774) Fix any.default() returns default object reference
- [#773](https://github.com/hapijs/joi/issues/773) `Joi.validate()` returns default object reference instead of clone

### [7.0.0](https://github.com/hapijs/joi/milestone/55) <a class="release-notes-link" href="https://github.com/hapijs/joi/issues/759" target="_blank" title="View Release Notes"><img class="release-notes-img" src="/img/release-notes.png" alt="" /></a> <span class="breaking-badge"></span> {#7.0.0}

- [#759](https://github.com/hapijs/joi/issues/759) 7.0.0 Release Notes
- [#756](https://github.com/hapijs/joi/pull/756) es6. Closes #754. Closes 755
- [#755](https://github.com/hapijs/joi/issues/755) Don't annotate non-object values
- [#754](https://github.com/hapijs/joi/issues/754) ES6 style changes and node v4

## Version 6 {#v6}

### [6.10.1](https://github.com/hapijs/joi/milestone/57) {#6.10.1}

- [#777](https://github.com/hapijs/joi/pull/777) Fix any.default() returns default object reference

### [6.10.0](https://github.com/hapijs/joi/milestone/53) {#6.10.0}

- [#753](https://github.com/hapijs/joi/issues/753) Add default status 400 to error thrown by Joi.assert()
- [#747](https://github.com/hapijs/joi/pull/747) removes leading "." from path at root object level
- [#740](https://github.com/hapijs/joi/issues/740) Exception throw on undefined object key makes it difficult to track down issue

### [6.9.1](https://github.com/hapijs/joi/milestone/54) {#6.9.1}

- [#745](https://github.com/hapijs/joi/issues/745) Describe ordered arrays
- [#737](https://github.com/hapijs/joi/pull/737) makes allow/valid/invalid not accept undefined #734
- [#734](https://github.com/hapijs/joi/issues/734) Joi shouldn't allow Joi.any().valid(undefined).required()

### [6.9.0](https://github.com/hapijs/joi/milestone/51) {#6.9.0}

- [#688](https://github.com/hapijs/joi/pull/688) Toggable ordered flag for array to match items against input in order
- [#659](https://github.com/hapijs/joi/issues/659) Allow treating arrays as objects

### [6.8.1](https://github.com/hapijs/joi/milestone/52) {#6.8.1}

- [#730](https://github.com/hapijs/joi/pull/730) Fix function properties validation. Closes #729
- [#729](https://github.com/hapijs/joi/issues/729) Function keys validation converts function to object

### [6.8.0](https://github.com/hapijs/joi/milestone/49) {#6.8.0}

- [#728](https://github.com/hapijs/joi/pull/728) Allow functions to act as objects. Closes #727
- [#727](https://github.com/hapijs/joi/issues/727) Allow function types to behave as object (e.g. have keys)

### [6.7.1](https://github.com/hapijs/joi/milestone/50) {#6.7.1}

- [#721](https://github.com/hapijs/joi/issues/721) The index of an incorrect array entry is returned instead of the field name

### [6.7.0](https://github.com/hapijs/joi/milestone/47) {#6.7.0}

- [#710](https://github.com/hapijs/joi/issues/710) Extending a schema
- [#708](https://github.com/hapijs/joi/pull/708) add attempt function
- [#703](https://github.com/hapijs/joi/issues/703) No dependency validation when object stripUnknown set to true
- [#702](https://github.com/hapijs/joi/pull/702) add hapi to package.json keywords so joi is searchable

### [6.6.1](https://github.com/hapijs/joi/milestone/48) {#6.6.1}

- [#693](https://github.com/hapijs/joi/issues/693) Use hasOwnProperty from native object

### [6.6.0](https://github.com/hapijs/joi/milestone/46) {#6.6.0}

- [#690](https://github.com/hapijs/joi/pull/690) removes trailing "." from or path
- [#684](https://github.com/hapijs/joi/pull/684) fix unknown nested key path
- [#683](https://github.com/hapijs/joi/pull/683) Add the "noDefaults" option
- [#682](https://github.com/hapijs/joi/issues/682) Validate without applying default values

### [6.5.0](https://github.com/hapijs/joi/milestone/45) {#6.5.0}

- [#668](https://github.com/hapijs/joi/pull/668) allow passing an error object as message to assert
- [#656](https://github.com/hapijs/joi/pull/656) Updated regexp for more robust ISO 8601 validation
- [#649](https://github.com/hapijs/joi/pull/649) Implementation of white space normalisation.
- [#648](https://github.com/hapijs/joi/issues/648) Allow normalisation of white space
- [#586](https://github.com/hapijs/joi/issues/586) [request] string().replace(pattern)

### [6.4.3](https://github.com/hapijs/joi/milestone/44) {#6.4.3}

- [#660](https://github.com/hapijs/joi/issues/660) stripUnkown on arrays removes valid objects when multiple items are defined

### [6.4.2](https://github.com/hapijs/joi/milestone/43) {#6.4.2}

- [#654](https://github.com/hapijs/joi/pull/654) Fix allowing context refs on some string, number and date methods

### [6.4.0](https://github.com/hapijs/joi/milestone/42) {#6.4.0}

- [#629](https://github.com/hapijs/joi/issues/629) help with `.or()`

### [6.3.0](https://github.com/hapijs/joi/milestone/41) {#6.3.0}

- [#632](https://github.com/hapijs/joi/issues/632) Nested whens don't work

### [6.2.0](https://github.com/hapijs/joi/milestone/40) {#6.2.0}

- [#413](https://github.com/hapijs/joi/issues/413) Create default [highly nested] object easily?

### [6.1.2](https://github.com/hapijs/joi/milestone/39) {#6.1.2}

- [#628](https://github.com/hapijs/joi/issues/628) Alternatives throw typeError when "is: null" is used

### [6.1.1](https://github.com/hapijs/joi/milestone/38) {#6.1.1}

- [#627](https://github.com/hapijs/joi/issues/627) Property is always required even when my When() condition isn't met.

### [6.1.0](https://github.com/hapijs/joi/milestone/34) {#6.1.0}

- [#619](https://github.com/hapijs/joi/pull/619) Add IP Address Validation and Separate IP and URI Logic to Files
- [#616](https://github.com/hapijs/joi/pull/616) Add ignoreUndefined flag for rename()
- [#614](https://github.com/hapijs/joi/issues/614) Error when .rename() from undefined
- [#611](https://github.com/hapijs/joi/pull/611) Number compare functions allow decimal numbers
- [#610](https://github.com/hapijs/joi/pull/610) Support for decimal numbers for min, max, less, greater number methods
- [#609](https://github.com/hapijs/joi/issues/609) number min/max/greater/less do not allow decimal values
- [#597](https://github.com/hapijs/joi/pull/597) Add reference support for String.min/max/length
- [#596](https://github.com/hapijs/joi/pull/596) Add reference support for Number.min/max/greater/less
- [#583](https://github.com/hapijs/joi/issues/583) do ref-able operations support referring to a list?
- [#560](https://github.com/hapijs/joi/issues/560) References for Number comparisons?
- [#380](https://github.com/hapijs/joi/issues/380) Comparison between fields

### [6.0.7](https://github.com/hapijs/joi/milestone/37) {#6.0.7}

- [#580](https://github.com/hapijs/joi/issues/580) Annotate fails on circular objects

### [6.0.6](https://github.com/hapijs/joi/milestone/36) {#6.0.6}

- [#602](https://github.com/hapijs/joi/pull/602) Validate multiple options with presence key in it
- [#601](https://github.com/hapijs/joi/issues/601) Error: stripUnknown should be one of required, optional, forbidden, ignore

### [6.0.5](https://github.com/hapijs/joi/milestone/35) {#6.0.5}

- [#600](https://github.com/hapijs/joi/issues/600) Fix regression on unsafe string escaping in language

### [6.0.4](https://github.com/hapijs/joi/milestone/33) {#6.0.4}

- [#593](https://github.com/hapijs/joi/issues/593) .rename() does not work when new value is undefined

### [6.0.3](https://github.com/hapijs/joi/milestone/32) {#6.0.3}

- [#589](https://github.com/hapijs/joi/issues/589) Joi.array().items(...) error message changes

### [6.0.1](https://github.com/hapijs/joi/milestone/31) {#6.0.1}

- [#585](https://github.com/hapijs/joi/issues/585) No conversion is done inside Joi.array().items

### [6.0.0](https://github.com/hapijs/joi/milestone/29) <a class="release-notes-link" href="https://github.com/hapijs/joi/issues/579" target="_blank" title="View Release Notes"><img class="release-notes-img" src="/img/release-notes.png" alt="" /></a> <span class="breaking-badge"></span> {#6.0.0}

- [#579](https://github.com/hapijs/joi/issues/579) 6.0.0 Release Notes
- [#578](https://github.com/hapijs/joi/pull/578) respect stripUnknown in arrays
- [#572](https://github.com/hapijs/joi/pull/572) add any.strip for objects and arrays
- [#569](https://github.com/hapijs/joi/issues/569) Lost key after validation on assert
- [#567](https://github.com/hapijs/joi/issues/567) Object with 'or', keys contains an array with a 'null' element
- [#561](https://github.com/hapijs/joi/issues/561) how to concat array of objects inside an object property
- [#559](https://github.com/hapijs/joi/pull/559) deprecate array.includes and array.excludes, use array.items and allow required and forbidden within
- [#557](https://github.com/hapijs/joi/issues/557) Incomplete validation message
- [#555](https://github.com/hapijs/joi/pull/555) add some additional guards and tests for #363
- [#553](https://github.com/hapijs/joi/issues/553) Does array include allow nested object properties
- [#547](https://github.com/hapijs/joi/issues/547) string hex characters only
- [#546](https://github.com/hapijs/joi/issues/546) Really custom messages are impossible
- [#545](https://github.com/hapijs/joi/pull/545) allow passing a method to .default(), for #363
- [#538](https://github.com/hapijs/joi/pull/538) added number.multiple()
- [#536](https://github.com/hapijs/joi/issues/536) Consider renaming 'valid' to 'enum' or an alias
- [#534](https://github.com/hapijs/joi/issues/534) Bad behavior of Joi.object().concat()
- [#532](https://github.com/hapijs/joi/issues/532) multipleOf method for Number?
- [#511](https://github.com/hapijs/joi/issues/511) throw when invalid options are provided
- [#495](https://github.com/hapijs/joi/issues/495) joi.array().includes path and errors mismatch
- [#488](https://github.com/hapijs/joi/pull/488) Allow options to be passed to string.email().
- [#484](https://github.com/hapijs/joi/pull/484) Helpful regexp message
- [#457](https://github.com/hapijs/joi/pull/457) Add URI Validation
- [#363](https://github.com/hapijs/joi/issues/363) support factory-function in .default() ?

## Version 5 {#v5}

### [5.1.0](https://github.com/hapijs/joi/milestone/24) {#5.1.0}

- [#525](https://github.com/hapijs/joi/issues/525) Strange behaviour with date + raw
- [#513](https://github.com/hapijs/joi/pull/513) Make alternatives.describe more consistent
- [#510](https://github.com/hapijs/joi/issues/510) Add new requiredKeys option specifically for object keys
- [#509](https://github.com/hapijs/joi/issues/509) Option to validate a date format but not convert to a date object
- [#477](https://github.com/hapijs/joi/issues/477) Support for references in `date.min()` and `date.max()`?
- [#404](https://github.com/hapijs/joi/issues/404) Possible referencing date field to other date field?

### [5.0.2](https://github.com/hapijs/joi/milestone/26) {#5.0.2}

- [#505](https://github.com/hapijs/joi/pull/505) Convert date regex to date before comparison. Closes #503.
- [#503](https://github.com/hapijs/joi/issues/503) Joi.date().iso() throws error when required() is used.

### [5.0.1](https://github.com/hapijs/joi/milestone/25) {#5.0.1}

- [#502](https://github.com/hapijs/joi/issues/502) Joi.array() modifies original array

### [5.0.0](https://github.com/hapijs/joi/milestone/23) <a class="release-notes-link" href="https://github.com/hapijs/joi/issues/501" target="_blank" title="View Release Notes"><img class="release-notes-img" src="/img/release-notes.png" alt="" /></a> <span class="breaking-badge"></span> {#5.0.0}

- [#501](https://github.com/hapijs/joi/issues/501) 5.0.0 Release Notes
- [#498](https://github.com/hapijs/joi/issues/498) array().single()
- [#497](https://github.com/hapijs/joi/issues/497) array.unique doesn't validate duplicate dates
- [#494](https://github.com/hapijs/joi/issues/494) Joi.number allows Infinity
- [#489](https://github.com/hapijs/joi/pull/489) add missing semicolon
- [#486](https://github.com/hapijs/joi/issues/486) array().includes() should not allow undefined
- [#485](https://github.com/hapijs/joi/issues/485) Round number.precision if options.convert
- [#462](https://github.com/hapijs/joi/issues/462) Return context with errors.
- [#381](https://github.com/hapijs/joi/issues/381) Transformation support

## Version 4 {#v4}

### [4.9.0](https://github.com/hapijs/joi/milestone/21) {#4.9.0}

- [#487](https://github.com/hapijs/joi/issues/487) Code assertions requires () for exist tests
- [#481](https://github.com/hapijs/joi/pull/481) Validate object constructor.
- [#408](https://github.com/hapijs/joi/issues/408) Check if value is a RegEx

### [4.8.1](https://github.com/hapijs/joi/milestone/22) {#4.8.1}

- [#480](https://github.com/hapijs/joi/issues/480) Date "now" refers to date when schema was compiled

### [4.8.0](https://github.com/hapijs/joi/milestone/20) {#4.8.0}

- [#478](https://github.com/hapijs/joi/pull/478) Retain object reference when no rules specified
- [#476](https://github.com/hapijs/joi/issues/476) Upgrade Lab
- [#470](https://github.com/hapijs/joi/pull/470) Address internationalization issues.
- [#469](https://github.com/hapijs/joi/pull/469) change implementation of creditcard to use string
- [#466](https://github.com/hapijs/joi/pull/466) Named string regex patterns.
- [#465](https://github.com/hapijs/joi/pull/465) implements credit card validation
- [#464](https://github.com/hapijs/joi/pull/464) implements nand
- [#461](https://github.com/hapijs/joi/pull/461) Add greater() and less() to number type. Closes #411
- [#456](https://github.com/hapijs/joi/pull/456) correction for Describe with a "0" argument
- [#454](https://github.com/hapijs/joi/issues/454) Describe with a "0" argument
- [#449](https://github.com/hapijs/joi/pull/449) Enable to pass "now" in date.min and date.max
- [#446](https://github.com/hapijs/joi/pull/446) Use Object.create in Any.clone to improve IE9 support
- [#440](https://github.com/hapijs/joi/pull/440) Added any.label method
- [#435](https://github.com/hapijs/joi/pull/435) Add format and iso to date type
- [#422](https://github.com/hapijs/joi/issues/422) Credit card validation
- [#411](https://github.com/hapijs/joi/issues/411) Number min/max exclusive or closed ranges respectively?
- [#407](https://github.com/hapijs/joi/issues/407) ensure date does not occur in the past
- [#396](https://github.com/hapijs/joi/pull/396) Negative-Integer-Strings are not properly converted to Date instances
- [#362](https://github.com/hapijs/joi/issues/362) Support NAND

### [4.7.0](https://github.com/hapijs/joi/milestone/19) {#4.7.0}

- [#437](https://github.com/hapijs/joi/issues/437) Support optional message prefix in assert()
- [#434](https://github.com/hapijs/joi/pull/434) Fix typo.
- [#433](https://github.com/hapijs/joi/pull/433) Override default presence
- [#432](https://github.com/hapijs/joi/issues/432) Set different default presence mode (required, forbidden)
- [#427](https://github.com/hapijs/joi/pull/427) Added ability to validate the number of decimal places
- [#403](https://github.com/hapijs/joi/pull/403) Add duplicates validation to array
- [#398](https://github.com/hapijs/joi/issues/398) Upgrade lab 4.0
- [#397](https://github.com/hapijs/joi/pull/397) Added check for global flag in pattern.
- [#389](https://github.com/hapijs/joi/pull/389) Default Assert Message
- [#385](https://github.com/hapijs/joi/pull/385) Path for array includes to contain key
- [#383](https://github.com/hapijs/joi/issues/383) Describe object.pattern

### [4.6.2](https://github.com/hapijs/joi/milestone/18) {#4.6.2}

- [#378](https://github.com/hapijs/joi/pull/378) Removed unused sys import.

### [4.6.1](https://github.com/hapijs/joi/milestone/17) {#4.6.1}

- [#366](https://github.com/hapijs/joi/pull/366) Bug Hunt: empty object() + pattern() + unknown(false) fails to error
- [#359](https://github.com/hapijs/joi/pull/359) Allow empty string after trim
- [#357](https://github.com/hapijs/joi/pull/357) Cast milisecond strings to a date object
- [#355](https://github.com/hapijs/joi/pull/355) Don't rename when there is nothing to rename.
- [#299](https://github.com/hapijs/joi/issues/299) Sanitizing blanks

### [4.6.0](https://github.com/hapijs/joi/milestone/16) {#4.6.0}

- [#360](https://github.com/hapijs/joi/issues/360) Joi.assert()
- [#354](https://github.com/hapijs/joi/issues/354) isemail 1.0

### [4.5.0](https://github.com/hapijs/joi/milestone/15) {#4.5.0}

- [#351](https://github.com/hapijs/joi/issues/351) Add Hoek isImmutable flag

### [4.4.0](https://github.com/hapijs/joi/milestone/14) {#4.4.0}

- [#349](https://github.com/hapijs/joi/issues/349) Support {{!key}} notation to securely encode unsafe values
- [#335](https://github.com/hapijs/joi/issues/335) Recognize Joi errors

### [4.3.0](https://github.com/hapijs/joi/milestone/12) <span class="breaking-badge"></span> {#4.3.0}

- [#341](https://github.com/hapijs/joi/issues/341) Array includes fails if called multiple times
- [#340](https://github.com/hapijs/joi/issues/340) Replace internal implementation of required/optional/forbidden
- [#339](https://github.com/hapijs/joi/issues/339) when() option 'is' cannot be falsey
- [#337](https://github.com/hapijs/joi/issues/337) alternatives().when() behaves inconsistently with any().when()
- [#336](https://github.com/hapijs/joi/issues/336) concat() fails to remove valid/invalid values
- [#334](https://github.com/hapijs/joi/pull/334) Bug hunt: Joi.any().when is not evaluated it its value is empty even if the when condition is fulfilled.
- [#332](https://github.com/hapijs/joi/issues/332) Joi.any().when is not evaluated if empty
- [#326](https://github.com/hapijs/joi/pull/326) Bug Hunt: unable to rename keys that are empty strings
- [#325](https://github.com/hapijs/joi/pull/325) Bug Hunt: empty string key causes incorrect validation
- [#321](https://github.com/hapijs/joi/pull/321) add uppercase, lowercase, and trim for strings
- [#317](https://github.com/hapijs/joi/pull/317) Bug Hunt: invalid Date objects do not cause failure.
- [#313](https://github.com/hapijs/joi/pull/313) Recursively describes the includes of array schemas #312
- [#312](https://github.com/hapijs/joi/issues/312) Describe should also compile and describe array's rules
- [#311](https://github.com/hapijs/joi/pull/311) Feature/meta
- [#310](https://github.com/hapijs/joi/pull/310) Bug Hunt: email addresses longer than 254 should not be valid
- [#309](https://github.com/hapijs/joi/pull/309) Bug Hunt: email addresses with a "local part" &gt; 64 characters should not be validated
- [#293](https://github.com/hapijs/joi/pull/293) Verify encoding type is string
- [#292](https://github.com/hapijs/joi/pull/292) Add test to check for valid encoding param to binary
- [#288](https://github.com/hapijs/joi/pull/288) Bug Hunt: valid IPv6 domain literals in email addresses fail validation
- [#282](https://github.com/hapijs/joi/pull/282) Bug Hunt: double-quoted local-parts of email addresses cause validation failure
- [#261](https://github.com/hapijs/joi/issues/261) Object key rules by patterns
- [#241](https://github.com/hapijs/joi/issues/241) Thoughts on something like any.meta(obj)?
- [#220](https://github.com/hapijs/joi/issues/220) string().lowercase() and string().uppsercase()

### [4.2.1](https://github.com/hapijs/joi/milestone/11) {#4.2.1}

- [#330](https://github.com/hapijs/joi/issues/330) Cannot override context
- [#329](https://github.com/hapijs/joi/issues/329) Joi.forbidden() fails when added to an existing type

### [4.2.0](https://github.com/hapijs/joi/milestone/10) {#4.2.0}

- [#328](https://github.com/hapijs/joi/issues/328) Support references to external context
- [#324](https://github.com/hapijs/joi/issues/324) Test for retaining ignored values
- [#323](https://github.com/hapijs/joi/issues/323) Joi.forbidden()
- [#322](https://github.com/hapijs/joi/issues/322) Make callback optional argument
- [#318](https://github.com/hapijs/joi/issues/318) Convert tests to actual async style

### [4.1.0](https://github.com/hapijs/joi/milestone/9) {#4.1.0}

- [#296](https://github.com/hapijs/joi/issues/296) Allow valid to take buffer values
- [#291](https://github.com/hapijs/joi/pull/291) remove extra var internals. Closes #290
- [#290](https://github.com/hapijs/joi/issues/290) extra var internals in binary.js
- [#287](https://github.com/hapijs/joi/issues/287) object.unknown()
- [#285](https://github.com/hapijs/joi/pull/285) Fix to make object.and all-or-nothing - fixes #284
- [#284](https://github.com/hapijs/joi/pull/284) Bug Hunt: object.and is supposed to be all-or-nothing

### [4.0.0](https://github.com/hapijs/joi/milestone/8) <span class="breaking-badge"></span> {#4.0.0}

- [#278](https://github.com/hapijs/joi/issues/278) Cleanup language file
- [#277](https://github.com/hapijs/joi/issues/277) date() allows boolean value
- [#276](https://github.com/hapijs/joi/issues/276) binary().encoding()
- [#275](https://github.com/hapijs/joi/issues/275) Support when() on any()
- [#274](https://github.com/hapijs/joi/issues/274) Undo #273, remove options from schema.validate()
- [#273](https://github.com/hapijs/joi/issues/273) Remove module generic validate() and describe()
- [#272](https://github.com/hapijs/joi/issues/272) Undo 268
- [#271](https://github.com/hapijs/joi/issues/271) schema concat()
- [#270](https://github.com/hapijs/joi/issues/270) Alt fails to report references
- [#269](https://github.com/hapijs/joi/issues/269) Rename alternatives.attempt() with try()
- [#268](https://github.com/hapijs/joi/issues/268) Move interfaces from func at root to const
- [#267](https://github.com/hapijs/joi/issues/267) Add alternatives.attempt() to allow adding more schemas
- [#266](https://github.com/hapijs/joi/issues/266) Make [] and alternatives() behave exactly the same
- [#265](https://github.com/hapijs/joi/issues/265) object.and()
- [#264](https://github.com/hapijs/joi/issues/264) Support references in default()
- [#263](https://github.com/hapijs/joi/issues/263) object.assert()
- [#262](https://github.com/hapijs/joi/issues/262) object.keys() append behavior
- [#260](https://github.com/hapijs/joi/issues/260) Allow referencing the value of other keys in conditions
- [#259](https://github.com/hapijs/joi/issues/259) Error messages should not include &lt;root&gt;
- [#258](https://github.com/hapijs/joi/issues/258) Array should only convert string arrays
- [#257](https://github.com/hapijs/joi/issues/257) Move dependencies (with,without, or, xor) to object level
- [#256](https://github.com/hapijs/joi/issues/256) Keep input const and return modified value via validate callback
- [#255](https://github.com/hapijs/joi/issues/255) Remove modify option
- [#254](https://github.com/hapijs/joi/issues/254) 4.0.0
- [#253](https://github.com/hapijs/joi/pull/253) Validate callback, rename move to object
- [#252](https://github.com/hapijs/joi/issues/252) Move rename() to object()
- [#250](https://github.com/hapijs/joi/issues/250) Change validate() to return value via callback
- [#249](https://github.com/hapijs/joi/pull/249) Alternatives bug fixes
- [#248](https://github.com/hapijs/joi/issues/248) Move object() constructor args to keys() method
- [#247](https://github.com/hapijs/joi/issues/247) unit() documentation method
- [#246](https://github.com/hapijs/joi/issues/246) rename() applied incorrectly
- [#245](https://github.com/hapijs/joi/issues/245) alternatives() fails to apply conversion when lower priority match has valid()
- [#244](https://github.com/hapijs/joi/issues/244) alternatives() fails to apply conversion of matching schema
- [#243](https://github.com/hapijs/joi/issues/243) alternatives() incorrectly allows null when no valids present
- [#239](https://github.com/hapijs/joi/issues/239) Error inheritance is troublesome
- [#238](https://github.com/hapijs/joi/pull/238) match() -&gt; test()
- [#237](https://github.com/hapijs/joi/issues/237) Support literal values as valid() condition
- [#234](https://github.com/hapijs/joi/pull/234) testling support
- [#233](https://github.com/hapijs/joi/issues/233) Add testling-ci badges
- [#226](https://github.com/hapijs/joi/pull/226) Add support for binary type
- [#217](https://github.com/hapijs/joi/issues/217) Incorrect ValidationError.annotated() output with abortEarly
- [#214](https://github.com/hapijs/joi/issues/214) example() documentation method
- [#210](https://github.com/hapijs/joi/pull/210) Add hostname matching to Joi.String
- [#206](https://github.com/hapijs/joi/pull/206) Find full path to nested errors
- [#202](https://github.com/hapijs/joi/issues/202) array() should set a specific detail.path
- [#196](https://github.com/hapijs/joi/issues/196) Precompile schema
- [#194](https://github.com/hapijs/joi/issues/194) Conditional rule based on value of another key
- [#192](https://github.com/hapijs/joi/issues/192) 64-bit limits in min()/max()/integer()
- [#191](https://github.com/hapijs/joi/pull/191) Added support for buffer length

## Version 3 {#v3}

### [3.4.1](https://github.com/hapijs/joi/milestone/13) {#3.4.1}

- [#345](https://github.com/hapijs/joi/issues/345) Describe references as such
- [#343](https://github.com/hapijs/joi/issues/343) Ref and Alternatives.when don't handle empty string keys

### [3.0.0](https://github.com/hapijs/joi/milestone/7) <span class="breaking-badge"></span> {#3.0.0}

- [#231](https://github.com/hapijs/joi/issues/231) Remove language file support
- [#230](https://github.com/hapijs/joi/issues/230) 3.0.0
- [#229](https://github.com/hapijs/joi/issues/229) Bring coverage back to 100% after lab logical statement support
- [#228](https://github.com/hapijs/joi/issues/228) hoek 2.0
- [#227](https://github.com/hapijs/joi/issues/227) number allows string even with strict()
- [#224](https://github.com/hapijs/joi/pull/224) Immutable schema objects. Closes #221
- [#221](https://github.com/hapijs/joi/issues/221) Change object to immutable
- [#216](https://github.com/hapijs/joi/issues/216) Change locale support to something that works with browserify.

## Version 2 {#v2}

### [2.9.0](https://github.com/hapijs/joi/milestone/6) {#2.9.0}

- [#215](https://github.com/hapijs/joi/issues/215) Enable all any() methods on array()
- [#201](https://github.com/hapijs/joi/pull/201) Allows using any.rename() and any.default() together

### [2.8.0](https://github.com/hapijs/joi/milestone/5) {#2.8.0}

- [#198](https://github.com/hapijs/joi/issues/198) Allow language override directly via options
- [#197](https://github.com/hapijs/joi/issues/197) Support for union types in schemas.
- [#195](https://github.com/hapijs/joi/issues/195) Bring coverage back to 100% after lab fix
- [#187](https://github.com/hapijs/joi/issues/187) Polluted request.payload by adding undefined field
- [#184](https://github.com/hapijs/joi/issues/184) Throws error when field is missing and abortEarly=false
- [#183](https://github.com/hapijs/joi/pull/183) set defaults #181
- [#181](https://github.com/hapijs/joi/issues/181) setting defaults
- [#180](https://github.com/hapijs/joi/pull/180) #179; add failing test for renames nested within array
- [#178](https://github.com/hapijs/joi/issues/178) Embedded validators in Array().includes don't work
- [#177](https://github.com/hapijs/joi/issues/177) Modify does not change internal values in array
- [#176](https://github.com/hapijs/joi/pull/176) closes #175. missing required keys no longer throws.
- [#166](https://github.com/hapijs/joi/issues/166) Required based on value on other key
- [#142](https://github.com/hapijs/joi/issues/142) alternatives()

### [2.0.0](https://github.com/hapijs/joi/milestone/4) <span class="breaking-badge"></span> {#2.0.0}

- [#232](https://github.com/hapijs/joi/issues/232) 2.0.0
- [#133](https://github.com/hapijs/joi/issues/133) Array.includes() does not support more than 1 type
- [#128](https://github.com/hapijs/joi/issues/128) with constraint doesn't seem to be respected
- [#126](https://github.com/hapijs/joi/issues/126) Validate date supporting arbitrary format
- [#124](https://github.com/hapijs/joi/issues/124) Array doesn't validate correctly if includes() uses valid()
- [#122](https://github.com/hapijs/joi/issues/122) Update error messages to not have encoded characters
- [#121](https://github.com/hapijs/joi/issues/121) Array is accepted as an Object type
- [#112](https://github.com/hapijs/joi/issues/112) Remove Number.float()
- [#88](https://github.com/hapijs/joi/issues/88) .valid() and .invalid() need a case-insensitive mode

## Version 0 {#v0}

### [0.4.0](https://github.com/hapijs/joi/milestone/3) {#0.4.0}

- [#110](https://github.com/hapijs/joi/pull/110) Adding support for special Any type
- [#107](https://github.com/hapijs/joi/issues/107) .with and .without accept an array of args as well
- [#106](https://github.com/hapijs/joi/issues/106) Add Type.Any
- [#105](https://github.com/hapijs/joi/pull/105) Consistent usage of Array.isArray()
- [#95](https://github.com/hapijs/joi/issues/95) Custom Error Messages

### [0.0.6](https://github.com/hapijs/joi/milestone/1) {#0.0.6}

- [#25](https://github.com/hapijs/joi/issues/25) Rewrite Readme.md
- [#23](https://github.com/hapijs/joi/issues/23) Add validation tests for every type's methods with complex combinations
- [#20](https://github.com/hapijs/joi/issues/20) String().valid doesn't invalidate bad values
- [#19](https://github.com/hapijs/joi/issues/19) StringType.min(3) doesn't validate undefined correctly
- [#18](https://github.com/hapijs/joi/pull/18) Adding tests to joi
