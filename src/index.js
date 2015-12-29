const la = require('lazy-ass')
const is = require('check-more-types')
const uuid = require('./uuid')

const dictionary = require('./dictionary')
const modifiers = dictionary.modifiers
const verbs = dictionary.verbs
const nouns = dictionary.nouns

// TODO handle verbs like "look up"
function suffix (modifier) {
  const modifiersToSuffix = {
    avoid: 'ing',
    skip: 'ing'
  }
  return modifiersToSuffix[modifier] || ''
}

function addSuffix (verb, suffix) {
  if (!suffix) {
    return verb
  }
  if (/e$/.test(verb)) {
    return verb.substr(0, verb.length - 1) + suffix
  }
  return verb + suffix
}

function pick (set) {
  return set[Math.floor(Math.random() * set.length)]
}

function generateTodo () {
  const modifier = pick(modifiers)
  const verb = pick(verbs)
  const ending = suffix(modifier)
  const noun = pick(nouns)

  return {
    what: modifier + (modifier ? ' ' : '') + addSuffix(verb, ending) + ' ' + noun,
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

function isBrowser () {
  return typeof window === 'object'
}

function isStandalone () {
  return !module.parent
}

if (!isBrowser() && isStandalone()) {
  !(function () {
    require('console.table')
    console.table(generateFakeTodos(5))
  }())
}
