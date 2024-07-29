const product = {
    id: 1,
    title: 'Apple',
    price: 250,
    count: 5,
    in_stock: true,
    origin_countries: ['Germany', 'Spain', 'Poland', 'France'],
    description: {
        size: 10,
        weight: 0.5,
        color: 'red',
        type: 'golden'
    }
}


// 2. Создать массив e_origin_countries из стран продукта, содержащих букву e. Вывести в консоль

const e_origin_countries = product.origin_countries.filter(el => el.toLowerCase().includes('e'));

// console.log(e_origin_countries);

// 3. Создать переменную product_description и записать в нее данные из product в формате: 'Type: <Type>, weight: <weight> kg, size: <size> sm, color: <color>'.Вывести результат в консоль

const product_description = `Type: ${product.description.type[0].toUpperCase() + product.description.type.slice(1)}, weight: ${product.description.weight} kg, size: ${product.description.size}sm, color: ${product.description.color}`;

//console.log(product_description);

// const {title, in_stock} = product
// const product_in_stock = `An ${title} is ${in_stock ? 'avalible' : 'not avalible'}`
// console.log(product_in_stock);


//const product_in_stock = `An ${title} is ${product.in_stock === true ? 'avalible' : 'not avalible'}`
//console.log(product_in_stock);

const users = [
    {
        id: 1,
        firstname: 'Oleg',
        lastname: 'Petrov',
        age: 30,
        address: {
            city: 'Berlin',
            country: 'Germany'
        }
    },
    {
        id: 2,
        firstname: 'Inna',
        lastname: 'Ivanova',
        age: 13,
        address: {
            city: 'Bremen',
            country: 'Germany'
        }
    },
    {
        id: 3,
        firstname: 'Petr',
        lastname: 'Sidorov',
        age: 19,
        address: {
            city: 'Madrid',
            country: 'Spain'
        }
    },
    {
        id: 4,
        firstname: 'Anna',
        lastname: 'Ushanova',
        age: 45,
        address: {
            city: 'Paris',
            country: 'France'
        }
    }
]


// 2. Сформировать новый массив users_address с адресами пользователей в формате '<City> (<Country>)'
// ['Berlin (Germany)', 'Bremen (Germany)', 'Madrid (Spain)', 'Paris (France)' ]

const users_address = users.map(({ address: { city, country } }) => `${city} (${country})`);

// 3. Сформировать новый массив adult_users с совершеннолетними пользователями
// [{}, {}, {}]

const adult_users_address = users.filter(({ age }) => age >= 18).map(({address: {city , country}}) => `${city} (${country})`);
//console.log(adult_users_address);

// 5.  Сформировать новый массив users_info с информацией о юзерах в следующем формате: '<firstname> <lastname> (age: <age>, country: <country>)'


const users_info = users.map(({firstname, lastname, age, address: {country}}) => `${firstname} ${lastname} (age: ${age}, country: ${country})`)

const tale = {
    title: "Репка",
    characters: [
        { name: "Дед", role: "тот, кто сажал репку" },
        { name: "Бабка", role: "тот, кто держался за деда" },
        { name: "Внучка", role: "тот, кто держался за бабку" },
        { name: "Жучка", role: "тот, кто держался за внучку" },
        { name: "Кошка", role: "тот, кто держался за Жучку" },
        { name: "Мышка", role: "тот, кто держался за кошку" }
    ],
    plot: {
        introduction: "Однажды дед посадил в огороде репку.",
        climax: "Репка выросла очень большой, и дед решил её вытянуть.",
        attempts: [
            "Дед тянул-тянул, но не смог вытянуть.",
            "Тогда за деда держалась бабка, за бабку — внучка, за внучку — Жучка, за Жучку — кошка, за кошку — мышка."
        ],
        resolution: "Все вместе они смогли вытянуть репку из земли."
    }
};

console.log(tale);
