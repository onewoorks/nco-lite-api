const express = require('express');
const app = express();

const airCraftRoute = express.Router();
const AirCraft = require('../models/AirCraft');

airCraftRoute.route('/filtered').get( async (req, res, next) => {
  let data = {
    pengkalan: 'PU LABUAN',
    squadron: '6 Skn'
  }
  let output = await AirCraft.getAircraftRoleBased(data)
  res.json(output)
});

airCraftRoute.route('/').get( async (req, res, next) => {
  let output = await AirCraft.find({}).where('kategori').equals('Angkut')
  res.json(output)
});

airCraftRoute.route('/types').get(async (req, res, next) => {
  // let output = await AirCraft.aggregate([
  //   { $group: { _id: '$kategori'}},
  //   { $project: { kategoriName: '$_id', aircrafts: 1, _id: 0 } }
  // ])
  let output = [];
  res.json(output)
})

airCraftRoute.route('/types/list').post(async (req, res, next) => {
  let output = await AirCraft.getAircraftTypeListRoleBased(req.body)
  res.json(output)
})

airCraftRoute.route('/id/:id').get(async (req, res, next) => {
  let output = await AirCraft.findOne({}).where('_id').equals(req.params.id)
  res.json(output)
})
 
module.exports = airCraftRoute;