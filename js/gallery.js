const API_URL = "https://script.google.com/macros/s/AKfycbzXb0YMQaTN-mpN0EoS6psqNLP0RG7zGJQqrBM5QW1byQ4oXVFLgEjJalsJ-mhvxfhJ/exec";

fetch(API_URL)
.then(res => res.json())
.then(data => {

const container = document.getElementById("galleryContainer");

container.innerHTML="";

data.forEach(item=>{

container.innerHTML += `

<div class="service-card">

<img src="${item.image}" alt="${item.title}">

<h3>${item.title}</h3>

<p>${item.category}</p>

</div>

`;

});

});
