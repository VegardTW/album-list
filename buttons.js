document.getElementById("go-to-top");
// document.getElementById("refresh");
const button = document.getElementById("menu-icon");
const openRefresh = document.getElementById("refresh");
const openFilter = document.getElementById("filters");
const openMetal = document.getElementById("metal");
const openJazz = document.getElementById("jazz");
const openRock = document.getElementById("rock");

// function buttons() {
//     document.body.scrollTop = 0; // For Safari
//     document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera

function reload() {
    shuffleAlbums()
    // location.reload()
}

function toggleUnderline() {
    openMetal.classList.toggle("open-metal")
    openJazz.classList.toggle("open-jazz")
    openRock.classList.toggle("open-rock")
    document.getElementById("filters").classList.toggle("underline")
}

function allButtons() {
    if (button.classList.contains("go-to-top")) {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    } else if (button.classList.contains("menu")) {
        button.classList.toggle("menu")
        button.classList.toggle("cross")
        expandMenu()
    } else if (button.classList.contains("cross")) {
        button.classList.toggle("menu")
        button.classList.toggle("cross")
        expandMenu()
    }
}

function expandMenu() {
    openRefresh.classList.toggle("open-menu")
    openRefresh.classList.toggle("closed-menu")
    openFilter.classList.toggle("open-menu")
    openFilter.classList.toggle("closed-menu")
}