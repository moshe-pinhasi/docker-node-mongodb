"use strict";

const MongoClient = require('mongodb').MongoClient;
 const config = require('./config')

// Connection URL
console.log('config.DB_URL: ' + config.DB_URL)
const url = config.DB_URL;

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
