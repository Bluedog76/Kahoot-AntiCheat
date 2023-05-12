function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
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


//Send and recive to the content script (Host)
    sleep(5000)
    chrome.runtime.onConnect.addListener(function(port) {
        console.assert(port.name === "idSend");
        port.onMessage.addListener(function(msg) {
            var savedDiv2 = document.getElementById("savedList2")
            savedDiv2.innerHTML = msg.item;
            });
    });
