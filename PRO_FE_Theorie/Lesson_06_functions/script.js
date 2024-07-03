//Каталоги имен
const firstNames = ['Елена', 'Анна', 'Мария', 'Ирина', 'Ольга', 'Татьяна', 'Наталья', 'Вера', 'Людмила', 'Екатерина', 'Светлана', 'Александра', 'Марина', 'Виктория', 'Юлия'];
const lastNames = ['Иванова', 'Петрова', 'Сидорова', 'Кузнецова', 'Смирнова', 'Воробьёва', 'Соколова', 'Попова', 'Лебедева', 'Козлова', 'Новикова', 'Морозова', 'Петухова', 'Волкова', 'Соловьёва'];

//генератор случайного числа от 0 до 14
const rand_from_0_to_14 = () => {
    let n = Math.floor(Math.random() * 15);
    return n;
}

//генератор возраста от 10 до 90
const rand_from_10_to_90 = () => {
    let n = Math.floor(Math.random() * 81) + 10;
    return n;
}

//генератор объекта с случайной комбинацией имени и фамилии и возраста
const newObj = () => {
    const obj = {
        firstName: firstNames[rand_from_0_to_14()],
        lastName: lastNames[rand_from_0_to_14()],
        age: rand_from_10_to_90()
    }
    return obj;
}
console.log(newObj());

const numberOfElems = prompt('Введите желаемое число элементов массива')

console.log(`Будет создан массив с количеством элементов = ${numberOfElems}`);

//Заполняю массив случайными элементами
const fillTheArray = a => {
    let array = [];
    for (let i = 0; i < a; i++) {
        array.push(newObj())
    }
    return array
}

const randomArray = fillTheArray(numberOfElems);

console.log('Создан массив:');
console.log(randomArray);

const filterBottom = prompt('Фильтрация с возраста..')

//Функция, которая отфильтровывает людей, возраст которых меньше того, которое ввел пользователь
const olderThanN = (array, n) => {
    let newArray = [];
    for (let elem of array) {
        if (elem.age > n) {
            newArray.push(elem)

        }
    }
    return newArray;
}

console.log(`Вот люди, возраст которых больше ${filterBottom}: `);
console.log(olderThanN(randomArray, filterBottom));