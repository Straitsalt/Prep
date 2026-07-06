// Load DPP History
const history = JSON.parse(localStorage.getItem("dppHistory")) || [];
document.getElementById("total").innerText = history.length;

// Load Accuracy
const currentUser = JSON.parse(localStorage.getItem("currentUser"));

const accuracy = localStorage.getItem(`accuracy_${currentUser.email}`) || 0;

document.getElementById("accuracy").innerText = accuracy + "%";
document.getElementById("accuracy").innerText = accuracy + "%";

// Load Logged-in User
const currentUser = JSON.parse(localStorage.getItem("currentUser"));

if (currentUser) {
    document.getElementById("name").innerText = currentUser.name;
} else {
    document.getElementById("name").innerText = "Student";
}