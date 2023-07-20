const mongoose = require('mongoose')
const Schema = mongoose.Schema

let AirCraftSchema = new Schema({}, {
    collection: 'AirCraft'
})

let AirCraft = mongoose.model('AirCraft', AirCraftSchema)

function getAircraftRoleBased(payload){
    let output = AirCraft.find({})
        .where('squadron').equals(payload.squadron)
    return output
}

function getAircraftTypeListRoleBased(payload){
    let output = AirCraft.find({})
        .where('squadron').equals(payload.unitCommandHqAcronym)
    return output
}

function getAircraftReport(aircraftId){
    let output = AirCraft.findOne({}).where('_id').equals(aircraftId)
    return output
}

function getAllAircraft(){
    let output = AirCraft.find()
    return output
}

module.exports = {
    AirCraft,
    getAircraftRoleBased,
    getAircraftTypeListRoleBased,
    getAircraftReport,
    getAllAircraft
}