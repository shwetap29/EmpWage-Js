class EmployeePayrollData {
    id;
    salary;
    gender;
    startDate;

    //Constructor
    constructor(...params) {
        this.id = params[0];
        this.name = params[1];
        this.salary = params[2];
        this.gender = params[3];
        this.startDate = params[4];
    }

    // getter and setter
    get name() {
        return this._name;
    }
    set name(name) {
        this._name = name;
    }

    toString() {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        const empDate = this.startDate == undefined ? "undefined" : this.startDate.toLocaleDateString("en-In", options);
        return "Id = " + this.id + " Name = " + this.name + " Salary = " + this.salary + " Gender = " + this.gender + " Start Date : " + empDate;
    }
}

let employeePayrollData = new EmployeePayrollData(1, "Bill", 30000);
console.log(employeePayrollData.toString());
employeePayrollData.name = "John";
console.log(employeePayrollData.toString());
let newEmployeePayrollData = new EmployeePayrollData(1, "Terisa", 50000, "F", new Date());
console.log(newEmployeePayrollData.toString());