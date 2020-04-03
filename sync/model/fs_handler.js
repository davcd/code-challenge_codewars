const fs = require('fs')
const p = require('path')

function checkFile(path) {
  if (fs.existsSync(path)) {
    return true
  }
  return false
}

function readFile(path) {
  try {
    return fs.readFileSync(path)
  } catch (error) {
    console.log(error)
    return null
  }
}

function writeFileSyncRecursive(path, content) {
  const folders = path.split(p.sep).slice(0, -1)
  if (folders.length) {
    folders.reduce((last, folder) => {
      const folderPath = last ? last + p.sep + folder : folder
      if (!fs.existsSync(folderPath)) {
        fs.mkdirSync(folderPath)
      }
      return folderPath
    })
  }
  fs.writeFileSync(path, content)
}

function writeFile(path, content) {
  try {
    writeFileSyncRecursive(path, content)
  } catch (error) {
    console.log(error)
  }
}

module.exports = {
  checkFile,
  readFile,
  writeFile
}
