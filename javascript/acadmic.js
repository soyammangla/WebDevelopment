const marks = [88, 76, 90, 85, 80];
const anyFail = marks.some((mark) => mark < 35);
const avg = marks.reduce((a, b) => a + b, 0) / marks.length;

if (anyFail) {
  console.log("Detained due to low marks in a subject.");
} else if (avg >= 85) {
  console.log("Promoted with Distinction");
} else if (avg >= 50) {
  console.log("Promoted");
} else {
  console.log("Detained");
}
