// https://exploringjs.com/es6/index.html

console.log('\u{1F680}');
console.log('\uD83D\uDE80');

let dex = 'hell\u{6F}'
console.log(dex);


eval('5 + 2')
console.log(eval('5 + 2'));


console.log(">>>==========================================<<<");


const target = {};
const handler = {
    /** Intercepts: getting properties */
    get(target, propKey, receiver) {
        console.log(`GET ${propKey}`);
        return 123;
    },

    /** Intercepts: checking whether properties exist */
    has(target, propKey) {
        console.log(`HAS ${propKey}`);
        return true;
    }
};
const proxy = new Proxy(target, handler);
proxy.foo;
'hello' in proxy;


// The handler doesn’t implement the trap set 
// Therefore, setting proxy.bar is forwarded to target
proxy.bar = 'abc';

console.log(target);


console.log(">>>==========================================<<<");


// Intercepting method calls 
const obj2 = {
    multiply(x, y) {
        return x * y;
    },
    squared(x) {
        return this.multiply(x, x);
    },
};

function traceMethodCalls(obj) {
    const handler = {
        get(target, propKey, receiver) {
            const origMethod = target[propKey];
            return function (...args) {
                const result = origMethod.apply(this, args);

                // Forward the operation
                // return Reflect[propKey](...args);

                console.log(propKey + JSON.stringify(args) + ' -> ' + JSON.stringify(result));
                return result;
            };
        }
    };
    return new Proxy(obj, handler);
}


const handler2 = {
    /** Intercepts: functions */
    get(target, propKey, receiver) {
        const origMethod = target[propKey];
        return function (...args) {
            const result = origMethod.apply(this, args);
            console.log(propKey + JSON.stringify(args) + ' -> ' + JSON.stringify(result));
            return result;
        };
    }

};
const proxy2 = new Proxy(obj2, handler2);
proxy2.multiply(2, 7)
proxy2.squared(9)

console.log(">>>==========================================<<<");

const {my_proxy, revoke} = Proxy.revocable(target, handler);


const targetx = {}; // Start with an empty object
const handlerx = {}; // Don’t intercept anything
const {my_proxy2, revoke2} = Proxy.revocable(targetx, handlerx);

proxy.foo = 123;
console.log(proxy.foo); // 123

revoke();

console.log(proxy.foo); // TypeError: Revoked


const handler3 = {
    deleteProperty(target, propKey) {
        console.log('DELETE ' + propKey);
        return delete target[propKey];
    },
    has(target, propKey) {
        console.log('HAS ' + propKey);
        return propKey in target;
    },
    // Other traps: similar
}


const handler4 = {
    deleteProperty(target, propKey) {
        console.log('DELETE ' + propKey);
        return Reflect.deleteProperty(target, propKey);
    },
    has(target, propKey) {
        console.log('HAS ' + propKey);
        return Reflect.has(target, propKey);
    },
    // Other traps: similar
}


function throwException() {
    throw new Error('Required Field.');
}

// Mark optional parameters via the parameter default value `undefined`
function foos(optional = undefined) {
    // ···
}

// Mark required parameters via a function that throws an exception
function foow(required = throwException()) {
    // ···
}

const amount = 1_000_000_000;

// Hundreds of millions     
const amount1 = 1_475_938.38;

// 6234500 cents (62345 dollars)
const amount2 = 62345_00;

// 1,734,500
const amount3 = 1_734_500;

// 20^30000
const amount4 = 2e30_000;


const message = 'hello+this+is+a+message';
const messageWithSpace = message.replace(/\+/g, ' ');
const messageWithSpace2 = message.replaceAll('+', ' ')


let a = 1;
a &&= 3;
// a = 3
// it is equivalent to 
if (a) {
    a = 3;
}
console.log('&& -> a ' + a);

a = 0;
a &&= 3;
console.log('&& -> a ' + a);

a = 0;
a ||= 3
console.log('|| -> a ' + a);

a = 1;
a ||= 3
console.log('|| -> a ' + a);

a = undefined;
a ??= 7
console.log('?? -> a ' + a);


const firstPromise = new Promise((resolve, reject) => {
    setTimeout(() => reject(), 1000);
});

const secondPromise = new Promise((resolve, reject) => {
    setTimeout(() => reject(), 2000);
});

const thirdPromise = new Promise((resolve, reject) => {
    setTimeout(() => reject(), 3000);
});

try {
    const first = await Promise.any([
        firstPromise, secondPromise, thirdPromise
    ]);
    // Any of the promises was fulfilled.
} catch (error) {
    console.log(error);
    // AggregateError: All promises were rejected
}


const objectExample = {name: "Juanito", lastname: "Jordan"};
const refObj = new WeakRef(objectExample);
const objzzz = refObj.deref();
let oName = objzzz.name

console.log(oName);
console.log(refObj.deref().name);

const registry = new FinalizationRegistry(value => {
    // Do some stuff
});
registry.register({greeting: "Hello World"}, "greetingObject");

// The keyword "async" before a function makes the function return a promise:
async function myFunction() {
    return "Hello";
}

// Is the same as:
function myFunction2() {
    return Promise.resolve("Hello");
}


myFunction()
    .then(
        function (value) { /* code if successful */
        },
        function (error) { /* code if some error */
        }
    );


// The "await" keyword can only be used inside an async function.
// let value = await promise;


async function myDisplay() {
    let myPromise = new Promise(function (resolve, reject) {
        resolve("I love You !!");
    });
    document.getElementById("demo2").innerHTML = await myPromise;
}

myDisplay();


myDisplay().then(x => console.log('testing async/await ... ' + x))

function myDisplay2() {
    let myPromise = new Promise(function (resolve, reject) {
        resolve("I love You toooooooooooooooooooooooooo !!");
    });

    return myPromise;
}


myDisplay2()
    .then(x => {
    console.log('testing async/await v2 ... ' + x);
    document.getElementById("demo3").innerHTML = x;
})



async function runProcess() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
        const json = await response.json();
        console.log(json);
    } catch (error) {
        console.log(error);
    }
}

runProcess();


// Async/Await in IIFE  - Immediately Invoked Function Expression (IIFE) 
// Unlike regular functions and variables, IIFEs will be removed from the running process once they are executed.
(async function () {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
        const json = await response.json();
        console.log(json);
    } catch (error) {
        console.log(error);
    }
})();


const runProcess2 = async () => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
        const json = await response.json();
        console.log(json);
    } catch (error) {
        console.log(error);
    }
};

runProcess2();



await Promise.resolve(console.log('@@@@@@@@@@@@@@@@@@@@@@@@@@@@Hello World@@@@@@@@@@@@@@@@@@@@@@@@'));

