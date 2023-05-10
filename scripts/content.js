//This is a content script running indavidualy on play.kahot.it


//Messaging and reciving from and to host to display on wepage
while (true) {
    let itemId = document.querySelectorAll(':not([id])');
    var port = chrome.runtime.connect({name: "idSend"});
    port.postMessage({item: itemId});
    //port.onMessage.addListener(function(msg) {
      //if (msg.question === "Who's there?")
        //port.postMessage({answer: "Madame"});
      //else if (msg.question === "Madame who?")
        //port.postMessage({answer: "Madame... Bovary"});
    //};
}