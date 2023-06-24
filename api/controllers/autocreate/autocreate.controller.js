const { dirname }       = require('path')
const AircraftTemplate  = require('../../templates/aircraft.template')
const AirCraft          = require('../../models/AirCraft')
const ReportSubmission  = require('../../models/ReportSubmission')
const Common            = require('../common.controller')

const AutoCreateController = (() => {
    async function inventoryList(inventoryType) {
        let aircraft = await AirCraft.find()
        return aircraft
    }
    return {
      monthlyInventoryDraft: async (inventory_type, year, month) => {
        let inventories = await inventoryList(inventory_type)
        let daysInMonth = Common.getTotalDaysInMonth(year, month);
        inventories.forEach((value,key)=>{
            let inventory_id    = value._id.toString()
            let report          = {}
            let current         = 0
            while (current < daysInMonth) {
                let today           = `${year}-${month.toString().padStart(2, "0")}-${(current + 1).toString().padStart(2, "0")}`;
                let report_template = AircraftTemplate.airCraftDailyReport(inventory_id, inventory_type, today)
                report              = report_template
                let draftReport     = new ReportSubmission(report)
                draftReport.save()
                current++;
            }
        })
        return;
      }
    };
  })();
  
module.exports = AutoCreateController