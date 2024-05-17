

// https://exploringjs.com/es6/index.html


var HTML5_SKELETON = '\
    <!doctype html>\n\
    <html lang="en">\n\
    <head>\n\
        <meta charset="UTF-8">\n\
        <title></title>\n\
    </head>\n\
    <body>\n\
    </body>\n\
    </html>';

const HTML5_SKELETON2 = `
    <!doctype html>
    <html>
    <head>
        <meta charset="UTF-8">
        <title></title>
    </head>
    <body>
    </body>
    </html>`;

console.log(`${HTML5_SKELETON}`)
console.log(`${HTML5_SKELETON2}`)


function UiComponent() {
    var _this = this; // (A)
    var button = document.getElementById('myButton');
    button.addEventListener('click', function () {
        console.log('CLICK');
        _this.handleClick(); // (B)
    });
}

UiComponent.prototype.handleClick = function () {
    console.log('Do something ... ');
};


function UiComponent2() {
    let button = document.getElementById('myButton');
    this.paragraph = document.getElementById('demo');
    button.addEventListener('click', () => {
        console.log('CLICK');
        this.handleClick(); // (A)
    });
}

UiComponent2.prototype.handleClick = function () {
    console.log('Do something ... ');
    this.paragraph.innerHTML = 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'
};

let uiComponent2 = new UiComponent2();


let arr = [1, 2, 3];
let squares = arr.map(x => x * x);
let evens = arr.filter(x => x % 2 === 0);

console.log(`${arr}`)
console.log(`${squares}`)
console.log(`${evens}`)


var matchObj = /^(\d\d\d\d)-(\d\d)-(\d\d)$/
    .exec('2999-12-31');
var year = matchObj[1];
var month = matchObj[2];
var day = matchObj[3];
console.log(`${year}`)
console.log(`${month}`)
console.log(`${day}`)


const [, year2, month2, day2] =
    /^(\d\d\d\d)-(\d\d)-(\d\d)$/
        .exec('2999-12-31');
console.log(`${year2}`)
console.log(`${month2}`)
console.log(`${day2}`)


var obj = {foo: 123};

var propDesc = Object.getOwnPropertyDescriptor(obj, 'foo');
var writable = propDesc.writable;
var configurable = propDesc.configurable;

console.log(propDesc); // true true
console.log(writable, configurable); // true true


arr.forEach(function (elem) {
    console.log(elem);
})

arr.forEach(elem => console.log("->" + elem))

for (const elem of arr) {
    console.log(elem);
}

arr.forEach(function (value, i) {
    console.log('%d: %s', i, value);
});

for (const [index, elem] of arr.entries()) {
    console.log(index + '. ' + elem);
}

function foo(x, y) {
    x = x || 0;
    y = y || 0;
}

function foo2(x = 0, y = 0) {
}

selectEntries({start: 0, end: -1});


function selectEntries(options) {
    var start = options.start || 0;
    var end = options.end || -1;
    var step = options.step || 1;

}

function selectEntries2({start = 0, end = -1, step = 1}) {

}


function selectEntries3(options) {
    options = options || {}; // (A)
    var start = options.start || 0;
    var end = options.end || -1;
    var step = options.step || 1;

}

function selectEntries4({start = 0, end = -1, step = 1} = {}) {

}


function logAllArguments2() {
    for (var i = 0; i < arguments.length; i++) {
        console.log(arguments[i]);
    }
}

function logAllArguments(...args) {
    for (const arg of args) {
        console.log(arg);
    }
}

logAllArguments('s', 'e', 'g', 'f', 'e', 'i')


Math.max.apply(Math, [-1, 5, 11, 3])

Math.max(...[-1, 5, 11, 3])

const arr1 = ['a', 'b'];
const arr2 = ['c', 'd'];

arr1.push(...arr2);
arr1.push('SSS', 'FFF');
console.log(arr1);

const arr11 = ['a', 'b'];
const arr21 = ['c'];
const arr31 = ['d', 'e'];

console.log([...arr11, ...arr21, ...arr31]);


function Person(name) {
    this.name = name;
}

Person.prototype.describe = function () {
    return 'Person called ' + this.name;
};

// In ES6, classes provide slightly more convenient syntax for constructor functions:
class Person2 {
    constructor(name) {
        this.name = name;
    }

    describe() {
        return 'Person called ' + this.name;
    }
}

let ppp = new Person2('KOLOKOL')
let desc = ppp.describe();
console.log(desc);

// Inheritance - V. complicated
function Employee(name, title) {
    Person.call(this, name); // super(name)
    this.title = title;
}

