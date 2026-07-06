const API_URL = "https://script.google.com/macros/s/AKfycbzR0KwlasL9LXtzuN8JpG2Ow8kSdmND6SImA2YKK0S6spjISgKbrAngKcCtbpX5Ips/exec";

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
