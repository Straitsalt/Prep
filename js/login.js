
        function login() {

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Check registered user first
    const user = JSON.parse(localStorage.getItem("user"));

    if (
        user &&
        username === user.email &&
        password === user.password
    ) {
        localStorage.setItem("login", "true");
        localStorage.setItem("currentUser", user.name);
        window.location.href = "dashboard.html";
        return;
    }

    // Demo account
    if (username === "student" && password === "1234") {
        localStorage.setItem("login", "true");
        localStorage.setItem("currentUser", "Demo Student");
        window.location.href = "dashboard.html";
        return;
    }

    alert("Wrong Email or Password");
}