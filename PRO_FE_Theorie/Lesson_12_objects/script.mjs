import users from "./users.mjs";

// 1. Создать массив с именами юзеров. Вывести в консоль
// ["Leanne Graham", "Ervin Howell", ... ]

const usersNames = users.map(el => el.name);

//console.log(usersNames);

// 2. Создать массив с пользователями, чьи имена содержат букву A/a.  Вывести в консоль
// [{}, {}, {}...]

const namesAa = users.filter(el => el.name.toLowerCase().includes('a'))

//console.log(namesAa);

// 3. Сформировать новый массив с инфо о пользователях в формате: <ИМЯ>: <EMAIL>
// ['Leanne Graham: Sincere@april.biz', 'Ervin Howell: Shanna@melissa.tv', ...]

const shortInfo = arr => arr.map(el => `${el.name}: ${el.email}` )
//console.log(shortInfo(users));

// 4. Сформировать новый массив с адресами пользователей в формате: <SUITE>, <STREET>, <ZIOCODE> <CITY>
// ['', '', ''...]

const task4 = users.map(({ address }) => `${address.suite}, ${address.street}, ${address.zipcode}, ${address.city}`);
//console.log(task4);

// 5. Создать массив с именами пользователей, чей номер телефона начинается с 1
// ['Leanne Graham', 'Clementine Bauch', ...]
const task5 = arr => arr.filter(el => el.phone[0] === '1').map(el => el.name)
//console.log(task5(users));

// 6. Создать копию массива users. Использовать минимум 2 способа
// users_copy1
// users_copy2
// users_copy3
const users_copy1 = [...users];
const users_copy2 = users.slice();
const users_copy3 = users.map(el => el);

// 7. Создать массив с именами пользователей, отсортированными в алфавитном порядке
// ['', '', ''...]

const task7sort = arr => arr
    .map(el => el.name)
    .sort((a,b) => a.localeCompare(b))
//console.log(task7sort(users));

// 8. Создать массив с пользователей, отсортированными в алфавитном порядке по username
// [{}, {}, {}...]

const task8sort = arr => [...arr]
    .sort((a,b) => a.username.localeCompare(b.username))
    
//console.log(task8sort(users));

// 10. Создать массив с name, username, phone пользователей, отсортированными в алфавитном порядке по name
// [{name: '', phone: '', username: ''}, {name: '', phone: '', username: ''}, {name: '', phone: '', username: ''}...]
