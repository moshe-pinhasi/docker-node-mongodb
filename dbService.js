"use strict";

const MongoClient = require('mongodb').MongoClient;
 
// Connection URL
const url = 'mongodb://mongo:27017';

var dbClient, db = null

const connect = () => {
  return new Promise( (resolve, reject) => {
    MongoClient.connect(url, { useNewUrlParser: true }, (err, client) => {
      if (err) return reject(err)

      console.log("Connected successfully to server");
      dbClient = client;
      db = dbClient.db('todos-docker');
      
      resolve(db)
    });
  })
}

const getCollection = (name) => {
  if (!db) {
    return connect().then(db => db.collection(name))
  }

  return Promise.resolve(db.collection(name))
}

const disconnect = () => {
  db = null
  return dbClient && dbClient.close && dbClient.close();
}

module.exports = {
  connect,
  getCollection,
  disconnect
}
