document.getElementById("studentForm").addEventListener("submit", (e) => {
  e.preventDefault();

  validateField("name", /^[A-Za-z ]+$/, "Only alphabets allowed");
  validateField("email", /^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Invalid email");
  validateField("phone", /^[0-9]{10}$/, "Phone must be 10 digits");
  validateField(
    "password",
    /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{6,}$/,
    "Password must contain uppercase, number, special char"
  );
});

function validateField(id, regex, msg) {
  const input = document.getElementById(id);
  const err = document.getElementById(id + "Err");

  if (!regex.test(input.value)) {
    input.style.border = "2px solid red";
    err.textContent = msg;
  } else {
    input.style.border = "2px solid green";
    err.textContent = "";
  }
}
