// 12. Напишите функцию, которая принимает массив с разными типами данных и возвращает массив со строками, у которых первая первая буква в верхнем регистре
// ['hello', 1, true, 98, false, 'good morning', 'hi'] => ['Hello','Good morning', 'Hi']

const bobaTee = arr => arr.filter(el => typeof(el) == 'string').map(el => el.charAt(0).toUpperCase() + el.slice(1));

console.log(bobaTee(['hello', 1, true, 98, false, 'good morning', 'hi']));