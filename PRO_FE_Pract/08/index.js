let products = require('./products.js')

//console.log(products)
// Task 1 
// Отфильтруйте массив таким образом, чтобы там оказались 
// товары с рейтингом больше 4
const filterRating = (arr, n) => arr.filter(({ rating: { rate } }) => rate > n)
//console.log(filterRating(products, 4));

const filterLength = (arr, len) => arr.find(el => el.description.length > len)
//console.log(filterLength(products, 50));

// Task 3
// Отфильтруйте массив таким образом, чтобы в нем оказались продукты
// стоимость которых больше среднего значения. 
// Выведите длину массива

const task3 = arr => {
    let avgProductPrice = arr.reduce((acc, el) => acc + el.price, 0) / arr.length;
    console.log(avgProductPrice);
    const newArr = arr.filter(el => el.price > avgProductPrice)
    return newArr.length;
}

console.log(task3(products));