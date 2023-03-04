let isScrollTop = true
const element = document.getElementById("menu-icon");
window.addEventListener('scroll', function () {
    if (window.scrollY > 180 && isScrollTop !== false) {
        isScrollTop = false
        element.classList.toggle("go-to-top")
        element.classList.remove("menu")
        element.classList.remove("cross")
        openMenu.classList.remove("open-menu")
        openMenu.classList.add("closed-menu")
     } else if (window.scrollY < 180 && isScrollTop !== true) {
        isScrollTop = true
        element.classList.toggle("go-to-top")
        element.classList.toggle("menu")
        element.classList.remove("cross")
    }
});
