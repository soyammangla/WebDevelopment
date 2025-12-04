// Q7. E-Commerce Inventory System

const products = [
  { id: 1, name: "Phone", category: "Electronics", price: 20000, stock: 5 },
  { id: 2, name: "Shoes", category: "Fashion", price: 3000, stock: 2 },
  { id: 3, name: "TV", category: "Electronics", price: 40000, stock: 1 },
  { id: 4, name: "T-shirt", category: "Fashion", price: 800, stock: 15 },
];

function getLowStockProducts() {
  return products.filter((p) => p.stock < 3);
}

function sortProductsByPrice() {
  return [...products].sort((a, b) => a.price - b.price);
}

function calculateTotalInventoryValue() {
  return products.reduce((total, p) => total + p.price * p.stock, 0);
}

function groupByCategory() {
  return products.reduce((group, p) => {
    (group[p.category] = group[p.category] || []).push(p);
    return group;
  }, {});
}

console.log(getLowStockProducts());
console.log(sortProductsByPrice());
console.log(calculateTotalInventoryValue());
console.log(groupByCategory());
