

// https://exploringjs.com/es6/index.html


document.writeln('Hello, world!');

const a = 100;
const b = '100';

console.log(a == b);
console.log(a === b);

document.writeln("a == b -> " + (a == b));
document.writeln("a === b -> " + (a === b));

var testVar;
console.log(testVar); //shows undefined
console.log(typeof testVar); //shows undefined

var testVar = null;
console.log(testVar); //shows null
console.log(typeof testVar); //shows object

console.log(null === undefined) // false (not the same type)
console.log(null == undefined) // true (but the "same value")
console.log(null === null) // true (both type and value are the same)


let x = Number.NaN;
console.log(x)


function milliseconds(x) {
    if (isNaN(x)) {
        return 'Not a Number!';
    }
    return x * 1000;
}

// console.log(milliseconds('100F'));
console.log(milliseconds('XXX'));
// Expected output: "Not a Number!"

console.log(milliseconds('0.0314E+2'));
// Expected output: 3140

console.log('----> ' + parseFloat('geoff'));
console.log('----> ' + parseFloat('0.2'));

var empty_object = {};
var stooge = {
    "first-name": "Jerome",
    "last-name": "Howard"
};

stooge["first-name"] // "Joe"

var flight = {
    airline: "Oceanic",
    number: 815,
    departure: {
        IATA: "SYD",
        time: "2004-09-22 14:55",
        city: "Sydney"
    },
    arrival: {
        IATA: "LAX",
        time: "2004-09-23 10:42",
        city: "Los Angeles"
    }
};

flight.departure.IATA // "SYD"

stooge["middle-name"] // undefined
flight.status // undefined
stooge["FIRST-NAME"] // undefined

var middle = stooge["middle-name"] || "(none)";
var status = flight.status || "unknown";


flight.equipment // undefined
// flight.equipment.model // throw "TypeError"
flight.equipment && flight.equipment.model // undefined


stooge['first-name'] = 'Jerome';

stooge['middle-name'] = 'Lester';
stooge.nickname = 'Curly';
flight.equipment = {
    model: 'Boeing 777'
};
flight.status = 'overdue';


var xx = stooge;
xx.nickname = 'Curly';
var nick = stooge.nickname;
// nick is 'Curly' because xx and stooge are references to the same object

console.log(stooge);
console.log(xx);

// var a = {}, b = {}, c = {};
// a, b, and c each refer to a different empty object

// a = b = c = {};
// a, b, and c all refer to the same empty object

// ----------------------------------------------------------------


if (typeof Object.create !== 'function') {
    Object.create = function (o) {
        var F = function () {};
        F.prototype = o;
        return new F();
    };
}
var another_stooge = Object.create(stooge);

// creating object in JavaScript
let animal = {
    name: "elephant",
    age: 15000,
    energy: 15,
}

animal.eat = function (quantity){
    console.log(`${this.name} is eating.`);
    animal.energy+= quantity;
}

animal.getAge = function () {
    return animal.age;
}

animal.eat();


function Animal(name, age) {
    let animal = {
        name: name,
        age: age
    }

    animal.eat = function (energy){
        this.age += energy;
        console.log(`${animal.name} is ${animal.age}`);
    }
    
    return animal;
}

let myAnimal = new Animal("Bird", 5);
myAnimal.eat(15);
myAnimal.eat(15);


const animalMethods = {
    eat(amount) {
        console.log(`${this.name} is eating.`)
        this.energy += amount
    },
    sleep(length) {
        console.log(`${this.name} is sleeping.`)
        this.energy += length
    },
    play(length) {
        console.log(`${this.name} is playing.`)
        this.energy -= length
    },
    doIt: function (){
        console.log(`Hello There!`)
    },
    docThat(yes, no){
        console.log(`Hello from the other side...`)
    }
}

function Animal2 (name, energy) {
    let animal = {}
    animal.name = name
    animal.energy = energy
    animal.eat = animalMethods.eat
    animal.sleep = animalMethods.sleep
    animal.play = animalMethods.play
    animal.doIt = animalMethods.doIt;

    return animal
}


