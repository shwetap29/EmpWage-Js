// UC 7 Use Daily Wage Array to perform Array operations using helper functions

const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20; 
const NUM_OF_WORKING_DAYS = 20;
const MAX_HRS_IN_MONTH = 160;

// To get employee working hours
function getWorkingHours(empCheck) {
    switch(empCheck){
        case IS_PART_TIME:
            return PART_TIME_HOURS;
        case IS_FULL_TIME:
            return FULL_TIME_HOURS;
        default:
            return 0;
    }
}
// To calculate wage when working hours were given
function calcWage(empHrs) {
    return empHrs * WAGE_PER_HOUR;
}

let totEmpWage = 0;
function sum(dailyWage) {
    totEmpWage += dailyWage;
}

function totalWages(totalWage, dailyWage) {
    return totalWage + dailyWage;
}

let totalEmpHrs = 0;
let totalWorkingDays = 0;
let empWageArray = new Array();
let empWageMap = new Map();

//Calculating Wages till Number of Working Days or Total Working Hours per month is Reached
while(totalEmpHrs <= MAX_HRS_IN_MONTH && totalWorkingDays < NUM_OF_WORKING_DAYS) {
    totalWorkingDays++;
    let empCheck = Math.floor((Math.random() * 10) % 3);
    let empHrs = getWorkingHours(empCheck);
    totalEmpHrs += empHrs;
    
    // Save the Daily wage in an Array
    empWageArray.push(calcWage(empHrs)); 

    //Store the day and daily wage 
    empWageArray.toLocaleString(totalWorkingDays, calcWage(empHrs));
}

console.log(empWageArray);
console.log("Total Employee Working Hours : " + totalEmpHrs + "\nTotal Employee Working Days :  " + totalWorkingDays);

// Total wage using employee hours
let empWage = calcWage(totalEmpHrs);               
console.log("Total Employee Wage : " + empWage);

// Total wage using foreach
empWageArray.forEach(sum);                         
console.log("Total Employee Wage using foreach: " + totEmpWage);
console.log("Total Employee Wage using reduce method: " + empWageArray.reduce(totalWages, 0));   // Total wage using reduce method

// Show the Day along with Daily Wage using Array map helper function
let dailyCntr = 0;
function mapDayWithDailyWage(dailyWage) {
    dailyCntr++;
    return dailyCntr + " : " + dailyWage;
}
let mapDayWithDailyWageArr = empWageArray.map(mapDayWithDailyWage);
console.log("Daily wage map : ");
console.log(mapDayWithDailyWageArr);

// Show Days when Full time wage of 160 were earned using filter function
function fullTimeWage(dailyWage) {
    return dailyWage.includes("160");
}
let fullDayWageArr = mapDayWithDailyWageArr.filter(fullTimeWage);
console.log("Days with full time wage : ");
console.log(fullDayWageArr);


// Find the first occurrence when Full Time Wage was earned using find function
console.log("First time fulltime was earned on : ")
console.log(mapDayWithDailyWageArr.find(fullTimeWage));


// Check if Every Element of FullTime Wage is truly holding Full time wage
console.log("Check all elements have fulltime wage : " + fullDayWageArr.every(fullTimeWage));

// Check if there is any PartTime Wage
function partTimeWage(dailyWage) {
    return dailyWage.includes("80");
}
console.log("Check if there is any parttime wage : " + mapDayWithDailyWageArr.some(partTimeWage));


// Find the number of days the Employee Worked 
function totalDaysWorked(numOfDays, dailyWage) {
    if (dailyWage > 0)
        return numOfDays + 1;
    return numOfDays;
}
console.log("Number of days the employee worked : " + empWageArray.reduce(totalDaysWorked, 0));

// compute Total Wage using map 
console.log(empWageMap);
console.log("Total Employee wage using map : " + Array.from(empWageArray.values()).reduce(totalWages, 0));
