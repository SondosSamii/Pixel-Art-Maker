// Select color input
// Select size input

const ui = {
    sizePicker: document.getElementById("sizePicker"),
    pixelCanvas: document.getElementById("pixelCanvas"),
    colorPicker: document.getElementById("colorPicker"),
    inputHeight: document.getElementById("inputHeight"),
    inputWidth: document.getElementById("inputWidth"),
};

function cellOnClick() {
    let color = ui.colorPicker.value;
    this.style.backgroundColor = color;
}

function clearGrid() {
    // Remove Event Listeners
    for (let row of ui.pixelCanvas.rows) {
        for (let cell of row.cells) {
            cell.removeEventListener('click', cellOnClick);
        }
    }
    // clear DOM
    while (ui.pixelCanvas.hasChildNodes()) {
        ui.pixelCanvas.removeChild(ui.pixelCanvas.firstChild);
    }
}

function makeGrid() {
    // Your code goes here!
    let rows = ui.inputHeight.value;
    let cols = ui.inputWidth.value;

    for (let i = 0; i < rows; i++) {
        let row = document.createElement('tr');
        for (let j = 0; j < cols; j++) {
            let cell = document.createElement('td');
            row.appendChild(cell);
            cell.addEventListener('click', cellOnClick)
        }
        ui.pixelCanvas.appendChild(row);
    }
}

function sizePickerOnSubmit(e) {
    e.preventDefault();
    clearGrid();
    makeGrid();
}

// When size is submitted by the user, call makeGrid()
ui.sizePicker.addEventListener('submit', sizePickerOnSubmit);