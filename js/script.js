// ===============================
// Active Navigation Link
// ===============================

const currentPage = window.location.pathname.split("/").pop();

document.querySelectorAll("nav a").forEach(link => {

    if(link.getAttribute("href") === currentPage){

        link.classList.add("active");

    }

});

// ===============================
// Smooth Scroll
// ===============================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click",function(e){

        e.preventDefault();

        const target=document.querySelector(this.getAttribute("href"));

        if(target){

            target.scrollIntoView({

                behavior:"smooth"

            });

        }

    });

});

// ===============================
// Contact Form Validation
// ===============================

const form=document.querySelector("form");

if(form){

form.addEventListener("submit",function(e){

e.preventDefault();

const inputs=form.querySelectorAll("input[required], textarea[required]");

let valid=true;

inputs.forEach(input=>{

if(input.value.trim()===""){

valid=false;

input.style.border="2px solid red";

}else{

input.style.border="1px solid #ccc";

}

});

if(valid){

alert("Message Sent Successfully!");

form.reset();

}

});

}

// ===============================
// Fade Animation
// ===============================

const observer=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity=1;

entry.target.style.transform="translateY(0px)";

}

});

});

document.querySelectorAll(".card,.project-card,.gallery-item,.timeline-item,.stat").forEach(el=>{

el.style.opacity=0;

el.style.transform="translateY(40px)";

el.style.transition="0.7s";

observer.observe(el);

});