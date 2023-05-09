function save() {
    var newItem = document.getElementById("box").value;
    localStorage.box = newItem;
}
function load() {
    var savedDiv = document.getElementById("savedList")
    savedDiv.innerHTML = localStorage.box;
    
}

document.getElementById("save").addEventListener("click", save);
document.getElementById("load").addEventListener("click", load);

while (true) {
var savedDiv2 = document.getElementById("savedList2")
savedDiv.innerHTML = localStorage.debug;
}