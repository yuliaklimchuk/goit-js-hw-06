function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const btnCreate = document.querySelector('button[data-create]');
const btnDestroy = document.querySelector('button[data-destroy]');
const boxesDiv = document.querySelector('#boxes');
const amountBoxes = document.querySelector('input');

btnCreate.addEventListener('click', createBoxes);
btnDestroy.addEventListener('click', destroyBoxes);
  

function createBoxes() { 
  for (let i = 0; i < amountBoxes.value; i += 1) { 
    const newBox = document.createElement('div');
    newBox.style.backgroundColor = getRandomHexColor();
    newBox.style.width = `${30 + i*10}px`;
    newBox.style.height = `${30 + i * 10}px`;
    boxesDiv.append(newBox);
  }
}

function destroyBoxes() { 
  boxesDiv.innerHTML = '';
  amountBoxes.value = '';
}

