// Q2_employeeBonusCalculator.js
(() => {
  "use strict";

  const employees = [
    { name: "Amit", salary: "45000", years: "5" },
    { name: "Sara", salary: "38000", years: "2" },
    { name: "Kiran", salary: "52000", years: "7" },
  ];

  function toNumberOrThrow(value, fieldName) {
    const n = Number(value);
    if (!Number.isFinite(n)) {
      throw new Error(`InvalidNumber: ${fieldName} -> ${value}`);
    }
    return n;
  }

  for (const emp of employees) {
    try {
      if (!emp || typeof emp !== "object")
        throw new Error("MissingEmployeeObject");
      const name =
        emp.name ||
        (() => {
          throw new Error("MissingProperty: name");
        })();

      const salary = toNumberOrThrow(emp.salary, `salary for ${name}`);
      const years = toNumberOrThrow(emp.years, `years for ${name}`);

      const bonusRate = years > 3 ? 0.1 : 0.05;
      const bonus = salary * bonusRate;
      const total = salary + bonus;

      console.log(`Employee: ${name}
  Salary: ₹${salary.toFixed(2)}
  Years: ${years}
  Bonus Rate: ${(bonusRate * 100).toFixed(1)}%
  Bonus: ₹${bonus.toFixed(2)}
  Total Package: ₹${total.toFixed(2)}
  ------------------------------`);
    } catch (err) {
      console.error(`Error processing employee entry: ${err.message}`);
    }
  }
})();
