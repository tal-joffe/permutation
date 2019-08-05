const arr = 'abc'

const swap = (array, i, j) => {
  const newArray = [...array]
  const temp = newArray[i]
  newArray[i] = newArray[j]
  newArray[j] = temp
  return newArray
}
const permutationItr = str => {
  let results = []
  const charArray = str.split('')
  for (let i = 0; i < charArray.length; i++) {
    for (let j = 0; j < charArray.length; j++) {
      if (i !== j) {
        results.push(swap(charArray, i, j))
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