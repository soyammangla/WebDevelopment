const expenses = [1200, 500, 3000, 800, 400]; // food, travel, rent, bills, leisure
const total = expenses.reduce((acc, val) => acc + val, 0);
const average = total / expenses.length;
const finalAmount = total * 1.1; // +10% tax

console.log(`Total Expenses: ₹${total.toFixed(2)}`);
console.log(`Average Expense: ₹${average.toFixed(2)}`);
console.log(`Final Amount after Tax: ₹${finalAmount.toFixed(2)}`);
