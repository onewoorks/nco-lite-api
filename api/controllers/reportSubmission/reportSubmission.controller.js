const { dirname }       = require('path')
const ReportSubmission  = require('../../models/ReportSubmission')
const Common            = require('../common.controller')

const ReportSubmissionController = (() => {
    return {
      nextDayUpdate: async (inventoryId, startDate, endDate) => {
        const nextDate = await ReportSubmission.find({})
        console.log(nextDate)
        return;
      }
    };
  })();
  
module.exports = ReportSubmissionController