# jsdoc2vuepress

Vuepress-compatible markdown generator for jsdocs comments.

It is a simple wrapper for JSDoc2MD, with a couple of changes
1. Instead of using the signature as the "title" it will "demote" it to a simple paragraph (italics) and the name of the function is used as the title
2. The resulting output is modified changing `**Flowstart**:` into a vuepress-flowchart-plugin compatible version (`@flowstart`). Same thing for `Flowend`.
3. The defaults are compatible with lib-template project (still private, soon will be public)


## Usage

`jsdoc2vuepres` => will use default values (`['src/index.js']` and `'DOCS.md'`)

`jsdoc2vuepres src/*.js` => will use default output value (`'DOCS.md'`)


## References

- lib-template: https://github.com/nriesco/lib-template
- JSDocs: https://jsdoc.app
- Vuepress: https://vuepress.vuejs.org
- Vuepress flowchart plugin: https://github.com/ulivz/vuepress-plugin-flowchart
- JSDoc2MD: https://github.com/jsdoc2md/jsdoc-to-markdown


## Example

### Using this input

```
/**
 * A quite wonderful function.
 * @param {object} - Privacy gown
 * @param {object} - Security
 * @returns {survival}
 */
function protection (cloak, dagger) {}
```


sss generates this MD:

```md
## protection(cloak, dagger) ⇒ <code>survival</code>
A quite wonderful function.

**Kind**: global function

| Param  | Type                | Description  |
| ------ | ------------------- | ------------ |
| cloak  | <code>object</code> | Privacy gown |
| dagger | <code>object</code> | Security     |
```

and jsdoc2vuepress generates this one

```md
## protection
_protection(cloak, dagger) ⇒ <code>survival</code>_
A quite wonderful function.

**Kind**: global function

| Param  | Type                | Description  |
| ------ | ------------------- | ------------ |
| cloak  | <code>object</code> | Privacy gown |
| dagger | <code>object</code> | Security     |
```