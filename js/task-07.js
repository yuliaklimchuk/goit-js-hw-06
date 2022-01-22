const inputValue = document.querySelector('#font-size-control');
const text = document.querySelector('#text');
text.style.fontSize = `${Number(inputValue.value)}px`;
inputValue.addEventListener('input', () => { 
    text.style.fontSize = `${Number(inputValue.value)}px`;
})