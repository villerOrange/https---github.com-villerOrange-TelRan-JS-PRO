// ------------------------------
// Task 7
let names = [
    { first_name: 'Steven', last_name: 'King' },
    { first_name: 'Alex', last_name: 'Willyam' },
    { first_name: 'John', last_name: 'Grec' },
    { first_name: 'Neena', last_name: 'Palman' },
]
// Сформируйте новый массив, который будет хранить строкове значение по указанному формату:
// ['S.K', 'A.W', 'J.G', 'N.P']

// const getFormatedNames = arr => arr.map(el => `id: ${id++}, full_name: ${el.first_name} ${el.last_name}`)


// Task 4.2
// Преобразуйте этот же массив в следующий указанной по примеру:
// [
//     {id: 1, full_name: 'Steven Kink'},
//     {id: 2, full_name: 'Alex Willyam'},
//     {id: 3, full_name: 'John Grec'},
//     {id: 4, full_name: 'Neena Palman'},
// ]

let formatted_names = [];


// const getFormatedNames = arr => {
//     arr.forEach(el => {
//         formatted_names.push({ id: id++, full_name: `${el.first_name} ${el.last_name}` });
//     });
//     return formatted_names;
// };
let id = 1;
const getFormatedNames = arr => arr.map(el => {
    id: id++,
        full_name: `${el.first_name} ${el.last_name}`
}
)

console.log(getFormatedNames(names));