const env = require("dotenv");
const mongoose = require("mongoose")
env.config()

const uri = process.env.MONGO_ATLAS

mongoose.connect(uri)
    .then((db) => console.log(`Conexion a DB exitosa`))
    .catch((err) => console.log(err))

module.exports= mongoose