function save() {
    var newItem = document.getElementById("box").ariaValueMax;
    localStorage.box = newItem;
}
function load() {
    var savedDiv = document.getElementById("savedList")
    savedDiv.innerHTML = localStorage.box;
}