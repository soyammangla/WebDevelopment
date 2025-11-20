const dataString = "Hello";
const dataNumber = 42;
const dataBoolean = true;
const dataArray = [1, 2, 3];
const dataObject = { name: "Soyam", age: 22 };
const dataNull = null;
let dataUndefined;

console.table([
  { label: "dataString", value: dataString, type: typeof dataString },
  { label: "dataNumber", value: dataNumber, type: typeof dataNumber },
  { label: "dataBoolean", value: dataBoolean, type: typeof dataBoolean },
  {
    label: "dataArray",
    value: dataArray,
    type: Array.isArray(dataArray) ? "array" : typeof dataArray,
  },
  { label: "dataObject", value: dataObject, type: typeof dataObject },
  { label: "dataNull", value: dataNull, type: typeof dataNull },
  { label: "dataUndefined", value: dataUndefined, type: typeof dataUndefined },
]);
