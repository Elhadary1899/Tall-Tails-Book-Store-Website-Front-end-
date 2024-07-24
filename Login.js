const usernameField = document.querySelector('#username');
const passwordField = document.querySelector('#password');

const users = document.querySelectorAll(".field");
const password = "1234";
	
const button = document.querySelector('.sign-in-btn');

button.addEventListener("click", (e)=>{
  if( (usernameField.value == "Elhadary" || usernameField.value == "Nourhan" || usernameField.value == "Seif" || usernameField.value == "Raneem" || usernameField.value == "Mohamed" ) && passwordField.value === password){
    window.location.href = "Homepage.html";
  } else{
    alert("Wrong Username or Password");
  }  
});