const la = require('lazy-ass')
const is = require('check-more-types')
const uuid = require('./uuid')

function generateTodo () {
  return {
    what: 'something',
    due: 'tomorrow',
    done: false,
    id: uuid()
  }
}

function generateFakeTodos (n) {
  la(is.positive(n), 'invalid number of todos to create', n)
  var items = new Array(n)
  var k
  for (k = 0; k < n; k += 1) {
    items[k] = generateTodo()
  }
  return items
}

module.exports = generateFakeTodos
