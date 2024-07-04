// // 1. Написать функцию, которая принимает массив с разными типами данных и возвращает сумму чисел из этого массива

// // [1, 'hi', 5, true, false, 2] => 8

// const task1 = array => {
//     let sum = 0;
//     for (let elem of array) {
//         if (typeof elem == 'number') {
//             sum += elem;
//         }
//     }
//     return sum;
// }


// //console.log(task1([1, 'hi', 5, true, false, 2]));

// const task2 = array => {
//     let sumPos = 0;
//     let sumNeg = 0;
//     for (let elem of array) {
//         elem > 0 ? sumPos += elem : sumNeg += elem;
//     }

//     const newArray = [sumPos, sumNeg];
//     return newArray;
// }

// //console.log(task2([1, -3, -5, 2, 4]));

// const changeNumbers = (arr, instruction) => {
//     const result = [];
//     for(let i = 0; i < arr.length; i++){
//       result.push(instruction(arr[i]))
//     }
//     return result
//   }

//   const change1 = changeNumbers([1, 2, 3, 4], el => el * 2); // [2, 4, 6, 8]
//   const change2 = changeNumbers([1, 2, 3, 4], el => el / 2); // [0.5, 1, 1.5, 2]
//   const change3 = changeNumbers([10, 30, 42], el => el + 100); // [110, 130, 142]

//   console.log(change1);
//   console.log(change2);
//   console.log(change3);

// 2. Напишите функцию, которая принимает массив чисел и возвращает новый массив, в котором положительные числа умножены на 2
// [1, 2, -3, -4, 5] => [2, 4, -3, -4, 10]

const pupupu = [1, 2, -3, -4, 5];

const positiveMultiply = arr => arr.map(elem => elem > 0 ? elem * 2 : elem)
console.log(positiveMultiply(pupupu));