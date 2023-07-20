const express = require('express')
const app = express()
const ReportSubmissionController = require('../controllers/reportSubmission/reportSubmission.controller')
const AutoCreateController = require('../controllers/autoCreate/autoCreate.controller')
const dfns = require('date-fns')

const reportSubmissionRoute = express.Router()
let ReportSubmission = require('../models/ReportSubmission')

reportSubmissionRoute
    .route('/draft/inventory')
    .post(async (req, res, next) => {
        var d = new Date();
        m = d.getMonth(); //current month
        y = d.getFullYear(); //current year
        let firstDay    = dfns.format(new Date(y, m, 1), 'yyyy-MM-dd')
        let lastDay     = dfns.format(new Date(y, m+1, 0), 'yyyy-MM-dd')
        const query     = {
            inventory_id: req.body.id,
            "$and": [
                { report_date:{"$gte" :  firstDay}},
                { report_date:{"$lte" :  lastDay }}
            ]
        }

        try {
            const result = await ReportSubmission.find(query).sort({sort_no:1});
            const count = await ReportSubmission.countDocuments(query);
            if(count > 0){
                res.send(result);
            } else {
                const draftReport = await createDraftReportMonthly(req.body.id, req.body.inventoryType )
                res.send(draftReport)
            }
            
          } catch (err) {
            next(err);
          }
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

async function createDraftReportMonthly(inventoryId, inventoryType){
    let d       = new Date()
    let year    = d.getFullYear()
    let month   = d.getMonth()+1
    let output  = await AutoCreateController.monthlyInventoryDraftByInventoryId(inventoryId, inventoryType, year, month)
    return output
}

module.exports = reportSubmissionRoute
