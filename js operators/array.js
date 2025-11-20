let scores = Array.from(
  { length: 8 },
  () => Math.floor(Math.random() * 71) + 30
); // 30-100

const highest = Math.max(...scores);
const lowest = Math.min(...scores);
const average = scores.reduce((a, b) => a + b, 0) / scores.length;
const passed = scores.filter((score) => score >= 50).length;

console.log("Scores:", scores);
console.log(`Highest: ${highest}, Lowest: ${lowest}`);
console.log(`Average: ${average.toFixed(2)}`);
console.log(`Students Passed: ${passed}`);
