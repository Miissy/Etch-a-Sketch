// Etch-a-Sketch Odin Project

let size = 16;

let slider = document.getElementById('size-slider');
let btnColor = document.getElementById('btn-color')
let btnErase = document.getElementById('btn-eraser');
let btnClear = document.getElementById('btn-clear');
let color = document.getElementById('color-picker');

let mouseDown = false;
document.body.onmousedown = () => (mouseDown = true);
document.body.onmouseup = () => (mouseDown = false);


// Create a webpage with a 16x16 grid of square divs using JavaScript
const containerOfContainers = document.querySelector('.container-of-containers');

function addContainer(size) {

    for (let i = 0; i < size; i++) {
        const container = document.createElement('div');
        container.className = 'container';
        containerOfContainers.appendChild(container);

        for (let i = 0; i < size; i++) {
            const divs = document.createElement('div');
            divs.className = 'divs';
            divs.addEventListener('mousedown', changeColor);
            divs.addEventListener('mouseover', changeColor);
            container.appendChild(divs);
        }
    }
};

function changeColor(div) {
    if (mouseDown) {
        div.target.style.backgroundColor = color.value;
    }
};

function setGridSize() {
    let divs = document.querySelectorAll('.divs');
    divs.forEach(divs => divs.remove());
    addContainer(slider.value)
};

function clear() {
    let squares = document.querySelectorAll('.divs');
    squares.forEach((divs) => (divs.style.backgroundColor = 'white'));
};

// EventListeners
btnErase.addEventListener('click', () => {
    color.value = '#ffffff';
});
btnClear.addEventListener('click', clear);
slider.addEventListener('mouseup', setGridSize);

addContainer(size);

// To do: 
// - Add CSS to button and slider