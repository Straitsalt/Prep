function register() {

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const exam = document.getElementById("exam").value;

    if (!name || !email || !password) {
        alert("Please fill all fields.");
        return;
    }

    const user = {
        name,
        email,
        password,
        exam
    };

    localStorage.setItem("user", JSON.stringify(user));

    alert("Registration Successful!");

    window.location.href = "index.html";
}