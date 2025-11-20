let currentSalary = 50000;
const incrementRate = 10; // percent

console.log("Yearly Salary Projection:");
for (let year = 1; year <= 5; year++) {
  currentSalary += currentSalary * (incrementRate / 100);
  console.log(`Year ${year}: ₹${currentSalary.toFixed(2)}`);
}
