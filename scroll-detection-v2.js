let isScrollTop = true
const element = document.getElementById("menu-icon");
window.addEventListener('scroll', function () {
    if (window.scrollY > 20 && isScrollTop !== false) {
        isScrollTop = false
        element.classList.toggle("animate")
    } else if (window.scrollY < 20 && isScrollTop !== true) {
        isScrollTop = true
        element.classList.toggle("animate")
    }
});
