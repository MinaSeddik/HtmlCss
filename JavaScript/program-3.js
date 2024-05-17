

// https://exploringjs.com/es6/index.html



var a1 = ['a', 'b', 'c'];
var b1 = ['x', 'y', 'z'];
var c1 = a1.concat(b1);
console.log(c1);


var a2 = ['a', 'b', 'c'];
a2.push('d');
var c2 = a2.join('');
console.log(c2);
console.log(a2.join(','));


var a3 = ['a', 'b', 'c'];
var c3 = a3.pop();
console.log(c3);
console.log(a3);


var a4 = ['a', 'b', 'c'];
var b4 = ['x', 'y', 'z'];
var c4 = a4.push(b4, true);
console.log(a4);
console.log(c4);


var a5 = ['a', 'b', 'c'];
var b5 = a5.reverse();
console.log(a5);
console.log(b5);


var a6 = ['a', 'b', 'c'];
var c6 = a6.shift();
console.log(c6);
console.log(a6);
console.log(a6.shift());


// It will stop before copying array[end]
// The end parameter is optional, and the default is array.length
var a7 = ['a', 'b', 'c'];
var b7 = a7.slice(0, 1);
var c7 = a7.slice(1);
var d7 = a7.slice(1, 2);
console.log(b7);
console.log(c7);
console.log(d7);


// sort by string, default mechanism
var n1 = [4, 8, 15, 16, 42, 23];
console.log(n1);
n1.sort();
console.log(n1);

// to sort by integer
n1.sort((a, b) => a - b);
console.log(n1);


var by = function (name) {
    return function (o, p) {
        var a, b;
        if (typeof o === 'object' && typeof p === 'object' && o && p) {
            a = o[name];
            b = p[name];
            if (a === b) {
                return 0;
            }
            if (typeof a === typeof b) {
                return a < b ? -1 : 1;
            }
            return typeof a < typeof b ? -1 : 1;
        } else {
            throw {
                name: 'Error',
                message: 'Expected an object when sorting by ' + name
            };
        }
    };
};

var s = [
    {first: 'Joe', last: 'Besser'},
    {first: 'Moe', last: 'Howard'},
    {first: 'Joe', last: 'DeRita'},
    {first: 'Shemp', last: 'Howard'},
    {first: 'Larry', last: 'Fine'},
    {first: 'Curly', last: 'Howard'}
];
console.log(s);
// s.sort(by('first'));
s.sort(by('last'));
console.log(s);


var by2 = function (name, minor) {
    return function (o, p) {
        var a, b;
        if (o && p && typeof o === 'object' && typeof p === 'object') {
            a = o[name];
            b = p[name];
            if (a === b) {
                return typeof minor === 'function' ? minor(o, p) : 0;
            }
            if (typeof a === typeof b) {
                return a < b ? -1 : 1;
            }
            return typeof a < typeof b ? -1 : 1;
        } else {
            throw {
                name: 'Error',
                message: 'Expected an object when sorting by ' + name
            };
        }
    };
};


var a8 = ['a', 'b', 'c'];
var r8 = a8.splice(1, 1, 'ache', 'bug');
// a8 is ['a', 'ache', 'bug', 'c']
// r8 is ['b']
console.log(a8);
console.log(r8);


var a9 = ['a', 'b', 'c'];
var r9 = a9.unshift('?', '@', 'K');
// a is ['?', '@', 'a', 'b', 'c']
// r is 5
console.log(a9);
console.log(r9);


document.writeln(Math.PI.toExponential(0));
document.writeln(Math.PI.toExponential(2));
document.writeln(Math.PI.toExponential(7));
document.writeln(Math.PI.toExponential(16));
document.writeln(Math.PI.toExponential());
document.writeln(Math.PI);


let num = 564123.26
document.writeln(num.toExponential(6));

document.writeln('------------------------------------------');

document.writeln(Math.PI.toFixed(0));
document.writeln(Math.PI.toFixed(2));
document.writeln(Math.PI.toFixed(7));
document.writeln(Math.PI.toFixed(16));
document.writeln(Math.PI.toFixed());
document.writeln(num.toFixed(4));
document.writeln((5.265).toFixed(4));

document.writeln('------------------------------------------');

document.writeln(Math.PI.toPrecision(2));
document.writeln(Math.PI.toPrecision(7));
document.writeln(Math.PI.toPrecision(16));
document.writeln(Math.PI.toPrecision( ));

document.writeln('------------------------------------------');

document.writeln(Math.PI.toString(2));
document.writeln(Math.PI.toString(8));
document.writeln(Math.PI.toString(16));
document.writeln(Math.PI.toString( ));

document.writeln('------------------------------------------');

// var a = {member: true};
// var b = Object.create(a); // from Chapter 3
// var t = a.hasOwnProperty('member'); // t is true
// var u = b.hasOwnProperty('member'); // u is false
// var v = b.member; 

var result = "mother_in_law".replace('_', '-');
console.log(result);

result = "mother_in_law".replaceAll('_', '-');
console.log(result);


var oldareacode = /\((\d{3})\)(:?-?)?/g;
var p = '(555)666-1212'.replace(oldareacode, '$1-');
var p1 = '(555)-666-1212'.replace(oldareacode, '$1-');
var p2 = '+1(555)666-1212'.replace(oldareacode, '$1-');
var p3 = '555-666-1212'.replace(oldareacode, '$1-');
console.log(p);
console.log(p1);
console.log(p2);
console.log(p3);

var oldareacode2 = /(\+\d{2})?\((\d{3})\)(:?-?)?/g;
var p4 = '(888)666-1212'.replace(oldareacode2, '$2-');
var p5 = '+20(888)666-1212'.replace(oldareacode2, '$1 $2-');
console.log(p4);
console.log(p5);


result = "mother_in_law".search();


var text = 'and in it he says "Any damn fool could';
var aw = text.slice(18);
// a is '"Any damn fool could'
var bw = text.slice(0, 3);
// b is 'and'
var cw = text.slice(-5);
// c is 'could'
var dw = text.slice(19, 32);
// d is 'Any damn fool'


var str = "x";
console.log(str)
console.log(String.prototype);


console.log("my name is mina".split(''));
console.log("my name is mina".split(' '));
console.log("my name is mina".split(' ')[3]);
console.log("my name is mina".split(' ', 2));


text = 'last, first ,middle';
var dp = text.split(/\s*,\s*/);
console.log(dp)


console.log(String.fromCharCode(67, 97, 116))

var ddd = 5
var ddd = new Number(5)
var sss = 'stringvalue'
var sss = new String('stringvalue')

console.log(typeof ddd)
console.log(typeof ddd.constructor)
console.log(typeof sss)
console.log(typeof sss.constructor)
console.log(typeof sss.prototype)

myObject = {
    key1: "value1",
    key2: "value2",
    key3: "value3"
}

myKey = "key2";

eval("myValue = myObject." + myKey + ";");
console.log(myValue)
console.log(myvalue = myObject[myKey])



