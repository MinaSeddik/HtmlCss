// https://exploringjs.com/es6/index.html

const propKey = 'foo';
const sym = Symbol('System')
const objz = {
    [propKey]: true,
    [sym]: 'Hobaaaaaaaaaaaaaaaaaaa',
    ['b' + 'ar']: 123,
    ['h' + 'ello']() {
        return 'hi';
    }
};

console.log(objz);
console.log(objz.hello());


const obja = {foo: 123};
Object.assign(obja, {bar: true});           // assign new property
Object.freeze(obja);                                 // to be immutable
console.log(JSON.stringify(obja));


const objds = {
    get foo() {
        console.log('GET foo');
        return 123;
    },
    set bar(value) {
        console.log('SET bar to ' + value);
        // return value is ignored
    }
};


objds.foo;
objds.bar = true;
console.log(objds);
console.log(JSON.stringify(objds));


const x = 4;
const y = 1;
const objwww = {x, y};
console.log(JSON.stringify(objwww));

Object.is(NaN, NaN)
Object.is(-0, +0)


// console.log(desc([], 'length'));
class Point {

    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    toString() {
        return `(${this.x}, ${this.y})`;
    }
}

class ColorPoint extends Point {
    constructor(x, y, color) {
        super(x, y);
        this.color = color;
    }

    toString() {
        return super.toString() + ' in ' + this.color;
    }
}

const cp = new ColorPoint(25, 8, 'green');
console.log(cp);
console.log(cp.toString());
console.log(cp instanceof ColorPoint);
console.log(cp instanceof Point);
console.log(typeof Point);


class Foo {
    constructor(prop) {
        this.prop = prop;
    }

    static staticMethod() {
        return 'classy';
    }

    prototypeMethod() {
        return 'prototypical';
    }
}

const foo = new Foo(123);
console.log(Foo.staticMethod());
console.log(foo.prototypeMethod());


// First, you can manually add a static property
class Point3 {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}

Point3.ZERO = new Point3(0, 0);


// getter and setter
class MyClass {
    constructor(prop) {
        this.properties = prop;
    }

    get prop() {
        return this.properties;
    }

    set prop(value) {
        value = value.trim();
        if (value.length === 0) {
            throw "The property can't be empty";
        }
        this.properties = value;
    }
}

// You use MyClass as follows.
const inst = new MyClass('my-properties');
inst.prop = "properties-123";

// inst.prop = " ";   // will throw an exception

try {
    inst.prop = " ";
} catch (err) {
    console.log('Error: ' + err);
} finally {
    // Block of code to be executed regardless of the try / catch result
}

let data2 = inst.prop;
console.log('Data: ' + data2);


let num = 1;
try {
    num.toPrecision(500);   // A number cannot have 500 significant digits
} catch (err) {
    document.getElementById("demo").innerHTML = err.name;
}


class Foo1 {
}

class Bar1 extends Foo1 {
    constructor(num) {
        super();
        const tmp = num * 2; // OK
        this.num = num; // ReferenceError
        // super();   // will cause exception
        this.num = num; // OK
    }
}


const bar = new Bar1(); // ReferenceError


class Countdown {
    constructor(counter, action) {
        Object.assign(this, {
            dec() {
                if (counter < 1) return;
                counter--;
                if (counter === 0) {
                    action();
                }
            }
        });
    }
}


const c = new Countdown(2, () => console.log('DONE'));
c.dec();
c.dec();


class Countdown2 {
    constructor(counter, action) {
        this._counter = counter;
        this._action = action;
    }

    dec() {
        if (this._counter < 1) return;
        this._counter--;
        if (this._counter === 0) {
            this._action();
        }
    }
}

const c2 = new Countdown(2, () => console.log('DONE'));
c2.dec();
c2.dec();


const _counter = new WeakMap();
const _action = new WeakMap();

class Countdown3 {
    constructor(counter, action) {
        _counter.set(this, counter);
        _action.set(this, action);
    }

    dec() {
        let counter = _counter.get(this);
        if (counter < 1) return;
        counter--;
        _counter.set(this, counter);
        if (counter === 0) {
            _action.get(this)();
        }
    }
}

const c3 = new Countdown3(2, () => console.log('DONE'));
c3.dec();
c3.dec();


