let plusButton = document.querySelector('.plus-button');
let minusButton = document.querySelector('.minus-button');
let displayNumberText = document.getElementById('display-number');

plusButton.addEventListener('click', (evt) => {
    let currentNumberIterator = parseInt(document.getElementById('number-counter').value);
    let displayNumberUse = parseInt(displayNumberText.innerText);
    displayNumberUse += currentNumberIterator
    displayNumberText.innerText = displayNumberUse
});

minusButton.addEventListener('click', (evt) => {
    let currentNumberIterator = parseInt(document.getElementById('number-counter').value);
    let displayNumberUse = parseInt(displayNumberText.innerText);
    displayNumberUse -= currentNumberIterator
    displayNumberText.innerText = displayNumberUse
});