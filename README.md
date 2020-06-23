# jsdoc2vuepress

Vuepress-compatible markdown generator for jsdocs comments.

It is a simple wrapper for JSDoc2MD, with a couple of changes
1. Instead of using the signature as the "title" it will "demote" it to a simple paragraph (italics) and the name of the function is used as the title
2. The resulting output is modified changing `**Flowstart**:` into a vuepress-flowchart-plugin compatible version (`@flowstart`). Same thing for `Flowend`.
3. The defaults are compatible with lib-template project (still private, soon will be public)


## Usage

`jsdoc2vuepres` => will use default values (`'src/*.{js,ts}'` and `'dist/DOCS.md'`)

`jsdoc2vuepres 'src/*.{js,ts}'` => will use default output value (`'dist/DOCS.md'`)

`jsdoc2vuepres 'src/index.{js,ts}'` => will use default output value (`'dist/DOCS.md'`)

`jsdoc2vuepres 'src/index.{js,ts}' 'output'` => will use (`'out/DOCS.md'`)

**Note:** If you installed this as a local dependency (not globally) you'll need to provide the full "relative" path like this: `./node_modules/.bin/jsdoc2vuepress`


## References

- lib-template: https://github.com/nriesco/lib-template
- JSDocs: https://jsdoc.app
- Vuepress: https://vuepress.vuejs.org
- Vuepress flowchart plugin: https://github.com/ulivz/vuepress-plugin-flowchart
- JSDoc2MD: https://github.com/jsdoc2md/jsdoc-to-markdown


## Example

Using this input:

```
/**
 * A quite wonderful function.
 * @param {object} - Privacy gown
 * @param {object} - Security
 * @returns {survival}
 */
function protection (cloak, dagger) {}
```


JSDoc2MD generates this MD:

```markdown
## protection(cloak, dagger) ⇒ <code>survival</code>
A quite wonderful function.

**Kind**: global function

| Param  | Type                | Description  |
| ------ | ------------------- | ------------ |
| cloak  | <code>object</code> | Privacy gown |
| dagger | <code>object</code> | Security     |
```

and jsdoc2vuepress generates this one

```markdown
## protection
_protection(cloak, dagger) ⇒ <code>survival</code>_
A quite wonderful function.

**Kind**: global function

| Param  | Type                | Description  |
| ------ | ------------------- | ------------ |
| cloak  | <code>object</code> | Privacy gown |
| dagger | <code>object</code> | Security     |
```