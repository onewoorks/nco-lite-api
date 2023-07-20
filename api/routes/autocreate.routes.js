const express = require('express');
const app = express();
// const AutoCreateController = require('../controllers/autocreate/autocreate.controller')
// 
const autoCreateRoute = express.Router()

autoCreateRoute.route('/daily/draft').get(async(req, res, next) => {
    let output = await AutoCreateController.allInventory('aircraft')
    res.json(output)
})
autoCreateRoute.route('/monthly/draft').post(async(req, res, next) => {
    // let data    = req.body
    // let year    = data.year
    // let month   = data.month
    // let output  = await AutoCreateController.monthlyInventoryDraft(data.inventory_type, year, month)
    res.json(output)
})

module.exports = autoCreateRoute