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
        let nameRegex = RegExp('[A-Z]{1}[a-z]{2,}');
        if (nameRegex.test(name))
        this._name = name;
        else throw "Name is Incorrect";
    }

    // Method
    toString() {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        const empDate = this.startDate == undefined ? "undefined" : 
        this.startDate.toLocaleDateString("en-In", options);
        return "Id = " + this.id + " Name = " + this.name + " Salary = " + this.salary + " Gender = " + this.gender + " Start Date : " + empDate;
    }
}

let employeePayrollData = new EmployeePayrollData(1, "Mark", 30000);
console.log(employeePayrollData.toString());
try {
employeePayrollData.name = "John";
console.log(employeePayrollData.toString());
} catch (e) {
        console.error(e);
}
let newEmployeePayrollData = new EmployeePayrollData(1, "Terisa", 30000, "F", new Date());
console.log(newEmployeePayrollData.toString());