const filterElements = document.querySelectorAll(".filter")
const metal = document.querySelectorAll(".metal, .metal-off")
const jazz = document.querySelectorAll(".jazz, .jazz-off")
const rock = document.querySelectorAll(".rock, .rock-off")
const other = document.querySelectorAll(".other, .other-off")
const metalCB = document.getElementById("metal-cb")
const jazzCB = document.getElementById("jazz-cb")
const rockCB = document.getElementById("rock-cb")
const otherCB = document.getElementById("other-cb")

document.addEventListener("DOMContentLoaded", function () {
    filterMetal()
    filterJazz()
    filterRock()
})
metalCB.addEventListener("change", function () {
    filterMetal()
})
jazzCB.addEventListener("change", function () {
    filterJazz()
})
rockCB.addEventListener("change", function () {
    filterRock()
})
otherCB.addEventListener("change", function () {
    filterOther()
})

function filterMetal() {
    if (metalCB.checked === false) {
        metal.forEach(element => {
            element.classList.remove("metal")
            element.classList.add("metal-off")
        })
    } else if (metalCB.checked !== false) {
        metal.forEach(element => {
            element.classList.add("metal")
            element.classList.remove("metal-off")
        })
    }
    checkForFilters()
}

function filterJazz() {
    if (jazzCB.checked === false) {
        jazz.forEach(element => {
            element.classList.remove("jazz")
            element.classList.add("jazz-off")
        })
    } else if (jazzCB.checked !== false) {
        jazz.forEach(element => {
            element.classList.add("jazz")
            element.classList.remove("jazz-off")
        })
    }
    checkForFilters()
}

function filterRock() {
    if (rockCB.checked === false) {
        rock.forEach(element => {
            element.classList.remove("rock")
            element.classList.add("rock-off")
        })
    } else if (rockCB.checked !== false) {
        rock.forEach(element => {
            element.classList.add("rock")
            element.classList.remove("rock-off")
        })
    }
    checkForFilters()
}
function filterOther() {
    if (otherCB.checked === false) {
        other.forEach(element => {
            element.classList.remove("other")
            element.classList.add("other-off")
        })
    } else if (otherCB.checked !== false) {
        other.forEach(element => {
            element.classList.add("other")
            element.classList.remove("other-off")
        })
    }
    checkForFilters()
}

// Loop through each element
function checkForFilters() {
    filterElements.forEach(element => {
        // Check if element contains any or multiple of the classes "metal", "jazz" and "rock"
        if (element.classList.contains("metal") ||
            element.classList.contains("jazz") ||
            element.classList.contains("other") ||
            element.classList.contains("rock")) {
            // console.log("Element contains class 'metal', 'jazz' or 'rock'");
            element.classList.add("album")
            element.classList.remove("hidden")
        } else {
            // console.log("Element does not contain class 'metal', 'jazz' or 'rock'");
            // Toggle class "album"
            element.classList.remove("album")
            element.classList.add("hidden")
        }
        shuffleAlbums()
    })
}