const mongoose = require('mongoose');
const {Schema} = mongoose;

const WorkerSchema = new Schema({
    name: {
        type: String,
        require: true,
    },
    email: {
        type: String,
        require: true,
        unique: true,
    },
    password: {
        type: String,
        require: true,
    },
    phone: {
        type: Number,
        require: true,
    },
    address: {
        type: String,
    },
    gender: {
        type: String,
    },
    age: {
        type: Number,
    },
    work_hour: {
        type: Number,
    },
    occupation: {
        type: String,
    },
    date: {
        type: Date,
        default: Date.now,
    }
})


module.exports = mongoose.model('worker_users', WorkerSchema)