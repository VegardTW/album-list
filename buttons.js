document.getElementById("go-to-top");
document.getElementById("refresh");

function buttons() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

function reload() {
    location.reload()
}

function goToX() {
    var element = document.getElementById("menu-icon");
    element.classList.toggle("animate");
}