let myAnimal2 = new Animal2("Hen", 56);
myAnimal2.doIt();
myAnimal2.play();


const parent = {
    name: 'Stacey',
    age: 35,
    heritage: 'Irish'
}

const child = Object.create(parent)
child.name = 'Ryan'
child.age = 7

console.log(child.name) // Ryan
console.log(child.age) // 7
console.log(child.heritage) // Irish


console.log(parent)
console.log(child) 

function Animal3 (name, energy) {

    let animal = Object.create(animalMethods)
    animal.name = name
    animal.energy = energy

    return animal
}

let myanimal3 = new Animal3("Giraffe", 568)
myanimal3.doIt()
myanimal3.docThat(5,5)
myanimal3.play(22)


console.log(myanimal3)
console.log(myanimal3.prototype)


function Animal5 (name, energy) {

    let animal = Object.create(Animal5.prototype)
    animal.name = name
    animal.energy = energy

    Animal5.prototype.doTheWork = function (xyz){
        console.log(xyz)
    }

    Animal5.prototype.welcome = function (nm){
        console.log(`welcome ya ${this.name} from ${nm}!`)
    }
    
    
    return animal
}

let myanimal5 = new Animal5("Dear", 65)
myanimal5.doTheWork(32);
myanimal5.welcome("monmon");

console.log(myanimal5)


function Animal6 (name, energy) {
    // const this = Object.create(Animal.prototype)

    this.name = name
    this.energy = energy

    // return this
}

let myanimal6 = new Animal6("Dear", 65)
console.log(myanimal6)



function yanasMethod(param){
    let o = param * 2;
    // return o;
}

console.log(yanasMethod(5));
console.log(new yanasMethod(5));

class Animal7 {
    constructor(name, energy) {
        this.name = name
        this.energy = energy
    }
    eat(amount) {
        console.log(`${this.name} is eating.`)
        this.energy += amount
    }
    sleep(length) {
        console.log(`${this.name} is sleeping.`)
        this.energy += length
    }
    play(length) {
        console.log(`${this.name} is playing.`)
        this.energy -= length
    }
}

const leo = new Animal7('Leo', 7)
console.log(leo)


const friends = []

const friendsWithoutSugar = new Array()

console.log(friends)
console.log(friendsWithoutSugar)

console.log(Array.prototype);

function nextToEat (animals) {
    const sortedByLeastEnergy = animals.sort((a,b) => {
        return a.energy - b.energy
    })

    return sortedByLeastEnergy[0].name
}

const prototype = Object.getPrototypeOf(leo)
console.log(prototype)
console.log(leo.constructor) // Logs the constructor function


for(let key in leo) {
    console.log(`Key: ${key}. Value: ${leo[key]}`)
}


for(let key in leo) {
    if (leo.hasOwnProperty(key)) {
        console.log(`--Key: ${key}. Value: ${leo[key]}`)
    }
}

console.log(leo instanceof Animal)
console.log(leo instanceof Animal7)
console.log(Object.getPrototypeOf(leo))
// console.log(leo instanceof User)


function Animalw (name, energy) {
    this.name = name
    this.energy = energy
}

const leow = Animalw('Leo', 7)
console.log(leow)


Object.create = function (objToDelegateTo) {
    
    function Fn(){}
    
    Fn.prototype = objToDelegateTo;
    
    return new Fn();
}

const AnimalM = () => {}

// const leodd = new AnimalM() // Error: Animal is not a constructor
console.log(AnimalM.prototype) // undefined 

typeof flight.number // 'number'
typeof flight.status // 'string'
typeof flight.arrival // 'object'
typeof flight.manifest // 'undefined'
typeof flight.toString // 'function'
typeof flight.constructor // 'function'

console.log(typeof flight.number) // 'number'
console.log(typeof flight.status) // 'string'
console.log(typeof flight.arrival) // 'object'
console.log(typeof flight.manifest) // 'undefined'
console.log(typeof flight.toString) // 'undefined'
console.log(typeof flight.constructor) // 'undefined'