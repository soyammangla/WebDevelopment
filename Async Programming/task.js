// Q2 — Demonstrate task order
console.log("Start");

setTimeout(() => {
  console.log("macrotask: setTimeout callback");
}, 0);

Promise.resolve().then(() => {
  console.log("microtask: Promise.then callback");
});

console.log("Sync log");

console.log("End");

/*
Expected order (and why):
1. "Start"         (synchronous)
2. "Sync log"      (synchronous)
3. "End"           (synchronous)
4. "microtask: ..." (Promise microtasks run right after current stack finishes)
5. "macrotask: ..." (setTimeout macrotasks run later in the task queue)

This shows microtasks (Promises) run before macrotasks (setTimeout).
*/
