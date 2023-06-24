const mongoose = require('mongoose')
const Schema = mongoose.Schema

let References = new Schema({}, {
    collection: 'References'
})

module.exports = mongoose.model('References', References)