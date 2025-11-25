// Q7 — allSettled with random rejection and time measurement
function loadProfile() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      Math.random() < 0.2
        ? reject("Profile failed")
        : resolve("Profile Loaded");
    }, 2000);
  });
}
function loadPosts() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      Math.random() < 0.2 ? reject("Posts failed") : resolve("Posts Loaded");
    }, 1500);
  });
}
function loadMessages() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      Math.random() < 0.2
        ? reject("Messages failed")
        : resolve("Messages Loaded");
    }, 1000);
  });
}

(async function runAllSettledDemo() {
  const start = Date.now();
  const results = await Promise.allSettled([
    loadProfile(),
    loadPosts(),
    loadMessages(),
  ]);
  const end = Date.now();
  results.forEach((r, idx) => {
    const name = ["Profile", "Posts", "Messages"][idx];
    if (r.status === "fulfilled") {
      console.log(`${name}: SUCCESS -> ${r.value}`);
    } else {
      console.log(`${name}: FAILED -> ${r.reason}`);
    }
  });
  console.log("Total time (ms):", end - start);
})();
