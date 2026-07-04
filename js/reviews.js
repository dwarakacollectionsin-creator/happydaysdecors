const API =
"https://script.google.com/macros/s/AKfycbwCinUKl2rNWMRnZER4INQSijnP-bQHNtuKh4uv9kBa575iDqwtJQzw3n0eJa6UBGS5/exec";

fetch(API)
.then(res => res.json())
.then(data => {

const container =
document.getElementById("reviewContainer");

container.innerHTML = "";

data.forEach(item => {

const stars = "⭐".repeat(Number(item.rating));

container.innerHTML += `

<div class="testimonial-card">

<img src="${item.image}"
style="width:80px;height:80px;border-radius:50%;object-fit:cover;margin:auto;">

<h3>${stars}</h3>

<p>${item.review}</p>

<h4>${item.name}</h4>

</div>

`;

});

});
