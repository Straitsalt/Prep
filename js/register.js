function register() {

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;
    const exam = document.getElementById("exam").value;

    if (!name || !email || !password) {
        alert("Please fill all fields.");
        return;
    }

    // Get all registered users
    let users = JSON.parse(localStorage.getItem("users")) || [];

    // Check if email already exists
    const exists = users.find(user => user.email === email);

    if (exists) {
        alert("An account with this email already exists.");
        return;
    }

    // Add new user
    users.push({
        name,
        email,
        password,
        exam
    });

    // Save all users
    localStorage.setItem("users", JSON.stringify(users));

    alert("Registration Successful!");

    window.location.href = "index.html";
}