document.getElementById("go-to-top");
document.getElementById("refresh");
const button = document.getElementById("menu-icon");

// function buttons() {
//     document.body.scrollTop = 0; // For Safari
//     document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera

function reload() {
    location.reload()
}

function allButtons() {
    if (button.classList.contains("go-to-top")) {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    } else if (button.classList.contains("menu")) {
        button.classList.toggle("menu")
        button.classList.toggle("cross")
    } else if (button.classList.contains("cross")) {
        button.classList.toggle("menu")
        button.classList.toggle("cross")
    }
}
