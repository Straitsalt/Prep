function login() {

    const email = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value;

    // Get all registered users
    const users = JSON.parse(localStorage.getItem("users")) || [];

    // Find matching user
    const user = users.find(
        u => u.email === email && u.password === password
    );

    if (user) {
        localStorage.setItem("login", "true");
        localStorage.setItem("currentUser", JSON.stringify(user));

        window.location.href = "dashboard.html";
        return;
    }

    // Optional demo account
    if (email === "student" && password === "1234") {

        localStorage.setItem("login", "true");

        localStorage.setItem("currentUser", JSON.stringify({
            name: "Demo Student",
            email: "student",
            exam: "NEET"
        }));

        window.location.href = "dashboard.html";
        return;
    }

    alert("Wrong Email or Password");
}