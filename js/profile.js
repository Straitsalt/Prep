const history = JSON.parse(localStorage.getItem("dppHistory")) || [];

document.getElementById("total").innerText = history.length;

const accuracy = localStorage.getItem("accuracy") || 0;
document.getElementById("accuracy").innerText = accuracy + "%";

// Show logged-in user's name
const currentUser = localStorage.getItem("currentUser") || "Student";
document.getElementById("name").innerText = currentUser;