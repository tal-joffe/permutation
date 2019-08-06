const {permutationRec} = require('./permutationRec')
const {permutationItr} = require('./permutationItr')

describe('permutation test', () => {
  test('recursive solutions should get permutations', () => {
    const string = 'abc'
    const actual = permutationRec(string)
    expect(actual).toEqual([ 'abc', 'bac', 'bca', 'acb', 'cab', 'cba' ])
  })
})