const penyedia = {
    colorType: 'WHITE',
    commandHqAcronym: 'PU Labuan',
    commandHqDesc: 'PU Labuan',
    commandHqId: '1007',
    currentUnit: null,
    email: '6skn.rmn@mafc2.mil.my',
    firstName: null,
    id: '22',
    lastName: null,
    name: 'HAWK 208',
    AircraftAssetId: '1',
    navyAssetShipName: null,
    rank: null,
    serviceType: null,
    staffNo: null,
    unitCommandHqAcronym: '6 Skn',
    unitCommandHqDesc: '6 Skn',
    unitCommandHqId: '1021',
    userType: 'ac',
    username: '6skn.rmaf',
}
const pengesah = {
    colorType: 'WHITE',
    commandHqAcronym: 'MARKAS WILAYAH UDARA 2',
    commandHqDesc: 'MARKAS WILAYAH UDARA 2',
    commandHqId: '1002',
    currentUnit: null,
    email: 'pu.labuan.rmaf@mafc2.mil.my',
    firstName: null,
    id: '22',
    lastName: null,
    name: 'HAWK 208',
    AircraftAssetId: '1',
    navyAssetShipName: null,
    rank: null,
    serviceType: null,
    staffNo: null,
    unitCommandHqAcronym: 'PU Labuan',
    unitCommandHqDesc: 'PU Labuan',
    unitCommandHqId: '1007',
    userType: 'ac',
    username: 'pu.labuan.rmaf',
}

const Auth = (() => {
    return {
        checkUser: (username, password) => {
            let user = {}
            switch(username){
                case 'penyedia': user = penyedia; break
                case 'pengesah': user = pengesah; break
                default: break;
            }
            return user
        },
    }
})()

module.exports = Auth
