//operatory inkrementacji/dekrementacji

let zmienna = 10;

console.log(zmienna); //10
console.log(++zmienna); //11
console.log(zmienna++); //11
console.log(zmienna); //12


//operatory przypidania 

zmienna += 10;
//zmienna = zmienna + 10

console.log(zmienna);

if (2 == '2'); {

    console.log("2 == '2'");

}



if (2 === '2'); {

    console.log("2 === '2'");

}

//operatory logiczne


if (2 == '2' && 3 == '3') {
    console.log('iloczyn logiczny')
}

if (!(2 === '2' && 3 == '3')) {
    console.log('negacja iloczynu logicznego')
}

if (!(2 === '2' && 3 == '3')) {
    console.log('iloczyn logiczny')
}

let number = 100;
let wynik = (number < 0) ? -1 : 1;
console.log(wynik);

if (1 > 10) {
    console.log('1 < 10');
} else if (1 == 10) {
    console.log('1 == 10');
} else {
    console.log('1 < 10');
}


let kolor = 'czerwony';

switch (kolor) {
    case 'zielony':
        console.log('podałeś kolor zielony');
        break;

    case 'niebieski':
        console.log('podałeś kolor niebieski');
        break;

    case 'zolty':
        console.log('podałeś kolor zolty');
        break;

    default:

        console.log('nie podałeś koloru');

}



let tablica = [10, 100, 35, 94, 105];

for (let i = 0; i < tablica.length; i++) {
    console.log(tablica[i]);
}

for (let i = tablica.length - 1; i >= 0; i--) {
    console.log(tablica[i]);
}


tablica.forEach(function (element, index) {
    console.log('Index tablica: ' + index + ' ,element  tablicy: ' + element);
})

let samochód = {
    marka: 'audi',
    kolor: 'bialy',
    pojemnosc: '5.2',
    rocznik: 2012
}

for (let key in samochód) {
    console.log(samochód[key]);
}

//petla  nieskończona

//while

//let liczba = 0;
//
//while (liczba <= 10) {
//    console.log(liczba++);
//}

//do while

let = number = 0;

do {
    console.log(number++)
} while (number > 2)


let numbers = 0;

while (true) {
    console.log(numbers++);

    if (numbers == 10) {
        break;
    }
}

//???
//for (let i = 1; 1 <= 20; i++) {
//    if (i % 2 != 0) {
//        console.log(i + '');
//        continue;
//    }
//}
