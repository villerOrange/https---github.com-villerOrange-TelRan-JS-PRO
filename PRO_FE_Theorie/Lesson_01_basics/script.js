
let weather = 13

if(weather > 20) {
    console. log('Тепло, смело иди гулять')
    } else if (weather >10) {
    console. log('Прохладно, накиль куртку')
    } else {
    console. log('Оденься потеплее')
    }

// --------------------------------------
function access() {
    let age = 18;
    // age >= 18 ? console.log('взрослый') : console.log('несовершеннолетний');
    console.log(age >= 18 ? 'взрослый' : 'несовершеннолетний');
}
access()
// --------------------------------------

let str = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry';

function ifL(str) {
    
    console.log(str[0].toLowerCase() == 'l' ? 'L string' : 'not L string');
}
ifL(str)

