const p = document.querySelector('p')
p.addEventListener('click', () => {
    p.innerText = 'Новый, классный текст'
    console.log(p.innerText.length)
})