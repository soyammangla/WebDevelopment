let count = 0;

function increment() {
  count++;
  console.log("Count after increment:", count);
}

function decrement() {
  count--;
  console.log("Count after decrement:", count);
}

// Simulate clicks
increment();
increment();
decrement();

// Nested function demo
function counterSimulator() {
  let localCount = count;
  function addTwo() {
    localCount += 2;
    console.log("Local count inside nested function:", localCount);
  }
  addTwo();
}
counterSimulator();
