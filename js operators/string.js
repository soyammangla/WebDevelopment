let product = " wireless headphones PRO ";
product = product
  .trim()
  .toLowerCase()
  .split(" ")
  .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
  .join(" ");
product = product.replace("Pro", "Pro Edition");

console.log(`Cleaned Title: ${product}`);
console.log(`Length: ${product.length}`);
