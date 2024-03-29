#!/usr/bin/env node
const fs = require('fs')
const jsdoc2md = require('jsdoc-to-markdown')

// default value
let files = ['src/*.{js,ts}']
if (process.argv.length >= 3) files = [process.argv[2]]

// default value
let prefix = 'dist/'
if (process.env.DEBUG_LOCAL) prefix = 'files/' // add prefix for testing purposes

// default value
if (process.argv.length >= 4) prefix = process.argv[3]
const outputFile = prefix + 'DOCS.md'
const outputFileReadme = prefix + 'README.md'

let partial = ['node_modules/jsdoc2vuepress/files/header.hbs']
if (process.env.DEBUG_LOCAL) partial = ['files/header.hbs']

const options = {
  files,
  partial
}

// get package version
const libraryPackage = JSON.parse(fs.readFileSync(prefix + '../package.json').toString())

const title = `# Docs

`

const title2 = `# Readme

::: tip ${libraryPackage.name}

Version: ${libraryPackage.version}

:::
`

const cleanFlowChart = require('./cleanFlowChart')

jsdoc2md
  .render(options)
  .then(output => {
    output = cleanFlowChart(output)
    output = title + output
    fs.writeFileSync(outputFile, output)

    // now modify readme file
    // change [[CURRENT_VERSION]] with the current version
    try {
      const data = fs
        .readFileSync(prefix + '../README.md')
        .toString()
        .replace('# Readme', title2)
      fs.writeFileSync(outputFileReadme, data)
    } catch (e) {
      console.log('>>> jsdoc2vuepress error #1', e)
    }
    process.exit(0)
  })
  .catch(err => {
    console.log('>> some error', err)
  })

/*
 * modify coverage file
 *
 * read from COVERAGE_RAW.md
 * write to COVERAGE.md
 */
const coverageFile = fs.readFileSync(prefix + 'COVERAGE_RAW.md')
const cleanCoverageFile = require('./cleanCoverageFile')
const cleanData = cleanCoverageFile(coverageFile.toString()) // remember to use `.toString()`
// write the file
fs.writeFileSync(prefix + 'COVERAGE.md', cleanData)
fs.unlinkSync(prefix + 'COVERAGE_RAW.md') // delete old file
