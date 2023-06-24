const express = require('express');
const app = express();

const refTeams = express.Router();
let RefTeam = require('../models/RefTeam');

refTeams.route('/').get( async (req, res) => {
   let output = await RefTeam.find({})
   res.json(output)
})
 
module.exports = refTeams;