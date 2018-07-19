//definicja obiektu

let person = {
    //    "first name": "Marcin",
    name: "Marcin",
    height: 170,
    print() {
        console.log(this.name + ' ' + this.height);
    }
}
//console.log(person["first name"]);
console.log(person.name);

console.log(person);

person.print();


//klasy

class Person {
    constructor(name, height) {
        this.name = name;
        this.height = height;
    }

    printInfo() {
        console.log(this.name + ' ' + this.height)
    }

}

let marcin = new Person('Marcin', 170);

marcin.printInfo();



let ania = new Person("Ania", 170);
ania.printInfo();


function poleKola(r) {
    return Math.PI * Math.pow(r, 2)
}

console.log(poleKola(5));
