// Original callback-style:
// function fetchBugs(callback) {
//   setTimeout(() => callback(["UI glitch", "API timeout", "Login failure"]), 1000);
// }

// Q3 — Promise-based
function getBugs() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const fail = Math.random() < 0.2;
      if (fail) return reject(new Error("Failed to fetch bugs (simulated)"));
      resolve(["UI glitch", "API timeout", "Login failure"]);
    }, 1000);
  });
}

getBugs()
  .then((bugs) => {
    console.log("Bugs fetched:");
    console.table(bugs.map((b, i) => ({ id: i + 1, bug: b })));
  })
  .catch((err) => {
    console.error("Error fetching bugs:", err.message);
  });
