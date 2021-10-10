document.addEventListener("scroll", function() {
    const header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
});



var items = document.getElementById("menu-bar");
var menu = document.getElementById("toggle");

items.style.right = "-300px";

menu.onclick = function() {
    if (items.style.right == "-300px") {
        items.style.right = "0";
    } else {
        items.style.right = "-300px";
    }
}


document.addEventListener("scroll", reveal);

function reveal() {
    var reveals = document.querySelectorAll(".reveal");

    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var revealTop = reveals[i].getBoundingClientRect().top;
        var revealPoint = 50;

        if (revealTop < windowHeight - revealPoint) {
            reveals[i].classList.add("active");
        }
    }
}