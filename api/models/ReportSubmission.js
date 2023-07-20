const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let ReportSubmission = new Schema({
    inventory_id: String,
    inventory_type: String,
    timestamp: String,
    status: String,
    report_date: String,
    sort_no: Number,
    data: Object
}, {
    collection: 'ReportSubmission'
})
 
module.exports = mongoose.model('ReportSubmission', ReportSubmission);