const mongoose = require('mongoose')
const Schema = mongoose.Schema

let AirCraft = new Schema({}, {
    collection: 'AirCraft'
})

module.exports = mongoose.model('AirCraft', AirCraft)