'use strict';

var dbm;
var type;
var seed;

/**
  * We receive the dbmigrate dependency from dbmigrate initially.
  * This enables us to not have to rely on NODE_PATH.
  */
exports.setup = function(options, seedLink) {
  dbm = options.dbmigrate;
  type = dbm.dataType;
  seed = seedLink;
};

exports.up = async function(db) {
  const collection = 'todos'
  await db.createCollection(collection)
  await db.insert(collection, {
    title: 'first todo',
    description: 'this is the first todo'
  })

  await db.insert(collection, {
    title: 'second todo',
    description: 'this is the second todo'
  })

  await db.insert(collection, {
    title: '3td todo',
    description: 'this is the 3td todo'
  })

  await db.insert(collection, {
    title: '4 todo',
    description: 'this is the 4 todo'
  })

  return
};

exports.down = function(db) {
  return null;
};

exports._meta = {
  "version": 1
};
