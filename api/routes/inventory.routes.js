const express = require('express')
const app = express()

const inventory = express.Router()
const Inventory = require('../models/Inventory')

// Add Book
inventory.route('/lists').get(async (req, res, next) => {
    let result = Inventory.getAllInventories()
    res.json(result)
})


module.exports = inventory