const _counter2 = Symbol('counter');
const _action2 = Symbol('action');

class Countdown4 {
    constructor(counter, action) {
        this[_counter2] = counter;
        this[_action2] = action;
    }

    dec() {
        if (this[_counter2] < 1) return;
        this[_counter2]--;
        if (this[_counter2] === 0) {
            this[_action2]();
        }
    }
}

const c4 = new Countdown4(2, () => console.log('DONE'));
c4.dec();
c4.dec();


let vl = 3;
console.log(vl);
if (vl) {
    console.log("inside if ...");
}


const user = {
    name: "John",
    address: {
        city: "New York",
        zipcode: "10001"
    }
};

let city;
if (user && user.address && user.address.city) {
    city = user.address.city;
} else {
    city = "Unknown";
}

console.log("Traditional Approach:", city)

// very good and readable
city = user?.address?.city || "Unknown";

console.log("Optional Chaining Approach:", city); // Output: New York


const user2 = {
    name: "Alice",
    getAddress() {
        return {
            city: "San Francisco",
            zipcode: "94105"
        };
    }
};

let city2;
if (user2 && user2.getAddress) {
    const address = user2.getAddress();
    if (address) {
        city2 = address.city;
    }
}

console.log("Traditional Approach:", city2); // Output: San Francisco


city2 = user2?.getAddress()?.city || "Unknown";

console.log("Optional Chaining Approach:", city2); // Output: San Francisco


let city3 = user2?.getAddress?.().city || "Unknown";
console.log("Optional Chaining Approach:", city3); // Output: San Francisco


const users = [
    {id: 1, profile: {name: "Alice"}},
    {id: 2},
    {id: 3, profile: {name: "Bob"}}
]

const names = users.map(user => {
    if (user && user.profile && user.profile.name) {
        return user.profile.name;
    } else {
        return "Unknown";
    }
});
console.log("Traditional Approach:", names); // Output: ["Alice", "Unknown", "Bob"]


const names2 = users.map(user => user?.profile?.name || "Unknown");
console.log("Optional Chaining Approach:", names2); // Output: ["Alice", "Unknown", "Bob"]

const names3 = users.map(user => user?.profile?.name ?? "Unknown");
console.log("Optional Chaining Approach with fallback operator ??:", names3); // Output: ["Alice", "Unknown", "Bob"]


class Test {
    #firstName = 'test-name';

    constructor(firstName, lastName) {
        this.#firstName = firstName;
        this._lastName = lastName;
    }

    get FirstName() {
        return this.#firstName;
    }
}

const test = new Test("mina", "ibra");
let str222 = test.FirstName
let str223 = test._lastName
console.log(str222);
console.log(str223);


// Array-like, but not iterable!
const arrayLike = {
    length: 2,
    0: 'a',
    1: 'b'
};

/*
for (const x of arrayLike) { // TypeError
    console.log(x);
}
*/

for (const x of Array.from(arrayLike)) { // OK
    console.log(x);
}


Array.from(new Array(5), (x, i) => i * 2)


const map = new Map(); // create an empty Map
const KEY = {};
map.set(KEY, 123);
map.get(KEY)
map.has(KEY)
map.delete(KEY);
map.has(KEY)
map.size
console.log(map);
map.clear();


const map2 = new Map([
    [1, 'one'],
    [2, 'two'],
    [3, 'three'], // trailing comma is ignored
]);
console.log(map2);


const arr = [5, 1, 5, 7, 7, 5];
const unique = [...new Set(arr)]; // [ 5, 1, 7 ]
console.log(unique);

const unique2 = [...map2.values()];
const unique3 = [...map2.keys()];
console.log(unique2);
console.log(unique3);


let testMap = new Map();
// Different objects are always considered different. (because of different references)
testMap.set({}, 1);
testMap.set({}, 2);
let sz = testMap.size
console.log(sz);
console.log(testMap.get({}));
console.log(Map.prototype);


// applying map and filters on maps
const mappedMap = new Map(
    [...testMap].map(([k, v]) => [k * 2, '_' + v])
);

const mappedMap2 = new Map(
    [...testMap].filter(([k, v]) => k > 0)
);

const map1 = new Map()
    .set(1, 'a1')
    .set(2, 'b1')
    .set(3, 'c1');

