const countWords = str => str.split(' ').length;


// console.log(countWords('Какой сегодня прекрасный день'));
// console.log(countWords('Какой день'));
// console.log(countWords('А какой день'));

// --------------------------
// Домашнее задание

// Напишите функцию getArraySum(array), которая в качестве аргумента
// получить многомерный массив и вернет сумму всех элементов

// getArraySum([
//     [1,2,3],
//     [4,5,6],
//     [7,8,9],
// ]) => 6 + 15 + 24 => 45

// getArraySum([
//     [1],
//     [2],
//     [3],
// ]) =>  6

// getArraySum([
//     [1,2],
//     [5],
// ]) =>  8

const getArraySum = twoDimArr => {
    const oneDimArr = twoDimArr.flat();
    let sum = 0;
    for (let elem of oneDimArr){
        sum += elem;
    }
    return sum;
}

console.log(getArraySum([
    [1,2,3],
    [4,5,6],
    [7,8,9],
]));
