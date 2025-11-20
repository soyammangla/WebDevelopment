let x = 16.75;
let randomNum = Math.floor(Math.random() * 41) + 10; // 10-50

console.log(`Number: ${x}`);
console.log(`Rounded: ${Math.round(x)}`);
console.log(`Square Root: ${Math.sqrt(x).toFixed(2)}`);
console.log(`Cubed: ${Math.pow(x, 3).toFixed(2)}`);
console.log(`Random Number (10-50): ${randomNum}`);
