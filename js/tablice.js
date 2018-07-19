//tablice

let zmienna = ['Sławek', 'Ania', 'Kasia'];
//wyciaganie elementu tablicy poprzez podanie numeru indeksu w nawiasach kwadratowych
console.log(zmienna[1]);

//dodanie wartości do tablicy
zmienna[3] = 'Marcin';
console.log(zmienna[3]);

//dodawanie wartości na koniec tabicy
zmienna.push('Michał');
console.log(zmienna);

//dodawanie wartości na początek tablicy
zmienna.unshift('Monika');
console.log(zmienna);

//usówanie Elementu z końca tablicy

zmienna.pop();
console.log(zmienna);

//usuwanie z początku tablicy

zmienna.shift();
console.log(zmienna);

//sprawdzenie długości tablicy - .length


//join() zwraca wszystkie elementy tablicy wypisuje jako tekst, w nawiasach opsionalnie możemy dodać separator, domyślnie ','

console.log(zmienna.join(' '));

//reverse() odwraca tablicde niezależnie gdzie został wykonanany

console.log(zmienna.reverse());
console.log(zmienna);

//sort() sortuje tablicę niezależnie gdzie został wykonany

console.log(zmienna.sort());
console.log(zmienna);
