const todoService = require('./todo.service')

const getTodo = async (req, res, next) => {
    try {
        const todo = await todoService.getById(req.params.id)
        res.send(todo)
    } catch(err) {
        next(err)
    }
}
  
const listTodos = async (req, res, next) => {
    try {
        const todos = await todoService.list()
        res.send(todos)
    } catch(err) {
        next(err)
    }
}

const addTodo = async (req, res, next) => {
    try {
        const result = await todoService.add(req.body)
        res.send(result)
    } catch (err) {
        next(err)
    }
}

const getAdmin = (req, res) => {
    res.send({message: "hello admin"})
}

module.exports = {
    getTodo,
    addTodo,
    listTodos,
    getAdmin
}