const map22 = new Map()
    .set(2, 'b2')
    .set(3, 'c2')
    .set(4, 'd2');

const combinedMap = new Map([...map1, ...map22]);

const map3 = new Map();
map3.set('a', [77, 101]);

let values = map3.get('b') || [];
values.push(333);
map3.set('b', values);

values = map3.get('c') || [];
map3.set('c', values);

let totalMap = new Map(
    [...map3].map(([k, v]) => [k, v.reduce((sum, a) => sum + a, 0)])
);

console.log(totalMap);

console.log("==========================================");

const map4 = new Map();
// const map4 = new WeakMap();   // the key of the WeakMap should be an Object
map4.set('a', new Set([
    () => {
        console.log('print-a ... 1')
    },
    () => {
        console.log('print-a ... 2')
    }]));

let values2 = map4.get('b') || new Set();
values2.add(() => console.log('print-b'));
map4.set('b', values2);

values2 = map4.get('c') || new Set();
map4.set('c', values2);

console.log(map4);

map4.forEach((v, k) => v.forEach(f => f()));


class Countdown111 {

    #counter111 = new WeakMap();
    #action111 = new WeakMap();

    constructor(counter, action) {
        this.#counter111.set(this, counter);
        this.#action111.set(this, action);
    }

    dec() {
        let counter = this.#counter111.get(this);
        if (counter < 1) return;
        counter--;
        this.#counter111.set(this, counter);
        if (counter === 0) {
            this.#action111.get(this)();
        }
    }

    get count() {
        return this.#counter111.get(this);
    }
}


let MyCounter111 = new Countdown111(10, () => console.log("Hello from the parallel world!"));
MyCounter111.dec();
MyCounter111.dec();
MyCounter111.dec();
MyCounter111.dec();
MyCounter111.dec();
MyCounter111.dec();
MyCounter111.dec();
MyCounter111.dec();
MyCounter111.dec();
MyCounter111.dec();


// test private member access
// console.log(MyCounter111.#action111)


const setx = new Set(['red', 'green', 'blue']);
const arrxxd = [...setx];


const arr101 = [3, 5, 2, 2, 5, 5];
const unique101 = [...new Set(arr101)]; // [3, 5, 2]


let setw1 = new Set([1, 2, 3]);
setw1 = new Set([...setw1].map(x => x * 2));
// Resulting Set: {2, 4, 6}


let setw2 = new Set([1, 2, 3, 4, 5]);
setw2 = new Set([...setw2].filter(x => (x % 2) == 0));


// Union
let a = new Set([1, 2, 3]);
let b = new Set([4, 3, 2]);
const union = new Set([...a, ...b]);


// Intersection
a = new Set([1, 2, 3]);
b = new Set([4, 3, 2]);
const intersection = new Set(
    [...a].filter(x => b.has(x))
);


// Difference
a = new Set([1, 2, 3]);
b = new Set([4, 3, 2]);
const difference = new Set(
    [...a].filter(x => !b.has(x))
);


function concatenate(resultConstructor, ...arrays) {
    let totalLength = 0;
    for (const arr of arrays) {
        totalLength += arr.length;
    }
    const result = new resultConstructor(totalLength);
    let offset = 0;
    for (const arr of arrays) {
        result.set(arr, offset);
        offset += arr.length;
    }
    return result;
}

console.log(concatenate(Uint8Array,
    Uint8Array.of(1, 2), Uint8Array.of(3, 4)));

/*
const fileInput = document.getElementById('fileInput');
const file = fileInput.files[0];
const reader = new FileReader();
reader.readAsArrayBuffer(file);
reader.onload = function () {
    const arrayBuffer = reader.result;
    // ···
};


const canvas = document.getElementById('my_canvas');
const context = canvas.getContext('2d');
const imageData = context.getImageData(0, 0, canvas.width, canvas.height);
const uint8ClampedArray = imageData.data;


const socket = new WebSocket('ws://127.0.0.1:8081');
socket.binaryType = 'arraybuffer';

// Wait until socket is open
socket.addEventListener('open', function (event) {
    // Send binary data
    const typedArray = new Uint8Array(4);
    socket.send(typedArray.buffer);
});

// Receive binary data
socket.addEventListener('message', function (event) {
    const arrayBuffer = event.data;
    // ···
});

*/