Employee.prototype = Object.create(Person.prototype);
Employee.prototype.constructor = Employee;
Employee.prototype.describe = function () {
    return Person.prototype.describe.call(this) // super.describe()
        + ' (' + this.title + ')';
};


class Employee2 extends Person2 {
    constructor(name, title) {
        super(name);
        this.title = title;
    }

    describe() {
        return super.describe() + ' (' + this.title + ')';
    }
}

let emp1 = new Employee2('TOTA', 'Engineer')
let emp1_desc = emp1.describe();
console.log(emp1_desc);


function MyError() {
    // Use Error as a function
    var superInstance = Error.apply(null, arguments);
    copyOwnPropertiesFrom(this, superInstance);
}

MyError.prototype = Object.create(Error.prototype);
MyError.prototype.constructor = MyError;

function copyOwnPropertiesFrom(target, source) {
    Object.getOwnPropertyNames(source)
        .forEach(function (propKey) {
            var desc = Object.getOwnPropertyDescriptor(source, propKey);
            Object.defineProperty(target, propKey, desc);
        });
    return target;
};


const map = new Map();

function countWords(word) {
    const count = map.get(word) || 0;
    map.set(word, count + 1);
}


if (str.indexOf('x') === 0) {
} // ES5
if (str.startsWith('x')) {
} // ES6
// From indexOf to endsWith:

function endsWith(str, suffix) { // ES5
    var index = str.indexOf(suffix);
    return index >= 0
        && index === str.length - suffix.length;
}

let suffix = ''
str.endsWith(suffix); // ES6
// From indexOf to includes:

str.includes('x')


if (str.indexOf('x') >= 0) {
} // ES5
if (str.includes('x')) {
} // ES6
// From join to repeat (the ES5 way of repeating a string is more of a hack):

new Array(3 + 1).join('#') // ES5
'#'.repeat(3) // ES6


console.log(new Array(3 + 1).join('#'));
console.log(Number.isNaN('abc'));


function xde() {
    let arr2 = Array.from(arguments);
    console.log(arr2);
}

xde('f', 'fff');

const arr1w = [...'abcx'];
const arr2w = [...new Set().add('a').add('b')];

console.log(arr1w);
console.log(arr2w);

const arr2e = new Array(2).fill(undefined);
const arr2e3 = new Array(2).fill(1);
console.log(arr2e);


console.log(Number.MIN_SAFE_INTEGER);
console.log(Number.MAX_SAFE_INTEGER);


8..toString(8)

let r = Number('0o10')
console.log(r);


Number.isFinite(Infinity)
Number.isFinite(-Infinity)
Number.isFinite(NaN)
Number.isFinite(123)

Number.parseFloat("26.35")
Number.parseInt("5984", 10)

console.log(0.1 + 0.2 === 0.3)
console.log(0.1 + 0.2)

// function epsEqu(x, y) {
//     return Math.abs(x - y) < Number.EPSILON;
// }

import {epsEqu} from './lib.js';

console.log(epsEqu(0.1 + 0.2, 0.3));
console.log(Number.isSafeInteger(56));
console.log(Number.My_isSafeInteger(56));

Math.expm1(1e-10)
Math.exp(1e-10)


console.log('\u{1F680}');    // ES6: single code point
console.log('\uD83D\uDE80'); // ES5: two code units


for (const ch of 'abc') {
    console.log(ch);
}

const chars = [...'abc'];
console.log(chars);

for (const ch of 'x\uD83D\uDE80y') {
    console.log(ch.length);
}


'hello'.startsWith('ello', 1)
'hello'.endsWith('hell', 4)


const mySymbol = Symbol('mySymbol');
console.log(mySymbol);

// at the first glance, tey look like an enum
const COLOR_RED = Symbol('Red');
const COLOR_ORANGE = Symbol('Orange');
const COLOR_YELLOW = Symbol('Yellow');
const COLOR_GREEN = Symbol('Green');
const COLOR_BLUE = Symbol('Blue');
const COLOR_VIOLET = Symbol('Violet');


function getComplement(color) {
    switch (color) {
        case COLOR_RED:
            return COLOR_GREEN;
        case COLOR_ORANGE:
            return COLOR_BLUE;
        case COLOR_YELLOW:
            return COLOR_VIOLET;
        case COLOR_GREEN:
            return COLOR_RED;
        case COLOR_BLUE:
            return COLOR_ORANGE;
        case COLOR_VIOLET:
            return COLOR_YELLOW;
        default:
            return null;
        // throw new Exception('Unknown color: ' + color);
    }
}

