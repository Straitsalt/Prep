function login() {

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Demo account
    if (username === "student" && password === "1234") {

        localStorage.setItem("login", "true");
        localStorage.setItem("currentUser", "student");

        window.location.href = "dashboard.html";
        return;
    }

    // Registered user
    const user = JSON.parse(localStorage.getItem("user"));

    if (
        user &&
        username === user.email &&
        password === user.password
    ) {

        localStorage.setItem("login", "true");
        localStorage.setItem("currentUser", user.name);

        window.location.href = "dashboard.html";

    } else {

        alert("Wrong Username or Password");

    }

}