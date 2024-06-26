// const nums = [1, 2, 3, 4, 5];

// nums.push(6); // добавляет переданное значение в конец массива
// nums.pop(); // удаляет последний элемент массива
// nums.unshift(0); // добавляет переданное значение в начало массива
// nums.shift(); // удаляет первый элемент массива

// //console.log(nums);

// const array = [-10, 'hello', 78, null, 68, 'good morning!', 'hi', true, -56];

// for (let i = 0; i < array.length; i++) {
//     console.log(`Элемент "${array[i]}" - ${typeof array[i]}`);
// }

// 2. Создать новый массив только с числами из массива array. Вывести масиив в консоль
// [-10, 78, 68, -56]



// for (let i = 0; i < array.length; i++) {
//     typeof array[i] == 'number' ? newArray[i] = 'number' : newArray.push(array[i])
// }
// let newArray = [];
// for (let i = 0; i < array.length; i++) {
//     if (array[i]<0) {
//         newArray.unshift(array[i])
//     }
// }

// console.log(newArray);


const names = ['Oleg', 'Irina', 'Anton', 'Boris', 'Olga', 'Igor', 'Pavel', 'olena'];



// for (let i = 0; i < names.length; i++) {
//     if (names[i][0] === 'O' || names[i][0] === 'o') {
//         newArrayNames.push(names[i]);
//     }
// }

// let newArrayNames = [];

// // for (let i = 0; i < names.length; i++) {
// //     if (names[i].toUpperCase.startsWith('O')) {
// //         newArrayNames.push(names[i]);
// //     }
// // }



// console.log(newArrayNames);

let namesContainsI = [];

for (let i = 0; i < names.length; i++) {

    if (names[i].toLowerCase().includes('i')) {
        namesContainsI.push(names[i])
    }
}

// console.log(namesContainsI);

let namesBetween2and4 = [];

for (let i = 0; i < names.length; i++) {
    if (names[i].length >= 2 && names[i].length <= 4) {
        namesBetween2and4.push(names[i]);
    }
}

console.log(namesBetween2and4)

// ДЗ

// 1. Перевернуть массив: Дано: массив чисел. Необходимо перевернуть его порядок с помощью методов массива.
// 2. Добавить элемент в начало массива: Дано: массив и элемент. Добавьте элемент в начало массива с помощью метода массива.
// 3. Преобразовать все строки в верхний регистр: Дано: массив строк. Преобразуйте все строки в массиве в верхний регистр.
// 4. Создать массив, содержащий длины строк: Дано: массив строк. Создайте новый массив, содержащий длины этих строк.
// 5. Преобразовать первый символ всех строк в верхний регистр: Дано: массив строк. Преобразуйте первый символ каждой строки в верхний регистр.


// *6. Объединить два массива: Дано: два массива. Объедините их в один массив.
// *7. Создать массив, содержащий только уникальные элементы: Дано: массив. Создайте новый массив, содержащий только уникальные элементы из исходного массива.