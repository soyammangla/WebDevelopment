const cart = [
  { item: "Laptop", category: "electronics", price: 45000 },
  { item: "Shoes", category: "fashion", price: 2500 },
  { item: "Book", category: "education", price: 600 },
];

let total = 0;
cart.forEach((product) => {
  let discount = 0;
  if (product.category === "electronics") discount = 0.1;
  else if (product.category === "fashion") discount = 0.05;

  total += product.price * (1 - discount);
});

// Extra 5% if total > 50000
if (total > 50000) total *= 0.95;

console.log(`Final Total: ₹${total.toFixed(2)}`);
