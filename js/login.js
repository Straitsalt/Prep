function login(){

const username=document.getElementById("username").value;
const password=document.getElementById("password").value;

if(username==="student" && password==="1234"){

localStorage.setItem("login","true");

window.location.href="dashboard.html";

}else{

alert("Wrong Username or Password");

}

}