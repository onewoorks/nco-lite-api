const express = require('express');
const app = express();

const dailyReportSubmissionn = express.Router();
let DailyReportSubmission = require('../models/DailyReportSubmission');

dailyReportSubmissionn.route('/').get( async (req, res) => {
   let output = await DailyReportSubmission.find({})
   res.json(output)
})

dailyReportSubmissionn.route('/inventory/:inventory_id').get( async (req, res) => {
   let inventory_id = req.params.inventory_id
   console.log(inventory_id)
   let output = await DailyReportSubmission.find({ "inventory.inventory_id": inventory_id })
   res.json(output)
})

dailyReportSubmissionn.route('/month/:month/:inventory_id').get( async (req, res) => {
   let output = await DailyReportSubmission.find({})
   res.json(output)
})
 
module.exports = dailyReportSubmissionn;