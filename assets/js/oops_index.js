const img = document.getElementById("zoomable-image");
const container = document.getElementById("svg-viewer");

let scale = 1;
let posX = 0;
let posY = 0;
let isDragging = false;
let startX, startY;

// Zoom with wheel
container.addEventListener("wheel", function (e) {
  e.preventDefault();
  const scaleAmount = e.deltaY * -0.001;
  scale = Math.min(Math.max(0.5, scale + scaleAmount), 2.5); // keep within zoom bounds
  updateTransform();
});

// Pan with mouse
img.addEventListener("mousedown", function (e) {
  isDragging = true;
  startX = e.clientX - posX;
  startY = e.clientY - posY;
  img.style.cursor = "grabbing";
});

window.addEventListener("mousemove", function (e) {
  if (!isDragging) return;
  posX = e.clientX - startX;
  posY = e.clientY - startY;
  updateTransform();
});

window.addEventListener("mouseup", function () {
  isDragging = false;
  img.style.cursor = "grab";
});

function updateTransform() {
  img.style.transform = `translate(${posX}px, ${posY}px) scale(${scale})`;
}
