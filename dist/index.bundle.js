'use strict';

var la = require('lazy-ass');
la = 'default' in la ? la['default'] : la;
var is = require('check-more-types');
is = 'default' in is ? is['default'] : is;

// from http://jsfiddle.net/briguy37/2mvfd/
function uuid () {
  var d = new Date().getTime()
  var uuidFormat = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'
  var uuid = uuidFormat.replace(/[xy]/g, function (c) {
    var r = (d + Math.random() * 16) % 16 | 0
    d = Math.floor(d / 16)
    return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16)
  })
  return uuid
}

// add empty modifiers to sometimes not include one
const modifiers = ['try to', 'avoid', 'skip', 'pretend to',
  'help', '', '', '', '', '']

const verbs = [
  'learn', 'clean', 'buy', 'pick', 'do', 'make', 'fix', 'exercise',
  'tweet', 'promote', 'code', 'play', 'find', 'crash', 'submit',
  'skip', 'add', 'forget', 'avoid', 'throw', 'buy', 'sell'
]

const nouns = [
  'Italian', 'milk', 'needle work', 'chess', 'Node.js', 'fines',
  'books', 'boots', 'fishing rod', 'distant relatives', 'charges',
  'knife', 'castle', 'laptop', 'principles', 'adults', 'bird'
]

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
