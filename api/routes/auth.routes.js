const express = require('express')
const app = express()

const auth = express.Router()
const Auth = require('../models/Auth')

// Add Book
auth.route('/login').post(async (req, res, next) => {
    let username = req.body.username
    let password = req.body.password
    let output = Auth.checkUser(username, password)
    res.json(output)
})

auth.route('/role').post(async (req, res, next) => {
    let data = req.body
    const output = Auth.checkUser(data.userrole)
    res.json(output)
})

module.exports = auth
