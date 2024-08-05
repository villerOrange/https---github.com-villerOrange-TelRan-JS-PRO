const paragraph = document.querySelector('.zero')
const btnPositive = document.querySelector('.plus')
const btnNegative = document.querySelector('.minus')
let num = paragraph.textContent;

btnPositive.addEventListener('click', () => paragraph.textContent = ++num)
btnNegative.addEventListener('click', () => paragraph.textContent= --num)