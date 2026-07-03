/* =========================================
   HAPPY DAYS DECORS
   CONTACT.JS
========================================= */

const form = document.getElementById("contactForm");
const status = document.getElementById("status");

const API_URL = "YOUR_WEB_APP_URL";

form.addEventListener("submit", async (e) => {

    e.preventDefault();

    status.innerHTML = "⏳ Sending...";

    const formData = {

        name: form.name.value,

        phone: form.phone.value,

        event: form.event.value,

        date: form.date.value,

        message: form.message.value

    };

    try{

        const response = await fetch(API_URL,{

            method:"POST",

            headers:{
                "Content-Type":"application/json"
            },

            body:JSON.stringify(formData)

        });

        const result = await response.json();

        if(result.success){

            status.innerHTML="✅ Booking Request Sent Successfully!";

            form.reset();

            setTimeout(()=>{

                window.open(
                    "https://wa.me/919999999999?text=Hi%20Happy%20Days%20Decors,%20I%20have%20submitted%20a%20booking%20request.",
                    "_blank"
                );

            },1500);

        }else{

            status.innerHTML="❌ Failed to send request.";

        }

    }catch(error){

        console.error(error);

        status.innerHTML="⚠️ Network Error.";

    }

});
