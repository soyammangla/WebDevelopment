document.getElementById("loginForm").addEventListener("submit", (e) => {
  e.preventDefault();

  const u = document.getElementById("user").value;
  const p = document.getElementById("pass").value;

  let msg = "";

  if (!/^.{5,}$/.test(u)) msg += "Username must be 5+ chars<br>";
  if (!/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/.test(p))
    msg +=
      "Password must contain uppercase, lowercase, number, special char<br>";

  document.getElementById("msg").innerHTML =
    msg === "" ? "Login Successful!" : msg;
});
