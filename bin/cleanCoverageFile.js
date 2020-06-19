/**
 * Remove stuff from the output
 *
 * The output was meant to be shown in the console
 * not to be a valid markdown
 *
 * We apply
 * - remove indentation
 * - add a space after `  #` (same with other tokens)
 * - tranform the tables (remove top and bottom rows)
 * - the last results are transformed into a list
 * - add a title `# Report`
 */
const clean = (data) => {
  data = data.replace(/\n  #([^ ]+)/g, '\n  # \$1')
  data = data.replace(/\n  -([^ ]+)/g, '\n  - \$1'); // pending
  data = data.replace(/\n  ✓([^ ]+)/g, '\n  ✓ \$1'); // passing
  // data = data.replace(/\n  #/g, '\n  # ')
  data = data.replace(/\n  /g, '\n')
  data = data.replace(/\n------.*\nFile/g, '\n\nFile')
  data = data.replace(/\n.*-----------\n\n/g, '\n\n\n')
  data = data.replace(/\n=+.*=+\n/g, '\n\n')

  let keyWords = ['Statements', 'Branches', 'Functions', 'Lines']
  keyWords.forEach(keyWord => {
    const replace = '\n' + keyWord;
    const re = new RegExp(replace, 'gi');
    data = data.replace(re, '\n- ' + keyWord)
  })

  // add title
  data = '# Report\n\n' + data

  return data
}

module.exports = clean
