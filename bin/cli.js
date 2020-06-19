#!/usr/bin/env node
const fs = require('fs');
const jsdoc2md = require('jsdoc-to-markdown');

// default values
let files = ['src/*.{js,ts}'];
let outputFile = 'DOCS.md';

if (process.argv.length >= 3) files = [process.argv[2]];
if (process.argv.length >= 4) outputFile = process.argv[3];

let partial = ['node_modules/jsdoc2vuepress/files/header.hbs'];
if (process.env.DEBUG_LOCAL) partial = ['files/header.hbs'];

const options = { 
  files,
  partial
};

const cleanFlowChart = require('./cleanFlowChart');

jsdoc2md
  .render(options)
  .then(output => {
    output = cleanFlowChart(output);
    fs.writeFileSync(outputFile, output);
    process.exit(0);
  })
  .catch(err => {
    console.log('>> some error', err);
  })

/*
 * modify coverage file
 *
 * read from COVERAGE_RAW.md
 * write to COVERAGE.md
 */
let prefix = 'dist/';
if (process.env.DEBUG_LOCAL) prefix = 'files/'; // add prefix for testing purposes
const coverageFile = fs.readFileSync(prefix + 'COVERAGE_RAW.md');
const cleanCoverageFile = require('./cleanCoverageFile');
const cleanData = cleanCoverageFile(coverageFile.toString()); // remember to use `.toString()`
// write the file
fs.writeFileSync(prefix + 'COVERAGE.md', cleanData)
