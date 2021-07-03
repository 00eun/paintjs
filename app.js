const canvas = document.querySelector("#jsCanvas");
const ctx = canvas.getContext("2d");
const color = document.querySelectorAll(".jsColor");
const range = document.querySelector(".controls__range input");
const mode = document.querySelector("#jsMode");
const saveBtn = document.querySelector("#jsSave");

let painting = false;
let filling = false;
const DEFAULTCOLOR = "#2c2c2c";

canvas.width = document.querySelector("canvas").offsetWidth;
canvas.height = document.querySelector("canvas").offsetHeight;

ctx.fillStyle = "white";
ctx.fillRect(0, 0, canvas.width, canvas.height);
ctx.lineWidth = 2.5;
ctx.strokeStyle = DEFAULTCOLOR;
ctx.fillStyle = DEFAULTCOLOR;

function onMouseMove(event) {
  const x = event.offsetX;
  const y = event.offsetY;

  if (!painting) {
    ctx.beginPath();
    ctx.moveTo(x, y);
  } else {
    ctx.lineTo(x, y);
    ctx.stroke();
  }
}

function startPainting(event) {
  painting = true;
}

function stopPainting(event) {
  painting = false;
}

if (canvas) {
  canvas.addEventListener("mousemove", onMouseMove);
  canvas.addEventListener("mousedown", startPainting);
  canvas.addEventListener("mouseup", stopPainting);
  canvas.addEventListener("click", handleCanvasClick);
}

const colors = Array.from(color);
//console.log(colors);

function handleColorClick(event) {
  const changeClick = event.target.style.backgroundColor;
  console.log(changeClick);
  ctx.strokeStyle = changeClick;
  ctx.fillStyle = changeClick;
}

colors.forEach((color) => color.addEventListener("click", handleColorClick));

function handleChangeRange(event) {
  const stroke = event.target.value;
  ctx.lineWidth = stroke;
}

function handleModeClick() {
  if (filling === true) {
    filling = false;
    mode.innerText = "Fill";
  } else {
    filling = true;
    mode.innerText = "Paint";
  }
}

function handleCanvasClick() {
  if (filling) {
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  }
}

function handleSaveImg() {
  const dataURL = canvas.toDataURL();
  console.log(dataURL);
  const link = document.createElement("a");
  link.href = dataURL;
  link.download = "PaintJS[🎁]";
  link.click();
}

if (range) {
  range.addEventListener("input", handleChangeRange);
}

if (mode) {
  mode.addEventListener("click", handleModeClick);
}

if (saveBtn) {
  saveBtn.addEventListener("click", handleSaveImg);
}
