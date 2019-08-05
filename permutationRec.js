const permutationRec = (str) => {
  if (!str || str.length === 0){
    return []
  }
  if (str.length === 1){
    return [str]
  }
  const permutations = permutationRec(str.substring(1)) 
  // a, [bc, cb] => [abc, bac, bca, acb, cab, cba]
  return recStep(str[0], permutations);
}
const recStep = (firstLetter, permutations) => {
  const length = permutations[0].length
  return [].concat(...permutations.map(perm => {
    return Array(length+1).fill()
    .map(x => perm)
    .map((p, i) => p.slice(0, i) + firstLetter + p.slice(i, p.length))
  }))
}

module.exports = {
  permutationRec
}