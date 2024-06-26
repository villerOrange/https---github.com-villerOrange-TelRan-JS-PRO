// ------------------------------
// Задача на массивы

// Необходимо посчитать количество элементов, значение которых является строковым
// let data = [123, null,'false', true, 'string', 0, 'value']

// let sumString = 0; //переменная "аккумулятор", т.е. она аккумулирует значение в процессе работы программы

// for (let i = 0; i < data.length; i++) {
//     if (typeof data[i] == 'string') {
//         sumString++;
//     }

// }

// console.log(`Количество значений массива со строковым типом данных равно ${sumString}. Всего в массиве ${data.length} элементов`);

//второй вариант решения
// -------------------
// решение 2

// let newArray = []

// for (let i = 0; i < data.length; i++){
//     if (typeof data[i] === 'string'){
//         newArray.push(data[i])
//     }
// }
// console.log(newArray.length)

// ----------------
// решение 3

// let count = data.filter(elem => typeof elem === 'string').length
// console.log(count)


// ------------------------------
// Задача 2
let numbers = [10, 20, 30, 30, 40, 100]

// Создайте переменную, которая будет содержать среднее значение массива numbers
let mid = 0;

for (let i = 0; i < numbers.length; i++) {
    mid += numbers[i];
}
mid /= numbers.length

console.log(mid)

