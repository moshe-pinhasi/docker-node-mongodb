const dbService = require('../../dbService')
const ObjectId = require('mongodb').ObjectId;

const getById = async (id) => {
    const todoId = new ObjectId(id)
    const collection = await dbService.getCollection('todos')
    return collection.findOne({_id: todoId})
}
  
const list = async () => {
    const collection = await dbService.getCollection('todos')
    return collection.find({}).toArray()
}

const add = (todo) => {
    return new Promise(async (resolve, reject) => {
        const collection = await dbService.getCollection('todos')
        collection.insertOne(todo, (err, newTodo) => {
            if (err) reject(err)
            else resolve(newTodo)
        })
    })
}

module.exports = {
    getById,
    list,
    add
}