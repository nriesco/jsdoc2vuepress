#!/usr/bin/env node
const fs = require('fs');
const jsdoc2md = require('jsdoc-to-markdown');

// default values
let files = ['src/index.js'];
let outputFile = 'DOCS.md';

if (process.argv.length >= 3) files = [process.argv[2]];
if (process.argv.length >= 4) outputFile = process.argv[3];

const options = { 
  files,
  partial: ['files/header.hbs']
}

// const cleanFlowChart = (mdData) => {
//   return mdData;
// }
const cleanFlowChart = require('./cleanFlowChart')

jsdoc2md
  .render(options)
  .then(output => {
    output = cleanFlowChart(output)
    fs.writeFileSync(outputFile, output);
    process.exit(0);
  })
  .catch(err => {
    console.log('>> some error', err);
  })