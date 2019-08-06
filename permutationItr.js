const arr = 'abc'

const swap = (str, i, j) => {
  const charArray = [...str]
  const temp = charArray[i]
  charArray[i] = charArray[j]
  charArray[j] = temp
  return charArray.reduce((x,y) => x+y, "")
}
const permutationItr = (str) => {
  let results = []
  // const charArray = str.split('')
  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < str.length; j++) {
      if (i !== j) {
        results.push(swap(str, i, j))
      }
    }
  }
  return results
}

const fun = (str, c) =>{
  let results = []

  return results
}

module.exports = {
  permutationItr
}