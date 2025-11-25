class Employee {
  constructor(id, name, department, salary) {
    this.id = id;
    this.name = name;
    this.department = department;
    this.salary = salary;
  }

  getAnnualSalary() {
    return this.salary * 12;
  }

  applyBonus(percent) {
    this.salary += (this.salary * percent) / 100;
  }
}

const employees = [
  new Employee(1, "Amit", "IT", 40000),
  new Employee(2, "Sara", "HR", 35000),
  new Employee(3, "John", "Sales", 30000),
  new Employee(4, "Rita", "Tech", 50000),
  new Employee(5, "Kiran", "Admin", 28000),
];

employees.forEach((emp) => console.log(emp.name, emp.getAnnualSalary()));

const totalPayout = employees.reduce(
  (sum, emp) => sum + emp.getAnnualSalary(),
  0
);
console.log("Total Payout:", totalPayout);
