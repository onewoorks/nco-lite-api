const express = require('express');
const app = express();

const airCraftRoute = express.Router();
const AirCraft = require('../models/AirCraft');

// Add Book
airCraftRoute.route('/').get( async (req, res, next) => {
  let output = await AirCraft.find({}).where('kategori').equals('Angkut')
  res.json(output)
});

airCraftRoute.route('/types').get(async (req, res, next) => {
  let output = await AirCraft.aggregate([
    { $group: { _id: '$kategori'}},
    { $project: { kategoriName: '$_id', aircrafts: 1, _id: 0 } }
  ])
  res.json(output)
})

airCraftRoute.route('/types/list/:name').get(async (req, res, next) => {
  let output = await AirCraft.find({}).where('kategori').equals(req.params.name)
  res.json(output)
})

airCraftRoute.route('/id/:id').get(async (req, res, next) => {
  let output = await AirCraft.findOne({}).where('_id').equals(req.params.id)
  res.json(output)
})
 
module.exports = airCraftRoute;