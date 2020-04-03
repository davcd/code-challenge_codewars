const colors = {
  white: 'e6e6e6',
  yellow: 'ecb613',
  blue: '3c7ebb',
  purple: '866cc7',
  black: '555555'
}

function getHexByColor(string) {
  return colors[string]
}

function getHexByRank(num) {
  if (num > 0) {
    return colors.black
  }
  if (num === -2 || num === -1) {
    return colors.purple
  }
  if (num === -4 || num === -3) {
    return colors.blue
  }
  if (num === -6 || num === -5) {
    return colors.yellow
  }
  return colors.white
}

module.exports = {
  colors,
  getHexByColor,
  getHexByRank
}
