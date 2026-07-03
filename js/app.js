/* ======================================
   HAPPY DAYS DECORS
   APP.JS - PART 1
====================================== */

document.addEventListener("DOMContentLoaded", () => {

    /* -------------------------------
       Select Elements
    -------------------------------- */

    const header = document.querySelector(".header");
    const mobileMenu = document.querySelector(".mobile-menu");
    const menu = document.querySelector(".menu");
    const navLinks = document.querySelectorAll(".menu a");

    /* -------------------------------
       Mobile Menu Toggle
    -------------------------------- */

    if (mobileMenu && menu) {

        mobileMenu.addEventListener("click", () => {

            menu.classList.toggle("show");

            if (menu.classList.contains("show")) {

                mobileMenu.innerHTML =
                    '<i class="fa-solid fa-xmark"></i>';

            } else {

                mobileMenu.innerHTML =
                    '<i class="fa-solid fa-bars"></i>';

            }

        });

    }

    /* -------------------------------
       Close Menu After Click
    -------------------------------- */

    navLinks.forEach(link => {

        link.addEventListener("click", () => {

            if (menu.classList.contains("show")) {

                menu.classList.remove("show");

                mobileMenu.innerHTML =
                    '<i class="fa-solid fa-bars"></i>';

            }

        });

    });

    /* -------------------------------
       Sticky Header Shadow
    -------------------------------- */

    window.addEventListener("scroll", () => {

        if (window.scrollY > 30) {

            header.style.boxShadow =
                "0 10px 30px rgba(0,0,0,.25)";

        } else {

            header.style.boxShadow = "none";

        }

    });

    /* -------------------------------
       Active Navigation
    -------------------------------- */

    const currentPage =
        window.location.pathname.split("/").pop();

    navLinks.forEach(link => {

        const href = link.getAttribute("href");

        if (href === currentPage || (currentPage === "" && href === "index.html")) {

            link.classList.add("active");

        } else {

            link.classList.remove("active");

        }

    });

});
/* ======================================
   APP.JS - PART 2
   Scroll Animation & Counters
====================================== */

/* -------------------------------
   Fade Animation on Scroll
-------------------------------- */

const observer = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show-item");

        }

    });

}, {

    threshold:0.15

});

document.querySelectorAll(

".service-card,.package-card,.stat-card,.why-card,.testimonial-card"

).forEach((el)=>{

    el.classList.add("hidden-item");

    observer.observe(el);

});

/* -------------------------------
   Counter Animation
-------------------------------- */

const counters=document.querySelectorAll(".stat-card h2");

let counterStarted=false;

function startCounters(){

    if(counterStarted) return;

    counterStarted=true;

    counters.forEach(counter=>{

        let target=parseInt(counter.innerText);

        if(isNaN(target)) return;

        let count=0;

        let speed=Math.ceil(target/60);

        let update=()=>{

            count+=speed;

            if(count>=target){

                counter.innerText=target+"+";

            }else{

                counter.innerText=count+"+";

                requestAnimationFrame(update);

            }

        }

        update();

    });

}

window.addEventListener("scroll",()=>{

    const stats=document.querySelector(".stats");

    if(!stats) return;

    const top=stats.getBoundingClientRect().top;

    if(top<window.innerHeight-100){

        startCounters();

    }

});

/* -------------------------------
   Smooth Scroll
-------------------------------- */

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

    anchor.addEventListener("click",function(e){

        const target=document.querySelector(this.getAttribute("href"));

        if(target){

            e.preventDefault();

            target.scrollIntoView({

                behavior:"smooth"

            });

        }

    });

});

/* -------------------------------
   Gallery Hover Effect
-------------------------------- */

document.querySelectorAll(".gallery-grid img").forEach(img=>{

    img.addEventListener("mouseenter",()=>{

        img.style.transform="scale(1.05)";

    });

    img.addEventListener("mouseleave",()=>{

        img.style.transform="scale(1)";

    });

});
/* ======================================
   APP.JS - PART 3 (FINAL)
====================================== */

/* -------------------------------
   Scroll To Top Button
-------------------------------- */

const scrollBtn = document.createElement("button");

scrollBtn.innerHTML = "↑";

scrollBtn.id = "scrollTopBtn";

document.body.appendChild(scrollBtn);

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {

        scrollBtn.style.display = "flex";

    } else {

        scrollBtn.style.display = "none";

    }

});

scrollBtn.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});

/* -------------------------------
   Loading Animation
-------------------------------- */

window.addEventListener("load", () => {

    document.body.classList.add("loaded");

});

/* -------------------------------
   Auto Copyright Year
-------------------------------- */

const year = document.querySelector(".copyright-year");

if (year) {

    year.textContent = new Date().getFullYear();

}

/* -------------------------------
   Simple Image Preview
-------------------------------- */

document.querySelectorAll(".gallery-grid img").forEach(img => {

    img.addEventListener("click", () => {

        window.open(img.src, "_blank");

    });

});

/* -------------------------------
   Lazy Loading Images
-------------------------------- */

document.querySelectorAll("img").forEach(img => {

    img.loading = "lazy";

});

/* -------------------------------
   Console Message
-------------------------------- */

console.log("Happy Days Decors Website Loaded Successfully 🚀");
