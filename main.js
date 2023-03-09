// LOADING LOGO
function Loading() {
    $(".loadingLogo").fadeOut(1500);
    $("body").removeClass("preload");
        // Set a flag in localStorage to indicate that the animation has played
    sessionStorage.setItem("animationPlayed", "true");
}

    // Check if the animation has already played by reading the flag from localStorage
if (sessionStorage.getItem("animationPlayed") === "true") {

        // If the animation has played, hide the loading logo immediately
    $(".loadingLogo").hide();
    $("body").removeClass("preload");
} else {
    
        // If the animation hasn't played yet, wait for it to finish before hiding the loading logo
    const logoLoader = setTimeout(Loading, 3400);
}



// LOGO ON HOVER ANIMATE
const logo = document.getElementById("logoId");
function hoverfunc() {
    logo.src += "?v=${new Date().getTime()}";
}
logo.addEventListener("mouseover", hoverfunc);




// CAROUSEL
var slideIndex = 1;
var slides = document.getElementsByClassName("slides");
var timer;

showSlides(slideIndex);

function plusSlides(n) {
    clearTimeout(timer);
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    clearTimeout(timer);
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;

    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slides[slideIndex - 1].style.display = "block";

    timer = setTimeout(function () {
        plusSlides(1);
    }, 4000);
}

// STOP CAROUSEL ON HOVER
for (var i = 0; i < slides.length; i++) {
    slides[i].onmouseover = function () {
        clearTimeout(timer);
    }
    slides[i].onmouseout = function () {
        showSlides(slideIndex + 1);
    }
}



// ABOUT ME SQUARES
const square1 = document.getElementById("square1");
const squares = document.querySelectorAll(".square.hidden");
const aboutMeh2 = document.querySelector("#aboutMe h2");

square1.addEventListener("click", function () {
    square1.classList.toggle("clicked");
    squares.forEach(square => {
        if (square.classList.contains("hidden")) {
            square.classList.remove("hidden");
            aboutMeh2.style.opacity = "0.3";
        } else {
            square.classList.add("hidden");
            aboutMeh2.style.opacity = "1";
        }
    });
});



// CONTACT ME HOVER
const rightCard = document.getElementById("rightCard");
const leftCard = document.getElementById("leftCard");
const h2 = document.querySelector("#contactMe h2");

leftCard.addEventListener("mouseover", function () {
    rightCard.style.opacity = "0.3";
    h2.style.opacity = "0.3";
});

leftCard.addEventListener("mouseout", function () {
    rightCard.style.opacity = "1";
    h2.style.opacity = "1";
});

rightCard.addEventListener("mouseover", function () {
    leftCard.style.opacity = "0.3";
    h2.style.opacity = "0.3";
});

rightCard.addEventListener("mouseout", function () {
    leftCard.style.opacity = "1";
    h2.style.opacity = "1";
});
