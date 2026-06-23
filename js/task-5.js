function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

document.querySelector("button.change-color").addEventListener("click", () => {
  const colorValue = getRandomHexColor();
  document.querySelector("span.color").textContent = colorValue;
  document.body.style.backgroundColor = colorValue;
});