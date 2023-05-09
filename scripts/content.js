//To find an element using the css name instade of using an ID.

while (true) {
    let newItem = document.querySelectorAll(':not([id])');
    localStorage.debug = newItem;
}