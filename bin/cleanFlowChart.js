const clean = (data) => {
  data = data.replace(/\*\*Flowstart\*\*:/g, '\n\n@flowstart\n')
  data = data.replace(/\*\*Flowend\*\*:/g, '@flowend\n\n')
  return data
}

module.exports = clean