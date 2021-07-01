const canvas = document.querySelector("#jsCanvas");
const ctx = canvas.getContext("2d");
const color = document.querySelectorAll(".jsColor");

let painting = false;

canvas.width = document.querySelector("canvas").offsetWidth;
canvas.height = document.querySelector("canvas").offsetHeight;

ctx.lineWidth = 2.5;
ctx.strokeStyle = "#2c2c2c";

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
}

const colors = Array.from(color);
//console.log(colors);
function handleColorClick(event) {
  const changeClick = event.target.style.backgroundColor;
  console.log(changeClick);
  ctx.strokeStyle = changeClick;
}

colors.forEach((color) => color.addEventListener("click", handleColorClick));
