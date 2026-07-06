// Load DPP History
const history = JSON.parse(localStorage.getItem("dppHistory")) || [];
document.getElementById("total").innerText = history.length;

// Load Accuracy
const accuracy = localStorage.getItem("accuracy") || 0;
document.getElementById("accuracy").innerText = accuracy + "%";

// Load Logged-in User
const currentUser = localStorage.getItem("currentUser");

if (currentUser) {
    document.getElementById("name").innerText = currentUser;
} else {
    document.getElementById("name").innerText = "Student";
}