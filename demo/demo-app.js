require('../node_modules/todomvc-common/base.css')
require('../node_modules/todomvc-app-css/index.css')

var Todos = require('todomvc-model')
Todos.items = require('..')(100)
var virtualDom = require('virtual-todos')(Todos)
var createElement = require('virtual-dom/create-element')
var rootNode = createElement(virtualDom)
document.body.appendChild(rootNode)