let yyy = getComplement(COLOR_ORANGE)
console.log(yyy)
console.log(typeof Symbol())


let firstName = "Mina"
console.log(`Hello ${firstName}!
How are you
today?`);

let rStr = String.raw`A \tagged\ template ${firstName}`
console.log(rStr);

function createNumberRegExp(english) {
    const PERIOD = english ? String.raw`\.` : ','; // (A)
    return new RegExp(`[0-9]+(${PERIOD}[0-9]+)?`);
}

let credentials = 'SDKJFSHGKJSDHFGKJLSHDFLK'
let fooo = 'somevalue'
let bar = 'othervalue'
let request = `POST http://foo.org/bar?a=${a}&b=${b}
Content-Type: application/json
X-Credentials: ${credentials}

 { "foo": ${fooo},
   "bar": ${bar}
 }
 `;
console.log(request);


const tmpl = addrs => `
    <table>
    ${addrs.map(addr => `
        <tr><td>${addr.first}</td></tr>
        <tr><td>${addr.last}</td></tr>
    `).join('')}
    </table>
`;

const data = [
    {first: '<Jane>', last: 'Bond'},
    {first: 'Lars', last: '<Croft>'},
];
console.log(tmpl(data));

function taggedFunc(strings, ...values) {
    console.log(strings)
    console.log(values)
}

const name = 'Sarah'
const city = 'Rome'

taggedFunc`Hello ${name}. Welcome to ${city}.`

function receiptTag(strings, ...values) {

    let finalString = ''
    for (let i = 0; i < values.length; i++) {
        finalString += strings[i].toString().toUpperCase() + values[i]
    }

    // Add the last string literal
    finalString += strings[strings.length - 1]

    return finalString
}

const item = 'apple'
const price = 2.5
const quantity = 3

const message = receiptTag`
  You have ${quantity} ${item}s.
  Unit cost: $${price}. 
  Total cost: $${quantity * price}.
`

console.log(message)


function greetUser(strings, name) {
    console.log('========================')
    console.log(strings.raw)
    console.log('========================')

    const now = new Date()
    const currentHour = now.getHours()

    const timeOfDay = currentHour < 12 ? 'morning' : currentHour < 17 ? 'afternoon' : 'evening'

    return `Good ${timeOfDay} ${name}${strings[1]}`
}

const userName = 'Ama'

console.log(greetUser`Hello ${userName}, nice to meet you!`)

const userNameWithTag = '<Ama>'
console.log(`Hello !${userNameWithTag}, nice to meet you!!!!!!!!!!!!!!!!!!`)

// const parent2 = document.querySelector("#parent-2")
// const child1Ofparent2 = parent2.childNodes.length
// const child1Ofparent2 = parent2.childNodes.forEach()
// const child1Ofparent2 = parent2.childNodes[0]

// let element = document.getElementById("demo").innerHTML = "Hello World!";
let element = document.getElementById("demo");
element.innerHTML = 'new html content	Change the inner HTML of an element'
// element.attribute = 'new value	Change the attribute value of an HTML element'
element.href = 'https://www.google.com/search?q=';
element.src = 'image.png'
// element.style.property = 'new style'
element.style.color = 'red'

document.getElementById("demo").onclick = function () {
    let x = 1;

}

document.getElementById("demo").addEventListener('click', function () {
    // code
});


// const x = document.forms["frm1"]; // form-id
// let text = "";
// for (let i = 0; i < x.length; i++) {
//     text += x.elements[i].value + "<br>";
// }
// document.getElementById("demo").innerHTML = text;


// change attribute
// <img id="myImage" src="smiley.gif"/>
document.getElementById("myImage").src = "images/fbi.png";

function validateForm() {
    let x = document.forms["myForm"]["fname"].value;
    if (x == "") {
        alert("Name must be filled out");
        return false;
    }
}

console.log(window.location.href)
let myTitle = document.getElementById("demo").firstChild.nodeValue;
let myTitle2 = document.getElementById("demo").firstChild.nodeName;
console.log(myTitle)
console.log(myTitle2)


const para = document.createElement("p");
const node = document.createTextNode("This is new.");
para.style.color = "green";
para.style.fontSize = "23px";
para.style.fontWeight = "600";
para.appendChild(node);

const elementd = document.getElementById("div1");
elementd.appendChild(para);


