//normal code

let basesalary = 50000;
let overtime = 10;
let rate = 20;

function getwage(basesalary, overtime, rate) {
    return baseSalary + (overtime * rate);
}


//oop method using encapsulation
let employee = {
    basesalary: 30000,
    overtime: 10,
    rate: 10,
    getwage: function() {
        return this.basesalary + (this.overtime * this.rate);
    }
};
console.log(employee.getwage());