class Cart {
  constructor() {
    this.items = [];
    this.discount = 0;
  }

  addItem(name, price, qty) {
    this.items.push({ name, price, qty });
  }

  applyCoupon(code) {
    const regex = /^(SAVE|DISC)(\d{2})$/;

    if (!regex.test(code)) return console.log("Invalid coupon");

    const percent = parseInt(code.match(/\d+/)[0]);
    this.discount = percent;
  }

  getTotal() {
    let total = this.items.reduce((sum, i) => sum + i.price * i.qty, 0);
    return total - (total * this.discount) / 100;
  }
}

const cart = new Cart();
cart.addItem("Laptop", 50000, 1);
cart.addItem("Mouse", 500, 2);

cart.applyCoupon("SAVE20");

console.log("Final Total:", cart.getTotal());
