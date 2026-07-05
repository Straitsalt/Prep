const history = JSON.parse(localStorage.getItem("dppHistory")) || [];

document.getElementById("total").innerText = history.length;

const accuracy = localStorage.getItem("accuracy") || 0;

document.getElementById("accuracy").innerText = accuracy + "%";