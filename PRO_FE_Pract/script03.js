let lorem = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ultrices, enim ac accumsan aliquam, leo odio ultricies urna, id hendrerit ex lacus in dui. Quisque a libero rhoncus, pretium mi ut, mollis arcu. Nunc sit amet consequat dolor. Nunc quis nisi tincidunt, egestas est ut, lacinia nisi. Aenean auctor libero lectus, vel facilisis magna gravida id. Praesent consectetur risus sed est gravida convallis. Duis condimentum suscipit est id interdum. Proin mattis tempor tincidunt. Morbi eu magna eget lorem mollis semper gravida vitae mi. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed venenatis dapibus leo et hendrerit. Aenean semper leo quis faucibus vestibulum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed in mollis mauris, eget iaculis eros. Duis quis lobortis lorem. Vestibulum feugiat ante sollicitudin, consequat nibh ac, mattis augue.\nNullam id massa luctus odio egestas rhoncus vitae eget lacus. Sed at nulla vel lacus venenatis feugiat. Praesent sodales vehicula nisl, at commodo enim ullamcorper vel. Mauris facilisis ornare dictum. Nunc lacinia, metus et tincidunt auctor, magna nibh vehicula nibh, eget iaculis lectus arcu auctor est. Nunc molestie orci elementum congue gravida. Duis varius eros et urna finibus iaculis. Duis sed feugiat tellus. Aliquam id ipsum tempor, fringilla mauris quis, vestibulum nisl. Quisque dolor felis, scelerisque varius neque et, accumsan mattis purus. In blandit vel risus eu blandit.\nNunc malesuada mattis mi, et interdum lectus euismod sollicitudin. Morbi vitae purus at ipsum venenatis porttitor vel a arcu. Ut egestas nec justo sit amet tincidunt. Nunc iaculis neque nec est consequat, in posuere felis suscipit. Sed cursus turpis vitae semper varius. In hac habitasse platea dictumst. Nullam id dolor efficitur, rutrum sapien at, pulvinar diam. Nullam tincidunt massa dui, a ultrices est pharetra sit amet. Sed ut odio arcu.\nPraesent maximus a ligula ac elementum. Nullam sit amet malesuada mi. Duis laoreet nunc nec mollis vehicula. Ut sed elit lacinia, placerat diam id, vulputate risus. In nisi nisi, maximus id risus a, placerat cursus urna. Nulla ullamcorper fringilla egestas. Phasellus condimentum sagittis lorem at venenatis. Sed hendrerit maximus eleifend. Morbi fringilla metus vel orci tincidunt gravida. Ut commodo sit amet mi eu mattis. Vestibulum ac ante ac ipsum scelerisque varius eu tempor enim. Pellentesque auctor hendrerit velit at dapibus. Donec varius tempor ultricies. Donec in malesuada massa. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Mauris volutpat in augue et luctus.\nPraesent sit amet cursus lorem. Morbi faucibus vehicula mi id feugiat. Sed a porta lorem. Aliquam erat volutpat. Aliquam nec elit velit. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec egestas rutrum quam, eget cursus est laoreet id. Vestibulum quam ex, bibendum vitae leo sit amet, cursus rhoncus mauris. Nullam vel sapien imperdiet lacus ultricies dignissim vitae vestibulum nisl. Suspendisse sit amet imperdiet nisi. Donec vulputate laoreet aliquam. Integer pulvinar dignissim lacus accumsan feugiat. Mauris condimentum risus enim, eu rutrum dui feugiat vel. Ut ac lectus ipsum. Integer euismod magna at sagittis rhoncus. Nulla vel lacinia lacus.'

////////////////////////////////////////////////////////

function test() {
    let testStr = 'Илья Болотских';
    let letterToFind = 'л';

    let continueSearch = 0;
    for (let i = 0; i < testStr.length; i++) {
        let searchResult = testStr.indexOf(letterToFind, continueSearch);

    }


    console.log(testStr.indexOf('л', 5));
}

function slice() {
    let string = 'Привет мой друг'

    let find = 'мой';
    let length = find.length;


    let result = string.slice(string.indexOf(find), string.indexOf(find) + length)
    console.log(result);
}

function emails() {
    // ---------------------------------
    let contacts = [
        '84930859059 test@mail.net',
        '85930859013 handle@gmail.ru',
        '849308059 telek@yahoo.net',
        '835659059 test@ebay.com',
        '82087859059 grand@calendar.ru',
        '8193065059 tigran@someemail.com',
    ]

    // Пройдитесь по массиве используя цикл for
    // и выведите в косноль только почту

    // test@mail.net
    // handle@gmail.ru
    // telek@yahoo.net
    // test@ebay.com
    // grand@calendar.ru
    // tigran@someemail.com

    let emails = [];
    for (let i = 0; i < contacts.length; i++) {
        emails.push(contacts[i].slice(contacts[i].indexOf(' ') + 1, contacts[i].length))
    }
    console.log(emails);
}

function twoArrays() {
    let contacts = [
        '84930859059 test@mail.net',
        '85930859013 handle@gmail.ru',
        '849308059 telek@yahoo.net',
        '835659059 test@ebay.com',
        '82087859059 grand@calendar.ru',
        '8193065059 tigran@someemail.com',
    ]

    // Создайте два массива: emails и phones
    // Поместите в каждый массив только номер и почту соответственно
    // Выведите два массива в консоль

    let emails = [];
    let phones = [];

    for (let elem of contacts) {
        let indexOfSpace = elem.indexOf(' ');
        phones.push(elem.slice(0, indexOfSpace));
        emails.push(elem.slice(indexOfSpace + 1, elem.length));
    }
    console.log(phones);
    console.log(emails);
}

function searchQuantity() {
    let toFind = 'lorem'
    let continueSearchPoint = 0;
    let result = [];
    let tempString = lorem.toLowerCase();

    result = tempString.split(toFind)-1;

    console.log(`Искомое значение "${toFind}" встречается в тексте ${result.length} раз`);
}



///////////////// СПИСОК ЗАДАЧ ДЛЯ ЗАПУСКА ////////////////////////

//test();//Песочница
//slice();//Задача 1. из строки "Привет, мой друг" получить подстроку "мой"
//emails()//Задача 2. Из списка контактов получить подстроку только с адресом электронной почты
searchQuantity();
//twoArrays()