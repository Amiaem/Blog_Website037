const slider = document.querySelector(".slider");
const sliderContainer = document.querySelector(".slider-container");
const codeContainer = document.querySelector(".code-container");

let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener("mousedown", (e) => {
  isDown = true;
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = codeContainer.scrollLeft;
});

slider.addEventListener("mouseup", () => {
  isDown = false;
});

slider.addEventListener("mousemove", (e) => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - slider.offsetLeft;
  const walk = (x - startX) * 2; // เพิ่มความเร็วการเลื่อน
  codeContainer.scrollLeft = scrollLeft - walk;
  slider.style.width = `${(codeContainer.scrollLeft / (codeContainer.scrollWidth - codeContainer.clientWidth)) * 100}%`;
});

sliderContainer.addEventListener("mouseleave", () => {
  isDown = false;
});
