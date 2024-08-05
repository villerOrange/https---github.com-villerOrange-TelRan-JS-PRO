const btn_1 = document.querySelector('.btn_1');
const title_1 = document.querySelector('.title_1');

let index = 1;
btn_1.addEventListener('click', () => { title_1.style.fontSize = `${20 * index++}px` })

// ------------------------------------------
// Task 2
// После нажатия на кнопку реализуйте изменение темы приложения с light на dark 
// класс необходимо поменять не только в div, но и для button

// firstElementChild           - Первый ребенок
// lastElementChild            - Последний ребенок
// nextElementSibling   - Следующий братский узел
// previousElementSibling      - Предыдущий братский узел
// parentElement        - Родитель

const changeThemeButton = document.querySelector('.btn_theme')
changeThemeButton.addEventListener('click', () => {

    changeThemeButton.classList.toggle('light');
    changeThemeButton.classList.toggle('dark');

    changeThemeButton.parentElement.classList.toggle('light');
    changeThemeButton.parentElement.classList.toggle('dark');
})