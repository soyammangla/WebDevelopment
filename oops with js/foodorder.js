// Q3. Online Food Ordering

const menu = {
  pizza: 200,
  burger: 120,
  pasta: 150,
};

function calculateBill(orderItems) {
  try {
    const prices = orderItems.map((item) => {
      if (!menu[item]) throw new Error(`Item not found: ${item}`);
      return menu[item];
    });

    const total = prices.reduce((a, b) => a + b, 0);
    return `Total Bill: ₹${total}`;
  } catch (err) {
    return err.message;
  }
}

console.log(calculateBill(["pizza", "burger"]));
console.log(calculateBill(["pizza", "momo"]));
