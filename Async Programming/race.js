// Q4 — Two servers: A (2s) and B (3s), with random failure
function serverA() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.15) return reject("Server A failed");
      resolve("Server A done");
    }, 2000);
  });
}

function serverB() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.15) return reject("Server B failed");
      resolve("Server B done");
    }, 3000);
  });
}

// Promise.all -> all finished
Promise.all([serverA(), serverB()])
  .then((results) => {
    console.log("Deployment completed for all servers");
    console.log("Results:", results);
  })
  .catch((err) => {
    console.error("One or more deployments failed (Promise.all):", err);
  });

// Promise.race -> fastest responder
Promise.race([serverA(), serverB()])
  .then((fastest) => {
    console.log("Fastest response:", fastest);
  })
  .catch((err) => {
    console.error("Race error (fastest failed):", err);
  });
