const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

const clearButton = document.querySelector('.clear');
const stroke_weight = document.querySelector('.stroke-weight');
const color_picker = document.querySelector('.color-picker')
let isDrawing = false;

canvas.addEventListener('mousedown', start);
canvas.addEventListener('mousemove', drawing);
canvas.addEventListener('mouseup', stop);

clearButton.addEventListener('click', clearCanv);

window.addEventListener('resize', resizeCanvas)

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
resizeCanvas();

function start(e) {
    isDrawing = true;
    drawing(e);
}

function drawing({ clientX: x, clientY: y }) {
    if (!isDrawing) return;

    ctx.linewidth = stroke_weight.value;
    ctx.lineCap = "round";
    ctx.strokeStyle = color_picker.value;

    ctx.lineTo(x, y);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(x, y);
}

function stop() {
    isDrawing = false;
    ctx.beginPath();
}

function clearCanv() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}
