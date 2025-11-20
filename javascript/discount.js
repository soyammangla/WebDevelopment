let totalPurchase = 7200;
let discount = 0;

if (totalPurchase >= 10000) {
  discount = 25;
} else if (totalPurchase >= 5000) {
  discount = 15;
} else if (totalPurchase >= 2000) {
  discount = 5;
}

const finalPrice = Math.round(totalPurchase * (1 - discount / 100));

console.log(`Original Total: ₹${totalPurchase}`);
console.log(`Discount: ${discount}%`);
console.log(`Final Price: ₹${finalPrice}`);
