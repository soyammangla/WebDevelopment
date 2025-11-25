// Q8 — submitOrder fails 50% time, processOrder tries up to 3 times
function submitOrder() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      Math.random() < 0.5
        ? resolve("Order submitted")
        : reject("Random failure");
    }, 500);
  });
}

async function processOrder() {
  const maxAttempts = 3;
  for (let attempt = 1; attempt <= maxAttempts; attempt++) {
    try {
      await submitOrder();
      console.log(`Attempt ${attempt}: Success`);
      return "Processed";
    } catch (err) {
      console.log(`Attempt ${attempt}: Failed`);
      if (attempt === maxAttempts) {
        throw new Error("Order could not be processed");
      }
    }
  }
}

processOrder()
  .then(() => console.log("Order processed successfully"))
  .catch((err) => console.error(err.message));
