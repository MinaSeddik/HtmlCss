

// https://exploringjs.com/es6/index.html
// 
// 
var add = function (a, b) {
    return a + b;
};

let sum = add(2, 3);
console.log(`sum = ${sum}`);


var myObject = {
    value: 0,
    increment: function (inc) {
        console.log("----------------");
        console.log(typeof inc);
        console.log(typeof inc === "number");
        console.log("----------------");
        console.log(inc instanceof Number);
        console.log("----------------");
        this.value += typeof inc === 'number' ? inc : 1;
    }
};

console.log(myObject);

myObject.increment(4);
document.writeln(myObject.value); // 1


// Make an array of 2 numbers and add them.
var array = [3, 4, 8, 15];
var sum2 = add.apply(null, array); // sum is 7
console.log(`sum = ${sum2}`);


// Make an object with a status member.
var statusObject = {
    status: 'A-OK'
};
// statusObject does not inherit from Quo.prototype,
// but we can invoke the get_status method on
// statusObject even though statusObject does not have
// a get_status method.
// var status = Quo.prototype.get_status.apply(statusObject);
// status is 'A-OK'


let sum3 = function () {
    let i, sum = 0;
    for (i = 0; i < arguments.length; i += 1) {
        sum += arguments[i];
    }
    return sum;
};
document.writeln(sum3(4, 8, 15, 16, 23, 42)); // 108


var add4 = function (a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        throw {
            name: 'TypeError',
            message: 'add needs numbers parameters'
        };
    }
    return a + b;
}


function try_it() {
    try {
        add4("seven");
    } catch (e) {
        document.writeln(e.name + ': ' + e.message);
    }
}

try_it();

Function.prototype.method = function (name, func) {
    this.prototype[name] = func
    return this;
};

try_it.method("koko", function () {
    console.log(`${name} - ljaflkjdflkjaklsdjfklsajdfkljskldfjklsdjfkljsdklfjskldajfklsdajfkljdsaklfk;lsdf`);
    return this;
});

// try_it().koko();


Function.prototype.method = function (name, func) {
    this.prototype[name] = func;
    return this;
};


var fade = function (node) {
    var level = 1;
    var step = function () {
        var hex = level.toString(16);
        node.style.backgroundColor = '#FFFF' + hex + hex;
        if (level < 15) {
            level += 1;
            setTimeout(step, 100);
        }
    };
    setTimeout(step, 100);
};
// fade(document.body);

var handler = function () {
    document.writeln("XXXXXXXX");
    document.writeln("XXXXXXXX");
}

// setTimeout(handler, 5000);  // Run the specified function after N milliseconds

var numbers = [
    'zero', 'one', 'two', 'three', 'four',
    'five', 'six', 'seven', 'eight', 'nine'
];

console.log(numbers);

var numbers2 = [
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10
];
console.log(numbers2);

numbers.length = 3;
console.log(numbers);

numbers[numbers.length] = 'shi';
numbers.push('go');

console.log(numbers);
delete numbers[2];
console.log(numbers);
console.log(numbers[2]);

numbers.splice(2, 1);
console.log(numbers);


var i;
for (i = 0; i < numbers.length; i += 1) {
    document.writeln(numbers[i]);
}

for (let j in numbers) {
    document.writeln("-> " + numbers[j]);
}

console.log(typeof numbers);
console.log(numbers.constructor);

var is_array = function (value) {
    return value &&
        typeof value === 'object' &&
        value.constructor === Array;
};

console.log(is_array(numbers));


Array.method('reduce', function (f, value) {
    var i;
    for (i = 0; i < this.length; i += 1) {
        value = f(this[i], value);
    }
    return value;
});

// use arrow function like lambda in Java
var sum6 = numbers2.reduce(  (a, b) => a + b, 0);

console.log(`sum = ${sum6}`);


Number.method('is_integer', function (){
    console.log(`from inside = ${this}`);
    let value = this;
    console.log(`from inside = ${value}`);
    console.log(typeof value.value);
   return typeof value === 'number';
});



String.method('is_integer', function (){
    console.log(`str from inside = ${this}`);
    let value = this;
    console.log(`str from inside = ${value}`);
    console.log(typeof value);
    return typeof value === 'number';
});

let tst = '4'.is_integer();
console.log(`test 4 is-integer = ${tst}`);


// Build 2-D array
let n = 10
let my_array = new Array();
for (let i = 0; i < n; i += 1) {
    my_array[i] = [];
}

Array.matrix = function (m, n, initial) {
    var a, i, j, mat = [];
    for (i = 0; i < m; i += 1) {
        a = [];
        for (j = 0; j < n; j += 1) {
            a[j] = initial;
        }
        mat[i] = a;
    }
    return mat;
};
document.writeln('------------------------------------------');

var parse_url = /^(?:([A-Za-z]+):)?(\/{0,3})([0-9.\-A-Za-z]+)(?::(\d+))?(?:\/([^?#]*))?(?:\?([^#]*))?(?:#(.*))?$/;
var url = 'http://www.ora.com:80/goodparts?q#fragment';
var result = parse_url.exec(url);
var names = ['url', 'scheme', 'slash', 'host', 'port', 'path', 'query', 'hash'];
var blanks = ' ';
var i;
for (i = 0; i < names.length; i += 1) {
    document.writeln(result[i]);
    document.writeln(blanks.substring(names[i].length));
    document.writeln(names[i] + ':' + blanks.substring(names[i].length), result[i]);
    document.writeln('------------------------------------------');
}
