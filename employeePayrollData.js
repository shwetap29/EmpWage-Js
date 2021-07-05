class EmployeePayrollData {
    id;
    salary;
    //Constructor
    constructor(id, name, salary) {
        this.id = id;
        this.name = name;
        this.salary = salary;
    }

    // getter and setter
    get name() {
        return this._name;
    }
    set name(name) {
        this._name = name;
    }

    toString() {
        return "Id = " + this.id + " Name = " + this.name + " Salary = " + this.salary;
    }
}

let employeePayrollData = new EmployeePayrollData(1, "Bill", 30000);
console.log(employeePayrollData.toString());
employeePayrollData.name = "John";
console.log(employeePayrollData.toString());