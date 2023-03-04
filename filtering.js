// document.getElementById("filter-metal")
//
// document.getElementById("filter-jazz")
//
//
//
//
// document.getElementsByClassName("metal")
// document.getElementsByClassName("jazz")


// Get all elements with class "filter"
const filterElements = document.querySelectorAll(".filter");
const metal = document.querySelectorAll(".metal, .metal-off");
console.log(metal)

function filterMetal() {
    metal.forEach(element => {
        element.classList.toggle("metal")
        element.classList.toggle("metal-off")
        checkForFilters()
    });
}

// Loop through each element
function checkForFilters() {
    filterElements.forEach(element => {
        // Check if element contains any or multiple of the classes "metal", "jazz" and "rock"
        if (element.classList.contains("metal") || element.classList.contains("jazz") || element.classList.contains("rock")) {
            // console.log("Element contains class 'metal', 'jazz' or 'rock'");
            element.classList.add("album")
            element.classList.remove("hidden")
            // shuffleAlbums()
        } else {
            // console.log("Element does not contain class 'metal', 'jazz' or 'rock'");
            // Toggle class "album"
            element.classList.remove("album")
            element.classList.add("hidden")
            // shuffleAlbums()
        }
    })
}