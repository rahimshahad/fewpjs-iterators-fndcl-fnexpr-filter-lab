// Code your solution here
function findMatching(drivers, name) {
    return drivers.filter(driver => {
        if (driver.toLowerCase() === name.toLowerCase()) {
            return driver
        }
    })

}


function fuzzyMatch(drivers, name) {
    return drivers.filter(driver => {
        return driver.toLowerCase().indexOf(name.toLowerCase()) === 0
    })
}

function matchName(drivers, name) {

    return drivers.filter(driver => {

        if (driver.name.toLowerCase() === name.toLowerCase()) {
            return driver
        }


    });

}