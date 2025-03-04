function login() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let errorMsg = document.getElementById("error-msg");

   
    if (username === "admin" && password === "1234") {
        localStorage.setItem("loggedIn", true);
        window.location.href = "jobs.html"; 
    } else {
        errorMsg.textContent = "Invalid username or password";
    }
}



function submitForm() {

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const message = document.getElementById("message").value;

            
    alert(`Details submitted:\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`);

        
    return false;
}


document.addEventListener("DOMContentLoaded", function () {
   
    
    const toggleButton = document.createElement("button");
    toggleButton.innerText = "Dark Mode";
    toggleButton.style.position = "fixed";
    toggleButton.style.top = "10px";
    toggleButton.style.right = "10px";
    toggleButton.style.padding = "10px";
    toggleButton.style.background = "#007BFF";
    toggleButton.style.color = "white";
    toggleButton.style.border = "none";
    toggleButton.style.cursor = "pointer";

    
    
    document.body.appendChild(toggleButton);
    

    
    toggleButton.addEventListener("click", function () {
        document.body.classList.toggle("dark-mode");
        
    });
   

    const style = document.createElement("style");
    style.innerHTML = `
        .dark-mode {
            background-color: black;
            color: white;
        }
    `;
    document.head.appendChild(style);
});



let stars = 
	document.getElementsByClassName("star");
let output = 
	document.getElementById("output");


function gfg(n) {
	remove();
	for (let i = 0; i < n; i++) {
		if (n == 1) cls = "one";
		else if (n == 2) cls = "two";
		else if (n == 3) cls = "three";
		else if (n == 4) cls = "four";
		else if (n == 5) cls = "five";
		stars[i].className = "star " + cls;
	}
	output.innerText = "Rating is: " + n + "/5";
}


function remove() {
	let i = 0;
	while (i < 5) {
		stars[i].className = "star";
		i++;
	}
}

let currentIndex = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

function goToSlide(index) {
    const slider = document.querySelector('.slider');
    slider.style.transform = `translateX(-${index * 100}%)`;
    currentIndex = index;
}

function nextSlide() {
    if (currentIndex === totalSlides - 1) {
        goToSlide(0);
    } else {
        goToSlide(currentIndex + 1);
    }
}

function prevSlide() {
    if (currentIndex === 0) {
        goToSlide(totalSlides - 1);
    } else {
        goToSlide(currentIndex - 1);
    }
}


setInterval(nextSlide, 3000); 

const testimonialSlider = document.querySelector('.testimonial-slider');
const testimonials = document.querySelectorAll('.testimonial');

let currentTestimonial = 0;

function showTestimonial() {
  testimonials.forEach((testimonial, index) => {
    if (index === currentTestimonial) {
      testimonial.style.display = 'block';
    } else {
      testimonial.style.display = 'none';
    }
  });
}

function nextTestimonial() {
  currentTestimonial++;
  if (currentTestimonial >= testimonials.length) {
    currentTestimonial = 0;
  }
  showTestimonial();
}

function prevTestimonial() {
    currentTestimonial--;
    if (currentTestimonial < 0) {
      currentTestimonial = testimonials.length - 1;
    }
    showTestimonial();
}
  
testimonialSlider.addEventListener('click', (e) => {
    if (e.target.classList.contains('next')) {
      nextTestimonial();
    } else if (e.target.classList.contains('prev')) {
      prevTestimonial();
    }
});
  
showTestimonial();
  
  
setInterval(nextTestimonial, 5000);
  
