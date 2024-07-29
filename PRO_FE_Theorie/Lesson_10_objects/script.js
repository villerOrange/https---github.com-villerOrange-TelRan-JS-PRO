const lengthEqual = (arr, num) => arr.filter(el => el.length === num);
//console.log(lengthEqual(['aa','bbb','cc'],2));



// 2. Написать функцию, которая принимает массив с разными типами данных и значение типа данных и возвращает новый массив с элементами, соответствующими переданному типу данных
const getType = (arr, type) => arr.filter(el => typeof (el) === type);
//console.log(getType([1,2,'ffff'], 'number'));

// 3. Написать функцию, которая принимает массив с числами и вовзращает новый массив с положительными четными числами из входящего массива, увеличенными в два раза и отсортированными в порядке убывания
// [-1, 2, 98, -10, 1] => [188, 4, 2]

const getUbaDuba = arr => arr.filter(el => el > 0).map(el => el * 2).sort((a, b) => b - a)
//console.log(getUbaDuba([-1, 2, 98, -10, 1]));

const getBoobaDooba = arr => arr.filter(el => el.includes('o') || el.includes('O')).sort((a, b) => a.localeCompare(b));

//console.log(getBoobaDooba(['dog', 'cat', 'Bob']));

const strings = [
    "a",
    "apple",
    "banana",
    "cherry",
    "do",
    "elephant",
    "fig",
    "grape",
    "hippopotamus",
    "igloo",
    "jackfruit",
    "kiwi",
    "lemon",
    "mango",
    "nectarine",
    "orange",
    "papaya",
    "quince",
    "raspberry",
    "strawberry",
    "tomato",
    "umbrella",
    "violet",
    "watermelon",
    "xylophone",
    "yogurt",
    "zebra"
];


const getFilteredLength = (arr, bottom, top) => arr.filter(el => el.length >= bottom && el.length <= top)

//console.log(getFilteredLength(strings, 3,6));

// 6. Написать функцию, принимающую массив строк и число. Функция возвращает новый массив, в котором все строки с длиной равной второму аргументу начинаются с большой буквы
// ['anna', 'ivan', 'anatoliy', 'sergey', 'boris', 'ekaterina'], 4 => ['Anna', 'Ivan', 'anatoliy', 'sergey', 'boris', 'ekaterina']
// ['anna', 'ivan', 'anatoliy', 'sergey', 'boris', 'ekaterina'], 5 => ['anna', 'ivan', 'anatoliy', 'sergey', 'Boris', 'ekaterina']

const task6 = (arr, length) => arr.map(el => el.length === length ? el.charAt(0).toUpperCase() + el.slice(1) : el);
//console.log(task6(strings, 5));


// ОБЪЕКТЫ

// 2. Сформировать массив из языков, которыми владеет пользователь, содержащих букву e/E. Все строки в новом массиве должныть быть в нижнем регистре. Записать в переменную результат и вывести ее значение в консоль

const user = {
    id: 1,
    firstname: 'Anton',
    lastname: 'Petrov',
    age: 30,
    languages: ['English', 'Russian'],
    online: false,
    address: {
        country: 'Germany',
        city: 'Berlin'
    }
}

const bobaTee = obj => obj.languages.filter(el => el.includes('E') || el.includes('e')).map(el => el.toLowerCase());

let a = bobaTee(user)
//console.log(a);

// 3. Создать переменную user_fullname с именем и фамилией пользователя. Вывести результат в консоль
// 'Anton Petrov'

// 6. Создать переменную user_status. Если пользователь в сети, то записать в переменную сообщение 'The user is online', а если не в сети - 'The user is offline'. Вывести результат в консоль

let user_status = user.online ? 'The user is online' : 'The user is offline';
console.log(user_status);