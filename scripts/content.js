//This is a content script running indavidualy on play.kahot.it

for (var i = 0; i < Infinity; i++) {
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
