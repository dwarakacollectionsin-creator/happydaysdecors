const API =
"https://script.google.com/macros/s/AKfycbxqpH2c-L1RZNp91ZOrbHbEiee4CneAgN3QudX871e6jUJ_W22m5KaSddZ871GTeqrK/exec";

fetch(API)

.then(r=>r.json())

.then(data=>{

const box=document.getElementById("packageContainer");

box.innerHTML="";

data.forEach(item=>{

box.innerHTML+=`

<div class="package-card">

<img src="${item.image}">

<h3>${item.name}</h3>

<h1>₹${item.price}</h1>

<p>${item.features}</p>

<a href="contact.html"

class="book-btn">

Book Now

</a>

</div>

`;

});

});
