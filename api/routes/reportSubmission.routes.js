const express = require('express')
const app = express()

const reportSubmissionRoute = express.Router()
let ReportSubmission = require('../models/ReportSubmission')

reportSubmissionRoute
    .route('/draft/inventory/:id')
    .get(async (req, res, next) => {
        let output = await ReportSubmission.find()
            .where('inventory_id')
            .equals(req.params.id)
        res.send(output)
    })

reportSubmissionRoute.route('/draft/:id').get(async (req, res, next) => {
    let output = await ReportSubmission.findById(req.params.id)
    res.send(output)
})
reportSubmissionRoute.route('/add').post(async (req, res, next) => {
    let data = req.body
    data.timestamp = Date.now()
    console.log(data)
    // await ReportSubmission.save()
    // res.send(ReportSubmission)

    const report = new ReportSubmission(data)
    await report.save()
    res.send(report)
    // res.res.sendStatus(200)
})

module.exports = reportSubmissionRoute
