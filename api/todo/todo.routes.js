const express = require('express')
const {getTodo, listTodos, addTodo} = require('./todo.controller')
const router = express.Router()

router.get('/', listTodos)
router.post('/', addTodo)
router.get('/:id', getTodo)

module.exports = router