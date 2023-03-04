document.getElementById("go-to-top");
document.getElementById("refresh");
const button = document.getElementById("menu-icon");
const openMenu = document.getElementById("refresh");

// function buttons() {
//     document.body.scrollTop = 0; // For Safari
//     document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera

function reload() {
    shuffleAlbums()
    // location.reload()
}

function allButtons() {
    if (button.classList.contains("go-to-top")) {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    } else if (button.classList.contains("menu")) {
        button.classList.toggle("menu")
        button.classList.toggle("cross")
        openMenu.classList.toggle("open-menu")
        openMenu.classList.toggle("closed-menu")
    } else if (button.classList.contains("cross")) {
        button.classList.toggle("menu")
        button.classList.toggle("cross")
        openMenu.classList.toggle("open-menu")
        openMenu.classList.toggle("closed-menu")
    }
}
