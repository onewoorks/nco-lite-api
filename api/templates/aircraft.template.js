
const AircraftTemplate = {
    airCraftReportHeader: (inventory_id, inventory_type, reportDate, status) => {
        let header = {
            inventory_id:       inventory_id,
            inventory_type:     inventory_type,
            timestamp:          Date.now(),
            status:             status,
            report_date:        reportDate
        } 
        return header;
    },
    airCraftReportHourly: (line, ac_state, status_surveillance, mission_capable, minutes) => {
        let report = {
            line:                   line,
            ac_state:               ac_state,
            status_surveillance:    status_surveillance,
            mission_capable:        mission_capable,
            minutes:                minutes,
            order: 0
        }
        return report;
    },
    airCraftDailyReport: (inventory_id, inventory_type, today) => {
        let dailyFrequency  = 24
        let current         = 0
        let report          = AircraftTemplate.airCraftReportHeader(inventory_id, inventory_type, today, 'draft')
        let data            = []
        while(current < dailyFrequency){
            let key             = current.toString().padStart(2,"0") + "00"
            let hourlyReport    = AircraftTemplate.airCraftReportHourly(1,2,4,6,7)
            data.push({
                order: current+1,
                time: key,
                data: [hourlyReport]
            })
            current++
        }
        report.data = data
        return report
    }

}

module.exports = AircraftTemplate