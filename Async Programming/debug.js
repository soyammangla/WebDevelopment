// Q9 — Predict, run, compare
// Predicted order (comment):
// 1. "Script start"    (sync)
// 2. "Script end"      (sync)
// 3. "Promise callback" (microtask runs after sync)
// 4. "Timeout callback" (macrotask runs later)
// Actual run below:

console.log("Script start");
setTimeout(() => console.log("Timeout callback"), 0);
Promise.resolve().then(() => console.log("Promise callback"));
console.log("Script end");

// Explanation:
// Promises use the microtask queue which is processed immediately after
// the current call stack is empty, before macrotasks (like setTimeout).
// Therefore Promise callback logs before setTimeout callback.
