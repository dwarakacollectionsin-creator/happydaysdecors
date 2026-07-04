const API =
"https://script.google.com/macros/s/AKfycbwCinUKl2rNWMRnZER4INQSijnP-bQHNtuKh4uv9kBa575iDqwtJQzw3n0eJa6UBGS5/exec";

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
