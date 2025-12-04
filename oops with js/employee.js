// Q5. Employee Inheritance

class Employee {
  constructor(name, department) {
    this.name = name;
    this.department = department;
  }

  work() {
    console.log(`${this.name} works in ${this.department}.`);
  }
}

class Manager extends Employee {
  work() {
    console.log(`${this.name} manages the ${this.department} department.`);
  }
}

const e = new Employee("Aman", "Tech");
const m = new Manager("Rohan", "Sales");

e.work();
m.work(); // polymorphism
