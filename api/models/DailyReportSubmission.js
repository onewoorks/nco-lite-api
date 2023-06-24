const mongoose = require('mongoose')
const Schema = mongoose.Schema

let DailyReportSubmission = new Schema({}, {
    collection: 'DailyReportSubmission'
})

module.exports = mongoose.model('DailyReportSubmission', DailyReportSubmission)