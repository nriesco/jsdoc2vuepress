# jsdoc2vuepress

## TL;DR

If you use [JSDoc](https://jsdoc.app) annotations and [Vuepress](https://vuepress.vuejs.org) to generate your docs, this is for you.


## About

jsdoc2vuepress will read your library's JSDoc annotations and generate the necessary markdown data to work in vuepress. It will also make [Vuepress flowchart plugin](https://github.com/ulivz/vuepress-plugin-flowchart) annotations work and create a coverage report to easily add it to your docs.

jsdoc2vuepress is simple wrapper for JSDoc2MD, with some changes:
1. Instead of using the method's signature as the "title" it will "demote" it to a simple paragraph (italics) and the name of the function is used as the title. This will avoid having long titles in the table of contents / sidebar menu.
2. The output is modified so `**Flowstart**:` is changed back into a vuepress-flowchart-plugin compatible version (`@flowstart`). Same thing for `Flowend`.
3. The defaults are compatible with yalt4node project (still private, soon will be public)


## Usage

`jsdoc2vuepres` => will use default values (`'src/*.{js,ts}'` and `'dist/DOCS.md'`)

`jsdoc2vuepres 'src/*.{js,ts}'` => will use default output value (`'dist/DOCS.md'`)

`jsdoc2vuepres 'src/index.{js,ts}'` => will use default output value (`'dist/DOCS.md'`)

`jsdoc2vuepres 'src/index.{js,ts}' 'output'` => will use (`'out/DOCS.md'`)

**Note:** If you installed this as a local dependency (not globally) you'll need to provide the full "relative" path like this: `./node_modules/.bin/jsdoc2vuepress`


## References

- JSDocs: https://jsdoc.app
- Vuepress: https://vuepress.vuejs.org
- Vuepress flowchart plugin: https://github.com/ulivz/vuepress-plugin-flowchart
- yalt4node: https://github.com/nriesco/yalt4node
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

and jsdoc2vuepress generates this one (the signature is no longer a header)

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