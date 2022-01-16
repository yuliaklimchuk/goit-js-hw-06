const value = document.querySelector('#value');
let counterValue = 0;
const buttonIncrement = document.querySelector('[data-action="increment"]');
const buttonDecrement = document.querySelector('[data-action="decrement"]');
buttonIncrement.addEventListener('click', () => { 
    counterValue += 1;
    value.textContent = counterValue;
});

buttonDecrement.addEventListener('click', () => { 
    counterValue -= 1;
    value.textContent = counterValue;
});
