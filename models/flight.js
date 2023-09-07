const mongoose = require('mongoose')

// Schema
const date = new Date();
date.setFullYear(date.getFullYear() + 1)

const arrived = new Date(date);
arrived.setFullYear(date.getMonth()+3)


const destinations = new mongoose.Schema({
    airport1:{
        type: String,
        enum: ['AUS','DAL','LAX','SAN','SEA']
    },
    airport2:{
        type: String,
        enum: ['AUS','DAL','LAX','SAN','SEA']
    },
    arrival : {
        type: Date,
        default:arrived
    }
})

const flights = new mongoose.Schema({
    airline: {
        type: String,
        enum: ["American", "Southwest", "United"]
    },
    flightNo: {
        type: Number,
        min: 10,
        max: 9999
    },
    departs: {
        type: Date,
        default: date
    },
    airport: {
        type: String,
        enum: ['AUS','DAL','LAX','SAN','SEA']
    },
    destination:[destinations]

})

// Model
const Flight = mongoose.model('Flight', flights)
module.exports = Flight;