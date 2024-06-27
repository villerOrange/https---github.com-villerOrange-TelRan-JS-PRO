// 1. Дана строка. Создать новую переменную и положить туда строку наоборот

function task01(){
    let str = 'balalaika';
    str = str.split('').reverse().join('');
    console.log(str);
}

//task01()

// 2. Дана строка. ССоздать новую переменную и положить туда строку с порядком слов наоборот
function task2(str) {
    let str2 = str.split(' ').reverse().join(' ');
    console.log(str2);
}

task2('React построен на JavaScript, но в нем также широко используется JSX');



// Дан массив со строками. Создать новый массив, в который попадут все строки из массива names с первой буквой в верхнем регистре
// ['Olga', 'Ivan', 'Irina', 'Sergey']

const names = ['olga', 'ivan', 'irina', 'sergey'];

let realNames = [];
for(let elem of names){
    realNames.push(elem[0].toUpperCase)
}