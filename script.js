const menuHamburger = document.getElementById("menu-hamburger")
const navLinks = document.getElementById("nav-links")
menuHamburger.addEventListener("click", function() {
    if (navLinks.style.display === "none") {
        navLinks.style.display = "flex";
    } else {
        navLinks.style.display = "none";
    }
});
