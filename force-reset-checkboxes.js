
const checkbox = document.querySelectorAll('.checkbox')
document.addEventListener("load", function () {
    checkbox.forEach(element => {
        element.checked = false;
    })
})