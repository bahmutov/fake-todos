const la = require('lazy-ass')
const is = require('check-more-types')

/* global describe, it */
describe('fake todos', () => {
  const generate = require('..')

  it('is a function', () => {
    la(is.fn(generate))
  })

  it('returns 2 mock todo items', () => {
    const todos = generate(2)
    la(is.array(todos), 'returns an array')
    la(todos.length === 2, 'has 2 items')
  })
})
