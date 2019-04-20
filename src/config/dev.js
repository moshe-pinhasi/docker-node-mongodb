module.exports = {
  "DB_URL": "mongodb://localhost:27017/todos-docker",
  "MORGAN_FORMAT": "tiny",
  "jwt": {
    "secret": "som_secret_string",
     "options": { 
        "expiresIn": "4h",
        "algorithm": 'HS256' // this is the default
    }
  }
}
