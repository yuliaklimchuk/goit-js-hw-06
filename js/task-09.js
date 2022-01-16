function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const colorName = document.querySelector('.color');
const button = document.querySelector('.change-color');

button.addEventListener('click', () => { 
  const color = getRandomHexColor();
  colorName.textContent = color;
  document.body.style.backgroundColor = color;
})