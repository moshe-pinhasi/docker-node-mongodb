module.exports = {
  "DB_URL": "localhost:3306",
  "MORGAN_FORMAT": "tiny",
  "jwt": {
    "secret": "som_secret_string",
     "options": { 
        "expiresIn": "4h",
        "algorithm": 'HS256' // this is the default
    }
  }
}