const d1 = new Date();
const d2 = new Date("2022-03-25");
const d3 = new Date("October 13, 2014 11:13:00");
const d4 = new Date(2018, 11, 24, 10, 33, 30, 0);
const d5 = new Date("2015-03-25T12:00:00Z");
/*
new Date(year,month)
new Date(year,month,day)
new Date(year,month,day,hours)
new Date(year,month,day,hours,minutes)
new Date(year,month,day,hours,minutes,seconds)
new Date(year,month,day,hours,minutes,seconds,ms)

new Date(milliseconds)
*/

console.log(d1)
console.log(d2)
console.log(d3)
console.log(d4)
console.log(d5)
console.log(d4.toString())
console.log(d4.toUTCString())
console.log(d4.toISOString())
console.log("-------------------------------")
console.log(new Date(1329429600000))
console.log(Date(1329429600000))   // current UTC time


let msec = Date.parse("March 21, 2012");

d1.getDay()

function getValues() {
    let x = 9;
    let y = 9;
    return [x, y]
}

const [first, second] = getValues()
const values = getValues()
const first1 = values[0]
const second1 = values[1]

const objw = Object.freeze({});
// objw.prop = 123; // TypeError


let tmp = true;
if (true) { // enter new scope, TDZ starts
    // Uninitialized binding for `tmp` is created
    // console.log(tmp); // ReferenceError

    let tmp; // TDZ ends, `tmp` is initialized with `undefined`
    console.log(tmp); // undefined

    tmp = 123;
    console.log(tmp); // 123
}
console.log(tmp); // true


const obj5 = {first: 'Jane', last: 'Doe'};
const {first: f, last: l} = obj5;

console.log(obj5);
// console.log(first, last);

const obj6 = {foo: 123};
const {writable1, configurable1} = Object.getOwnPropertyDescriptor(obj6, 'foo');
console.log(writable1, configurable1);


const iterable = ['a', 'b'];
const [x, y] = iterable;
console.log(x, y);

const [all3, year3, month3, day3] =
    /^(\d\d\d\d)-(\d\d)-(\d\d)$/
        .exec('2999-12-31');
console.log(all3, year3, month3, day3);


const arre = ['a', 'b'];
console.log(arre);
console.log(arre.entries());


const obj7 = {a: [{foo: 123, bar: 'abc'}, {}], b: true};
const {a: [{foo: fd}]} = obj7; // f = 123
console.log(fd);


({} = [true, false]);


const cells = 'Jane\tDoe\tCTO'
const [firstNamee, lastName, title] = cells.split('\t');
console.log(firstNamee, lastName, title);

const urls = [
    'http://example.com/foo.html',
    'http://example.com/bar.html',
    'http://example.com/baz.html',
];
// urls.map(downloadUrl)

// This function returns a Promise that is fulfilled with a string (the text)
function downloadUrl(url) {
    return fetch(url).then(request => request.text());
}

function func324(x, y) {
    if (arguments.length > 2) {
        throw new Error();
    }
}

Math.max(-1, 5, 11, 3)
Math.max(...[-1, 5, 11, 3])   //turns the items of an iterable into arguments of a function call
Math.max(-1, ...[5, 11], 3)

const arr1d = ['a', 'b'];
const arr2d = ['c', 'd'];

arr1d.push(...arr2d);

let dddp = [1, ...[2, 3], 4];
console.log(dddp);

const xs = ['a', 'b'];
const ys = ['c'];
const zs = ['d', 'e'];

const arrsss = [...xs, ...ys, ...zs]; // ['a', 'b', 'c', 'd', 'e']
console.log(arrsss);


var args = function () {
    return arguments
}('a', 'b');


(() => {
    console.log('Hello World!');
})();
((x) => {
    console.log(this);
})();


function Prefixer(prefix) {
    this.prefix = prefix;
}

Prefixer.prototype.prefixArray = function (arr) { // (A)
    'use strict';

    var that = this; // (A)

    return arr.map(function (x) { // (B)

        // console.log(that)
        console.log(this)

        // Doesn’t work:
        // return that.prefix + x; // (C)
        return that.prefix + x; // (C)
    }, this);
};

let pre = new Prefixer('Hi ');
pre.prefixArray(['Joe', 'Alex']);


Prefixer.prototype.prefixArray2 = function (arr) {
    return arr.map((x) => {
        return this.prefix + x;
    });
};

class Prefixer2 {
    constructor(prefix) {
        this.prefix = prefix;
    }

    prefixArray(arr) {
        return arr.map(x => this.prefix + x); // (A)
    }
}

[1, undefined, 3].map((x = 'yes') => x);


const fds = x => (x % 2) === 0 ? x : 0;
const fdsa = x => typeof x;

console.log(typeof (() => {})); // OK