const [az, bz] = new Set(['a', 'b', 'c']);
console.log(az);
console.log(bz);


const arrsww = ['a', 'b', 'c'];
let iter = arrsww[Symbol.iterator]();
for (const s of iter) {
    console.log(s);
}

console.log("==========================================");

for (const s of arrsww) {
    console.log(s);
}

console.log("==========================================<<<");

iter = arrsww[Symbol.iterator]();
let entry = iter.next();
while (!entry?.done) {
    console.log(entry.value);
    entry = iter.next();
}

const mapdddd = new Map().set('a', 1).set('b', 2);
for (const pair of mapdddd) {
    console.log(pair);
}

console.log("==========================================<<<");

const setddd = new Set().add('a').add('b');
for (const x of setddd) {
    console.log(x);
}

console.log("==========================================<<<");

function printArgs() {
    for (const x of arguments) {
        console.log(x);
    }
}

printArgs('ax', 'bx');

console.log("==========================================<<<");

for (const node of document.querySelectorAll('div')) {
    console.log(node);
}

console.log("==========================================<<<");


function iterateOver(...args) {
    let index = 0;
    const iterable = {
        [Symbol.iterator]() {
            const iterator = {
                next() {
                    if (index < args.length) {
                        return {value: args[index++]};
                    } else {
                        return {done: true};
                    }
                }
            };
            return iterator;
        }
    }
    return iterable;
}

// Using `iterateOver()`:
for (const x of iterateOver('fee', 'fi', 'fo', 'fum')) {
    console.log(x);
}


console.log("==========================================<<<");

const objt2 = {
    first: 'Jane', last: 'Doe', middle: {
        middle_1: "whatever",
        middle_2: "whatever",
    }
};
const propKeys = Reflect.ownKeys(objt2);
console.log(propKeys);

console.log("==========================================<<<");

function objectEntries(obj) {
    let index = 0;

    // In ES6, you can use strings or symbols as property keys,
    // Reflect.ownKeys() retrieves both
    const propKeys = Reflect.ownKeys(obj);

    return {
        [Symbol.iterator]() {
            return this;
        },
        next() {
            if (index < propKeys.length) {
                const key = propKeys[index];
                index++;
                return {value: [key, obj[key]]};
            } else {
                return {done: true};
            }
        }
    };
}

const objt = {first: 'Jane', last: 'Doe'};

for (const [key, value] of objectEntries(objt)) {
    // console.log(`${key}: ${value}`);
}

console.log(">>>==========================================<<<");


function* genFunc() {
    // (A)
    console.log('First');
    yield;
    console.log('Second');
}


const genObj = genFunc();
let genObjRes = genObj.next();
console.log(genObjRes);

// Output: First
genObj.next();

// output: Second

console.log(">>>==========================================<<<");

function* objectEntries3(obj) {
    // In ES6, you can use strings or symbols as property keys,
    // Reflect.ownKeys() retrieves both
    const propKeys = Reflect.ownKeys(obj);

    for (const propKey of propKeys) {
        yield [propKey, obj[propKey]];
    }
}

const jane2 = {first: 'Jane', last: 'Doe'};
for (const [key, value] of objectEntries(jane2)) {
    console.log(`${key}: ${value}`);
}

console.log(">>>==========================================<<<");

class BinaryTree {
    constructor(value, left = null, right = null) {
        this.value = value;
        this.left = left;
        this.right = right;
    }

    /** Prefix iteration */
    * [Symbol.iterator]() {
        yield this.value;
        if (this.left) {
            yield* this.left;
            // Short for: yield* this.left[Symbol.iterator]()
        }
        if (this.right) {
            yield* this.right;
        }
    }
}


const tree = new BinaryTree('a',
    new BinaryTree('b',
        new BinaryTree('c'),
        new BinaryTree('d')),
    new BinaryTree('e'));

for (const x of tree) {
    console.log(x);
}

console.log(">>>==========================================<<<");

function* dataConsumer() {
    console.log('Started');
    console.log(`1. ${yield}`); // (A)
    console.log(`2. ${yield}`);
    return 'result';
}


const genObj2 = dataConsumer();

