// LOGO ON HOVER ANIMATE
const logo= document.getElementById("logoId");
function hoverfunc(){
    logo.src += "?v=${new Date().getTime()}";
}
logo.addEventListener("mouseover", hoverfunc);

// ABOUT ME SQUARES
const square1 = document.getElementById("square1");
const squares = document.querySelectorAll(".square.hidden");
const aboutMeh2 = document.querySelector("#aboutMe h2");

square1.addEventListener("click", function() {
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

leftCard.addEventListener("mouseover", function() {
    rightCard.style.opacity = "0.3";
    h2.style.opacity = "0.3";
});

leftCard.addEventListener("mouseout", function() {
    rightCard.style.opacity = "1";
    h2.style.opacity = "1";
});

rightCard.addEventListener("mouseover", function() {
    leftCard.style.opacity = "0.3";
    h2.style.opacity = "0.3";
});

rightCard.addEventListener("mouseout", function() {
    leftCard.style.opacity = "1";
    h2.style.opacity = "1";
});
