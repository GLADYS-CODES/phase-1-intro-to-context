// Your code here

  let createEmployeeRecord = function(row) {
       return {
        firstName: row[0],
        familyName: row[1],
        title: row[2],
        payPerHour: row[3],
        timeInEvents: [],
        timeOutEvents: []

    }

 }

let createEmployeeRecords = function(employeeRowData) {
    return employeeRowData.map(function(row) {
        return createEmployeeRecord(row)
    })
}


let  createTimeInEvent = function(employee, dateStamp) {
    let [date, hour] = date.split('')

    employee.timeInEvents.push({
        type: "TimeIn",
        hour:parseInt(hour, 10),
        date,
    })
    return employee
}

let hoursWorkedOnDate = function(employee, getDate) {
    let present = employee.timeInEvents.find(function(e){
        return e.date === getDate
    })


    let absent = employee.timeOutEvents.find(function(e){
        return e.date ===getDate
    })
    return (absent.hour - present.hour) / 100
}


let wagesEarnedOnDate = function(employee, getDate){
    let fullWage = hoursWorkedOnDate(employee, getDate)
    * employee.payPerHour
    return parseFloat(fullWage.toString())
}


let allWagesFor = function(employee){
    let eligibleDates = employee.timeInEvents.map(function(e){
        return e.date
    })

    let payable = eligibleDates.reduce(function(memo, d){
        return memo + wagesEarnedOnDate(employee, d)
    }, 0)

    return payable
}

let findEmployeeByFirstName = function(srcArray, firstName) {
  return srcArray.find(function(rec){
    return rec.firstName === firstName
  })
}

let calculatePayroll = function(arrayOfEmployeeRecords){
    return arrayOfEmployeeRecords.reduce(function(memo, rec){
        return memo + allWagesFor(rec)
    }, 0)
}



















































































// let allWagesFor = function() {
//     let elgibleDates = this.timeInEvents.map(function(e) {
//         return e.date
//     })

//     let payable = elgibleDates.reduce(funciton(memo, d) {

//         return memo + wagesEarnedOnDate.call(this, d)
//     }.bind(this), 0)

//     return payable
// }