const dotenv = require('dotenv')
dotenv.config()
const mongodb = require('mongodb')

const connectionString = "mongodb+srv://admin:eGNHBwHFzWqbIbx0@cluster0-lygar.mongodb.net/ComplexApp?retryWrites=true&w=majority";

mongodb.connect(process.env.CONNECTIONSTRING, {useNewUrlParser: true, useUnifiedTopology: true}, function(err, client) {
  module.exports = client
  const app = require('./app')
  app.listen(process.env.PORT)
})