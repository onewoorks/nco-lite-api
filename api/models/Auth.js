var convert = require('xml-js');
const { transform } = require('camaro')

const profileTemplate = ['UserResponseForm', {
    id: 'title-case(id)',
    name: 'title-case(name)',
    ucommsPassword: 'title-case(ucommsPassword)',
    modeId: 'title-case(modeId)',
    modeDesc: 'title-case(modeDesc)',
    colorType: 'title-case(colorType)',
    userType: 'title-case(userType)',
    password: 'title-case(password)',
    commandHqId: 'title-case(commandHqId)',
    commandHqDesc: 'title-case(commandHqDesc)',
    commandHqAcronym:'title-case(commandHqAcronym)',
    unitCommandHqId: 'title-case(commandHqAcronym)',
    unitCommandHqDesc: 'title-case(unitCommandHqDesc)',
    unitCommandHqAcronym: 'title-case(unitCommandHqAcronym)',
    navyAssetId: 'title-case(navyAssetId)',
    navyAssetShipName: 'title-case(navyAssetShip)',
    createdDate: 'title-case(createdDate)',
    createdBy: 'title-case(createdBy)',
    modifiedDate: 'title-case(modifiedDate)',
    modifiedBy: 'title-case(modifiedBy)',
    email: 'title-case(email)',
    phoneNo: 'title-case(phoneNo)',
    departmentId: 'title-case()',
    departmentDesc: 'title-case(departmentDesc)',
    firstName: 'title-case(firstName)',
    lastName: 'title-case(lastName)',
    extensionNo: 'title-case(extensionNo)',
    staffNo: 'title-case(staffNo)',
    serviceTypeId: 'title-case(serviceTypeId)',
    serviceTypeDesc: 'title-case(serviceTypeDesc)',
    rank: 'title-case(rank)',
    currentUnit: 'title-case(currentUnit)',
    userStatus: 'title-case(userStatus)',
    pariorityContact: 'title-case(pariorityContact)',
    streetAddress: 'title-case(streetAddress)',
    postalCode: 'title-case(postalCode)',
    l: 'title-case(l)',
    state: 'title-case(state)',
    company: 'title-case(company)',
    adFlag: 'title-case(adFlag)',
    photo: 'title-case(photo)',
    isReset: 'title-case(isReset)',
}]

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

const predefinedRoles = {
    "373688": "Pengesah",
    "404082": "Penyedia",
    "373831": "Penyedia",
    "375440": "Penyedia",
    "721635": "Penyedia"
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
        getUserRole: (userid) => {
            return predefinedRoles[userid]
        },
        checkUserId: async (userId) => {
            try {
                var xml = require('fs').readFileSync(`./models/dummyuser/${userId}.xml`, 'utf8');
                const result = await transform(xml, profileTemplate)
                return result[0];
            } catch (e){
                return false
            } 
        }
    }
})()

module.exports = Auth
