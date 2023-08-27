const returnFirstTwoDrivers = (drivers) => {
    return drivers.slice(0, 2);
}
const returnLastTwoDrivers  = (drivers) => {
    return drivers.slice(-2);
}
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier = (integer) =>fare => fare * integer

const fareDoubler = createFareMultiplier(2)

const fareTripler = createFareMultiplier(3)

const selectDifferentDrivers = (drivers, driverSelector) => driverSelector(drivers);