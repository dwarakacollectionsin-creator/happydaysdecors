const API =
"https://script.google.com/macros/s/AKfycbzR0KwlasL9LXtzuN8JpG2Ow8kSdmND6SImA2YKK0S6spjISgKbrAngKcCtbpX5Ips/exec";

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
