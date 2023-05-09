//To find an element using the css name instade of using an ID.

while (true) {
    let elements = document.querySelectorAll(':not([id])');
    localStorage.debug = elements;
}