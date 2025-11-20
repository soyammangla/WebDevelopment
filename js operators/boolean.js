let isDoorLocked = true;
let isWindowClosed = true;
let isAlarmOn = true;
let isOwnerInside = true;

if (isAlarmOn && isDoorLocked && isWindowClosed && isOwnerInside) {
  console.log("Secure");
} else {
  console.log("Unsafe");
}

// Test different scenarios
isOwnerInside = false;
console.log(
  isAlarmOn && isDoorLocked && isWindowClosed && isOwnerInside
    ? "Secure"
    : "Unsafe"
);