/* this first invocation advances execution to the first yield */
let received = genObj2.next();
console.log(received);


received = genObj2.next('www');
console.log(received);


received = genObj2.next('xxx');
console.log(received);


console.log(">>>==========================================<<<");

function* gen() {
    // (A)
    while (true) {
        const input = yield; // (B)
        console.log(input);
    }
}

const obj = gen();
obj.next('a');
obj.next('b');


console.log(">>>==========================================<<<");

/**
 * Returns a function that, when called,
 * returns a generator object that is immediately
 * ready for input via `next()`
 */
function coroutine(generatorFunction) {
    return function (...args) {
        const generatorObject = generatorFunction(...args);
        generatorObject.next();
        return generatorObject;
    };
}

let wrapped = coroutine(gen);
wrapped().next('a---');
wrapped().next('b---');


console.log(">>>==========================================<<<");
console.log(">>>======= REGEX ============================<<<");
console.log(">>>==========================================<<<");

let REGEX = /a/;

REGEX.lastIndex = 7; // ignored
let match = REGEX.exec('xaxa');
console.log(match.index); // 1
console.log(REGEX.lastIndex); // 7 (unchanged)

console.log(">>>==========================================<<<");

REGEX = /a/g;

REGEX.lastIndex = 2;
match = REGEX.exec('xaxa');
console.log(match.index); // 3
console.log(REGEX.lastIndex); // 4 (updated)

// No match at index 4 or later
console.log(REGEX.exec('xaxa')); // null

console.log(">>>==========================================<<<");

REGEX = /a/y;

// No match at index 2
REGEX.lastIndex = 2;
console.log(REGEX.exec('xaxa')); // null

// Match at index 3
REGEX.lastIndex = 3;
match = REGEX.exec('xaxa');
console.log(match.index); // 3
console.log(REGEX.lastIndex); // 4

console.log(">>>==========================================<<<");

REGEX = /a/y;

REGEX.lastIndex = 2;
console.log(REGEX.test('xaxa')); // false

REGEX.lastIndex = 3;
console.log(REGEX.test('xaxa')); // true
console.log(REGEX.lastIndex); // 4


console.log(">>>==========================================<<<");

REGEX = /a/;

REGEX.lastIndex = 2; // ignored
console.log('xaxa'.search(REGEX)); // 1


// If you set the flag /y, lastIndex is still ignored, 
// but the regular expression is now anchored to index 0.

REGEX = /a/y;

REGEX.lastIndex = 1; // ignored
console.log('xaxa'.search(REGEX)); // -1 (no match)


console.log(">>>==========================================<<<");


REGEX = /a/;

REGEX.lastIndex = 7; // ignored
console.log('xaxa'.match(REGEX).index); // 1
console.log(REGEX.lastIndex); // 7 (unchanged)

console.log(">>>==========================================<<<");

REGEX = /a/y;

REGEX.lastIndex = 2;
console.log('xaxa'.match(REGEX)); // null

REGEX.lastIndex = 3;
console.log('xaxa'.match(REGEX).index); // 3
console.log(REGEX.lastIndex); // 4

console.log(">>>==========================================<<<");

REGEX = /a|b/g;
REGEX.lastIndex = 7;
console.log('xaxb'.match(REGEX)); // ['a', 'b']
console.log(REGEX.lastIndex); // 0

console.log(">>>==========================================<<<");

REGEX = /a|b/gy;

REGEX.lastIndex = 0; // ignored
console.log('xab'.match(REGEX)); // null
REGEX.lastIndex = 1; // ignored
console.log('xab'.match(REGEX)); // null

console.log('ab'.match(REGEX)); // ['a', 'b']
console.log('axb'.match(REGEX)); // ['a']


console.log(">>>==========================================<<<");


