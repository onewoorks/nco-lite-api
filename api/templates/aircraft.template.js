
const AircraftTemplate = {
    airCraftReportHeader: (inventory_id, inventory_type, reportDate, status, orderId) => {
        let header = {
            inventory_id:       inventory_id,
            inventory_type:     inventory_type,
            timestamp:          Date.now(),
            status:             status,
            report_date:        reportDate,
            sort_no:            parseInt(orderId)+1
        } 
        return header;
    },
    airCraftReportHourly: (line, ac_state, status_surveillance, mission_capable, minutes, today) => {
        let report = {
            line:                   line,
            ac_state:               ac_state,
            status_surveillance:    status_surveillance,
            mission_capable:        mission_capable,
            minutes:                minutes,
            timestamp:              today,
            order:                  0,
            line_code:              `${ac_state}_${status_surveillance}_${mission_capable}`.replace(/ /g,'_')
        }
        return report;
    },
    airCraftDailyReport: (inventory_id, inventory_type, today, orderNo) => {
        let dailyFrequency  = 24
        let current         = 0
        let report          = AircraftTemplate.airCraftReportHeader(inventory_id, inventory_type, today, 'draft', orderNo)
        let data            = []
        while(current < dailyFrequency){
            let hourtime        = current.toString().padStart(2,"0")
            let key             = `${hourtime}00`
            let timestamp       = `${today} ${hourtime}:00:00`
            let hourlyReport    = AircraftTemplate.airCraftReportHourly("1ST LINE LOAN","S","Mr","S",60, timestamp)
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