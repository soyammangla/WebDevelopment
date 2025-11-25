document.getElementById("ticketForm").addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const seats = parseInt(document.getElementById("seats").value);

  if (!/^[A-Za-z ]+$/.test(name)) return alert("Invalid Name");
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return alert("Invalid Email");
  if (!(seats >= 1 && seats <= 10)) return alert("Seats must be 1-10");

  const ticket = { name, email, seats };
  document.getElementById(
    "ticket"
  ).innerHTML = `Ticket Booked!<br>Name: ${name}<br>Email: ${email}<br>Seats: ${seats}`;
});
