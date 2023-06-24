const express = require('express');
const app = express();

const refRoutes = express.Router();
const References = require('../models/References');

refRoutes.route('/inventory-types/:source/:mode').get( async (req, res, next) => {
  let source = req.params.source
  let mode = req.params.mode
  let output = await References.find({source, mode})
  res.json(output)
});

module.exports = refRoutes;