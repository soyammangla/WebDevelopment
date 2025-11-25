// Q1: E-Commerce Product Manager
class Product {
  constructor(id, name, price, category) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.category = category;
  }

  applyDiscount(percent) {
    this.price = this.price - (this.price * percent) / 100;
  }

  getDetails() {
    return `ID: ${this.id}, Name: ${this.name}, Price: ₹${this.price}, Category: ${this.category}`;
  }
}

const products = [
  new Product(1, "Laptop", 55000, "Electronics"),
  new Product(2, "Shoes", 800, "Fashion"),
  new Product(3, "Smartphone", 12000, "Electronics"),
];

products[0].applyDiscount(10); // Example discount

const filtered = products.filter((p) => p.price > 1000);
console.log("Products > ₹1000:");
filtered.forEach((p) => console.log(p.getDetails()));
