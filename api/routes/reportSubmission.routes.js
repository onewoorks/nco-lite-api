const express = require('express')
const app = express()
const ReportSubmissionController = require('../controllers/reportSubmission/reportSubmission.controller')

const reportSubmissionRoute = express.Router()
let ReportSubmission = require('../models/ReportSubmission')

reportSubmissionRoute
    .route('/draft/inventory/:id')
    .get(async (req, res, next) => {
        // let output = await ReportSubmission.find({})
        //     .where('inventory_id')
        //     .equals(req.params.id)
        // res.send(output)
        const query = {
            inventory_id: req.params.id,
            "$and": [
                {"report_date":{"$gte" :  '2023-06-01'}},
                {"report_date":{"$lte" :  '2023-06-31' }}
            ]
        }
        const result = await ReportSubmission.find(query)
        res.send(result)
    })

reportSubmissionRoute.route('/draft/:id').get(async (req, res, next) => {
    let output = await ReportSubmission.findById(req.params.id)
    res.send(output)
})

reportSubmissionRoute.route('/search-and-update').post(async (req, res, next) => {
    const body = req.body
    try {
        const query = {
            inventory_id: body.inventory_id,
            "$and": [
                {"report_date":{"$gt" :  body.date_start}},
                {"report_date":{"$lte" :  body.date_end }}
            ]
        }
        await ReportSubmissionController
            .nextDayUpdate(body.inventory_id, body.date_start, body.date_end)
        // const result = await ReportSubmission.find(query)
        res.send()
    } catch (err){
        res.json(err)
    }
})

reportSubmissionRoute.route('/update-next').post(async (req, res, next) => {
    const body = {}
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

reportSubmissionRoute.route('/update').put(async (req, res, next) => {
    let data = req.body
    await ReportSubmission.findByIdAndUpdate(data._id, req.body)
    res.send(data.inventory_id)
})

module.exports = reportSubmissionRoute
