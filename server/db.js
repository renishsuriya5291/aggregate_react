const mongoose = require('mongoose');

const mongooseURI = "mongodb+srv://renish:renidh4707@cluster0.qiyfmu6.mongodb.net/aggregate_agro?retryWrites=true&w=majority";
mongoose.set('strictQuery', false)

const connectToMongo = ()=>{
    mongoose.connect(mongooseURI)
}

module.exports = connectToMongo;