const square = document.getElementById("square");
const sizeInput = document.getElementById("size");
const sizeValue = document.getElementById("sizeValue");
const colorInput = document.getElementById("color");

function updateSize(size) {
  square.style.width = `${size}px`;
  square.style.height = `${size}px`;
  sizeValue.textContent = size;
}

sizeInput.addEventListener("input", (e) => updateSize(e.target.value));

colorInput.addEventListener("input", (e) => {
  square.style.backgroundColor = e.target.value;
});

// Initial setup
updateSize(sizeInput.value);