'x##'.split(/#/y); // no match

'##x'.split(/#/y); // 2 matches

console.log(">>>==========================================<<<");

REGEX = /a/;

// One match
console.log('xaxa'.replace(REGEX, '-'));

REGEX = /a/g;
console.log('xaxa'.replaceAll(REGEX, '-'));

console.log(">>>==========================================<<<");

REGEX = /a/y;

// Anchored to beginning of string, no match
REGEX.lastIndex = 1; // ignored
console.log('xaxa'.replace(REGEX, '-')); // 'xaxa'
console.log(REGEX.lastIndex); // 1 (unchanged)

console.log(">>>==========================================<<<");

function tokenize(TOKEN_REGEX, str) {
    const result = [];
    let match;
    while (match = TOKEN_REGEX.exec(str)) {
        result.push(match[1]);
    }
    return result;
}

const TOKEN_GY = /\s*(\+|[0-9]+)\s*/gy;
const TOKEN_G = /\s*(\+|[0-9]+)\s*/g;      // \s -> match spaces, \w -> match text

tokenize(TOKEN_GY, '3 + 4');    // [ '3', '+', '4' ]
tokenize(TOKEN_G, '3 + 4');     // [ '3', '+', '4' ]

tokenize(TOKEN_GY, '3x + 4');     //  [ '3' ]
tokenize(TOKEN_G, '3x + 4');      // [ '3', '+', '4' ]


console.log(">>>==========================================<<<");

console.log(TOKEN_GY.source);
console.log(TOKEN_GY.flags);
console.log(TOKEN_GY.global);       /* global, ignoreCase, multiline, sticky, unicode */
console.log(TOKEN_GY.ignoreCase);   /* global, ignoreCase, multiline, sticky, unicode */
console.log(TOKEN_GY.lastIndex);

function execSticky(regex, str) {
    // Anchor the regex to the beginning of the string
    let matchSource = regex.source;
    if (!matchSource.startsWith('^')) {
        matchSource = '^' + matchSource;
    }
    // Ensure that instance property `lastIndex` is updated
    let matchFlags = regex.flags; // ES6 feature!
    if (!regex.global) {
        matchFlags = matchFlags + 'g';
    }
    const matchRegex = new RegExp(matchSource, matchFlags);

    // Ensure we start matching `str` at `regex.lastIndex`
    const matchOffset = regex.lastIndex;
    const matchStr = str.slice(matchOffset);
    let match = matchRegex.exec(matchStr);

    // Translate indices from `matchStr` to `str`
    regex.lastIndex = matchRegex.lastIndex + matchOffset;
    match.index = match.index + matchOffset;
    return match;
}

console.log(">>>==========================================<<<");

function* execAll(regex, str) {
    // Make sure flag /g is set and regex.index isn’t changed
    const localCopy = copyAndEnsureFlag(regex, 'g');
    let match;
    while (match = localCopy.exec(str)) {
        yield match;
    }
}

function copyAndEnsureFlag(re, flag) {
    return new RegExp(re,
        re.flags.includes(flag) ? re.flags : re.flags + flag);
}

const str = '"fee" "fi" "fo" "fum"';
const regex = /"([^"]*)"/;

// Access capture of group #1 via destructuring
for (const [, group1] of execAll(regex, str)) {
    console.log(group1);
}

console.log(">>>==========================================<<<");

function h(z) {
    // Print stack trace
    console.log(new Error().stack); // (A)
}

function g(y) {
    h(y + 1); // (B)
}

function f(x) {
    g(x + 1); // (C)
}

f(3); // (D)


setTimeout(function () { // (A)
    console.log('Second');
}, 0);
console.log('First');
console.log('First-1');
console.log('First-2');
console.log('First-3');
console.log('First-4');
console.log('First-5');
console.log('First-6');
console.log('First-7');
console.log('First-8');

/*
var req = new XMLHttpRequest();
req.open('GET', url);   // will not send the request immediately, but will create task in a task queue to send the request then continue the program call stack


// so it will be save to set the handler events after open request as it will be set in execution of the current call stack and before picking any tasks from the task queue
req.onload = function () {
    if (req.status == 200) {
        processData(req.response);
    } else {
        console.log('ERROR', req.statusText);
    }
};

req.onerror = function () {
    console.log('Network Error');
};

req.send(); // Add request to task queue


var openRequest = indexedDB.open('test', 1);  // create task in task queue

openRequest.onsuccess = function (event) {
    console.log('Success!');
    var db = event.target.result;
};

openRequest.onerror = function (error) {
    console.log(error);
};


// Node.js
fs.readFile('myfile.txt', {encoding: 'utf8'},   
    function (error, text) { // (A)
        if (error) {
            // ...
        }
        console.log(text);
    });


*/