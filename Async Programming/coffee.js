// Q1 – Async Coffee Maker: each step returns a Promise that resolves after 1-2s
function waitRandom(min = 1000, max = 2000) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function boilWater() {
  return new Promise((resolve, reject) => {
    const t = waitRandom();
    console.log("Boiling water...");
    setTimeout(() => {
      if (Math.random() < 0.15) return reject("Boiling failed");
      console.log("Water boiled");
      resolve("boiled water");
    }, t);
  });
}

function brewCoffee() {
  return new Promise((resolve, reject) => {
    const t = waitRandom();
    console.log("Brewing coffee...");
    setTimeout(() => {
      if (Math.random() < 0.15) return reject("Brewing failed");
      console.log("Coffee brewed");
      resolve("brewed coffee");
    }, t);
  });
}

function pourIntoCup() {
  return new Promise((resolve, reject) => {
    const t = waitRandom();
    console.log("Pouring into cup...");
    setTimeout(() => {
      if (Math.random() < 0.05) return reject("Pouring spilled");
      console.log("Poured into cup");
      resolve("coffee in cup");
    }, t);
  });
}

// Use Promise chaining with .then() and .catch()
boilWater()
  .then(() => brewCoffee())
  .then(() => pourIntoCup())
  .then(() => {
    console.log("Coffee ready for the team!");
  })
  .catch((err) => {
    console.error("Coffee process failed:", err);
  });
