#!/usr/bin/env node
const fs = require('fs');
const jsdoc2md = require('jsdoc-to-markdown');

// default values
let files = ['src/index.js'];
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