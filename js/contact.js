document
.getElementById("contactForm")
.addEventListener("submit",function(e){

e.preventDefault();

document.getElementById("status").innerHTML="Sending...";

});
