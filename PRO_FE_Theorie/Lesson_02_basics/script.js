console.log('=============');
let numbers = [];

// Заполнение массива случайными числами от -100 до 100
for (let i = 0; i < 10; i++) {
    numbers[i] = Math.round(Math.random() * 200) - 100;
}

console.log(`Весь массив: ${numbers}`);

// 4. Вывести в консоль только числа заканчивающиеся на 5 из массива numbers
// for (let i = 0; i < numbers.length; i++) {

//     if (Math.abs(numbers[i]) % 10 == 5) {
//         console.log(`Число ${numbers[i]} заканчивается на '5'`);
//     }
// }

// Вывести в консоль все элементы из массива numbers возведенными во 2 степень
let power = [];

for (let i = 0; i < numbers.length; i++) {
    power.push(Math.pow(numbers[i], 2));
}

console.log(power);

// let num2 = Math.random()*100
// console.log(num2);

// let num2_floor = Math.floor(num2);
// console.log(`Округление floor `);
// console.log(num2_floor);

// let num2_ceil = Math.ceil(num2);
// console.log(`Округление ceil `);
// console.log(num2_ceil);

// let num2_round = Math.round(num2);
// console.log(`Округление round `);
// console.log(num2_round);

// console.log(`Максимальное число массива: ${Math.max(...numbers)}`);

// console.log('=============');

// let rand = 20 - Math.floor(Math.random() * 10)
// console.log(rand);



