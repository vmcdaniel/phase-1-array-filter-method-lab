// Code your solution here
function findMatching(drivers, driverSelect) {
    return drivers.filter(driver =>  driver.toLowerCase() === driverSelect.toLowerCase())
}

function fuzzyMatch(drivers, driversQuery) {
    return drivers.filter(driver => driver.startsWith(driversQuery))
}

function matchName (drivers, driverName) {
    return drivers.filter (driver => driver.name === driverName)
}