// Date & Time
function updateTime() {
let now = new Date();
document.getElementById("datetime").innerHTML = now;
}
setInterval(updateTime, 1000);

// Form validation + popup
function validateForm() {
let email = document.getElementById("email").value;
let phone = document.getElementById("phone").value;

let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
let phonePattern = /^[0-9]{10,11}$/;

if (!email.match(emailPattern)) {
alert("Invalid Email");
return false;
}

if (!phone.match(phonePattern)) {
alert("Invalid Phone Number");
return false;
}

alert("Form Submitted Successfully!");
return true;
}