function wypiszDoKonsoli() {
    console.log("1234");
}

//wywołanie funkcji nazwa z () nawet jak nie ma przypisanych parametrów 
wypiszDoKonsoli();

function wypiszDoKonsoli2() {
    console.log("1234");
}

wypiszDoKonsoli2();

//wyrażenie funkcyjne
const wypiszDoKonsoli3 = function () {
    console.log('1234')
}

wypiszDoKonsoli3();

//funkcje parametrowe

function dodawanie(parametr1, parametr2) {
    return parametr1 + parametr2;
}

//zwaracanie wartości -return, pozwala 

//jeżeli chcemy zobaczyć wartość zwróconą to albo cała funkcje opinamy w console.log() albo console.log() umieszczamy zaraz przed return we wnętrzu funkcji

console.log(dodawanie(2, 3));

console.log(dodawanie('2', '3'));

const dodawanie2 = (parametr1, parametr2) => {
    console.log(parametr1 + parametr2);
    return parametr1 + parametr2;

}

console.log(dodawanie2(1, 2));

console.log(dodawanie2('2', '3'));
