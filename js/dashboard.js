const currentUser = JSON.parse(localStorage.getItem("currentUser"));

if(currentUser){

    document.getElementById("welcome").innerText =
    "👋 " + currentUser.name;

    const history =
        JSON.parse(localStorage.getItem(`dppHistory_${currentUser.email}`)) || [];

    document.getElementById("totalDpp").innerText = history.length;

    const accuracy =
        localStorage.getItem(`accuracy_${currentUser.email}`) || 0;

    document.getElementById("accuracyValue").innerText = accuracy + "%";
}

function logout(){

    localStorage.removeItem("login");
    localStorage.removeItem("currentUser");

    window.location.href="index.html";

}