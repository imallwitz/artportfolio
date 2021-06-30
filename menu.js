var ham = document.querySelector(".ham");
var menu = document.querySelector(".menu");
var openIcon = document.querySelector(".openIcon");
var closeIcon = document.querySelector(".closeIcon");

function toggleMenu() {
    if (menu.classList.contains("showMenu")) {
        openIcon.style.display = "block";
        closeIcon.style.display = "none";
        menu.classList.remove("showMenu");
    } else {
        menu.classList.add("showMenu");
        openIcon.style.display = "none";
        closeIcon.style.display = "block";
    }
}

ham.addEventListener("click", toggleMenu);
