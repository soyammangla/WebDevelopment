let bonus = 5000; // global variable

function calculateSalary(isPermanent) {
  let salary = 40000; // local variable
  if (isPermanent) {
    salary += bonus;
  }
  console.log(`Total Salary: ₹${salary}`);
}

calculateSalary(true); // includes bonus
calculateSalary(false); // excludes bonus

console.log(`Global bonus remains: ₹${bonus}`);
