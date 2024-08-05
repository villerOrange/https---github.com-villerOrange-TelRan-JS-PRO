const p1 = document.querySelector('.p1');
const p2 = document.querySelector('.p2');
let i = 0

const randRGB = () => {
    return Math.round(Math.random() * 255)
}

p1.addEventListener('click', () => {
    p2.style.fontSize = '32px'
    p2.style.backgroundColor = 'red'
})

p2.addEventListener('click', () => {
    if (i === 0) {
        p1.style.color = `rgb(${randRGB()} ${randRGB()} ${randRGB()}`
        i++
    }
})


// 7. Создать два парграфа.

//При клике на первый параграф у второго меняется размер шрифта 32px и цвет заднего вона на красный.

//При клике на второй парграф - у первого увет текста меняется на случайный (один раз)