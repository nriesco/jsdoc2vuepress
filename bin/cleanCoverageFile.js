/**
 * Remove stuff from the output
 *
 * The output was meant to be shown in the console
 * not to be a valid markdown
 *
 * We apply
 * - add a space after `  #` (same with other tokens)
 * - remove indentation
 * - transform the tables (remove top and bottom rows both
 * for text and text-summary reporters' output)
 * - the last results are transformed into a list
 * - add a title `# Report`
 *
 * https://istanbul.js.org/docs/advanced/alternative-reporters/
 */
const clean = (data) => {
  // add a space if needed
  data = data.replace(/^  #([^ ]+)(.*)$/gm, '  ### \$1$2');
  data = data.replace(/^  -([^ ]+)(.*)$/gm, '  - \$1$2'); // pending
  data = data.replace(/^  ✓([^ ]+)(.*)$/gm, '  ✓ \$1$2'); // passing

  // remove indentation
  data = data.replace(/^  /gm, '');

  // remove top and bottom frame for text reporter
  data = data.replace(/^[-]+.*\nFile/gm, '\n## Coverage Results\n\nFile');
  data = data.replace(/^.*[-]+\n\n/gm, '\n');
  
  // remove top and bottom frame for text-summary reporter
  data = data.replace(/^=+.*=+$/gm, '');

  // transform into list
  let keyWords = ['Statements', 'Branches', 'Functions', 'Lines'];
  keyWords.forEach(keyWord => {
    const replace = '^' + keyWord;
    const re = new RegExp(replace, 'gmi');
    data = data.replace(re, '- ' + keyWord);
  })

  let package = require('../package.json');

  // add title and other formatted info
  data = `# Report

::: tip ${package.name}@${package.version}

_Generated: 2020-06-19_
:::

## Tests

` + data;

  return data;
}

module.exports = clean;
