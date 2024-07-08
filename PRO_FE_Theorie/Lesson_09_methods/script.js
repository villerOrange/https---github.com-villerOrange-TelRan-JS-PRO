const people = [
    { name: "Алексей", age: 25, profession: "инженер" },
    { name: "Марина", age: 32, profession: "дизайнер" },
    { name: "Игорь", age: 29, profession: "разработчик" },
    { name: "Ольга", age: 22, profession: "маркетолог" },
    { name: "Дмитрий", age: 35, profession: "аналитик" },
    { name: "Юлия", age: 28, profession: "юрист" },
    { name: "Михаил", age: 41, profession: "архитектор" },
    { name: "Елена", age: 19, profession: "студентка" },
    { name: "Анатолий", age: 34, profession: "учитель" },
    { name: "Виктория", age: 26, profession: "врач" }
];
const numbers = [34, 7, -23, 9, 57, -12, 98, -3, 65, 21];
const names = ['anna', 'Ivan', 'Anatoly']

// const olderThan = (arr, n) => arr.filter(el => el.age >= n);
// const findProfession = (arr, profession) => arr.find(el => el.profession == profession)



// console.log(olderThan(people, 30));
// console.log(findProfession(people, 'юрист'));

// const sortByAge = (arr, field) => [...arr].sort((a, b) => a.field - b.field)
// console.log(sortByAge(people, 'age'));

// ПРАКТИКА

// 1. Написать функцию, которая принимает массив со строками и возвращает все элементы, начинающиейся с буквы a/A
// ['anna', 'Ivan', 'Anatoliy'] => ['anna', 'Anatoliy']

// const aaaaAAAA = arr => arr.filter(el => el[0].toLowerCase() === 'a');
// console.log(aaaaAAAA(names));

// const posToTheTop = arr => arr.filter(el => el > 0).sort((a, b) => a - b);
// console.log(posToTheTop(numbers));

// 4. Напишите функцию findStringStartingWith, которая принимает массив строк и букву, и возвращает первую строку, которая начинается с этой буквы

// const findStringStartingWith = (arr, char) => arr.find(el => el[0] == char);
// console.log(findStringStartingWith(names, 'I'));

// 5. Напишите функцию doubleAndFilterEvens, которая принимает массив чисел, удваивает каждый элемент и возвращает новый массив, содержащий только удвоенные четные числа.
// [1, 2, 3, 4, 5] => [4, 8]

// const doubleAndFilterEvens = arr => arr.filter(el => el % 2 == 0).map(el => el*2);
// console.log(doubleAndFilterEvens([1, 2, 3, 4, 5]));

// 6. Напишите функцию filterAndSortByLength, которая принимает массив строк, фильтрует строки, содержащие букву 'a', и возвращает новый массив, отсортированный по длине строк.
// ['hi', 'hello', 'good day!', 'dog', 'good afternoon', 'cat'] => ['cat', 'good day!', 'good afternoon']
// .includes()

// const filterAndSortByLength = arr => arr.filter(el => el.includes('a')).sort((a, b) => a.length - b.length)
// console.log(filterAndSortByLength(['hi', 'hello', 'good day!', 'dog', 'good afternoon', 'cat']));

// 7. Напишите функцию filterTransformNumbers, которая принимает массив чисел, фильтрует числа больше 5, удваивает их и возвращает новый массив, отсортированный по возрастанию.

// const filterTransformNumbers = arr => arr.filter(el => el > 5).map(el => el * 2).sort((a, b) => a - b)
// console.log(filterTransformNumbers([3, 1, 23, 5, 13, 2, 2]));

// 8. Напишите функцию sortTransformAndFilterStrings, которая принимает массив строк, сортирует их по длине, преобразует каждую строку в верхний регистр и возвращает новый массив, содержащий строки, в которых есть буква 'A'.
// ["apple", "banana", "cherry", "date"] => ["DATE", "APPLE", "BANANA"]

const sortTransformAndFilterStrings = arr => arr.filter(el => el.includes('a')).sort((a, b) => a.length - b.length).map(el => el.toUpperCase())

console.log(sortTransformAndFilterStrings(["apple", "banana", "cherry", "date"]));