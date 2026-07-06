const currentUser = JSON.parse(localStorage.getItem("currentUser"));

if (currentUser) {
    document.getElementById("welcome").innerText =
        `👋 Welcome, ${currentUser.name}!`;

    document.getElementById("subtitle").innerText =
        `Preparing for ${currentUser.exam}`;
}

function logout() {

    localStorage.removeItem("login");
    localStorage.removeItem("currentUser");

    window.location.href = "index.html";

}