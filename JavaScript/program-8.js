// https://exploringjs.com/es6/index.html


class MyClazz{
    #mapper = new Map();
    #param1;
    #param2;

    static DATE_FORMAT = 'yyyy-MM-dd HH:mm:ss';
    static #DATE_FORMAT_2 = 'yyyy-MM-dd HH:mm:ss UTC';

    constructor(param1, param2) {
        this.#param1 = param1;
        this.#param2 = param2;
        
    }

    #privateMethod(val){
        this.#mapper.set(val, this.#param1 + this.#param2);
    }

    publicMethod(){
        let data = 'dummy';
        this.#privateMethod(data);
    }

    publicMethodFetch() {
        return this.#mapper.get('dummy');
    }

    publicGetPrivateStaticField() {
        return MyClazz.#DATE_FORMAT_2;
    }

    static greeting(){
        console.log('Hello this is a greeting from a static method');
    }
    
    
    //
    // get #name(){
    //     return this.#name;
    // }



}


let myClazz = new MyClazz(5, 9);
myClazz.publicMethod();
let out = myClazz.publicMethodFetch();
console.log(`Data = ${out}`)
console.log(`Date format static field = ${MyClazz.DATE_FORMAT}`);
// let strdate = MyClazz.#DATE_FORMAT_2;
let strdate2 = myClazz.publicGetPrivateStaticField();
console.log(`Date format static field = ${strdate2}`)

MyClazz.greeting();



class Test {
    static numbers = [1,2,3,4,5,6];
    static evenNumbers = [];
    static oddNumbers = [];

    // static class initialization block
    static {
        this.numbers.forEach((number) => {
            if(!(number % 2) ) {
                this.evenNumbers.push(number);
            } else {
                this.oddNumbers.push(number);
            }
        });
    }
    
}

console.log(Test.evenNumbers);
console.log(Test.oddNumbers);


class ClassWithPrivate {
    #privateField;
    #privateFieldWithInitializer = 42;

    #privateMethod() {
        // …
    }

    static #privateStaticField;
    static #privateStaticFieldWithInitializer = 42;

    static #privateStaticMethod() {
        // …
    }
}

class PrivateConstructor {
    static #isInternalConstructing = false;

    constructor() {
        if (!PrivateConstructor.#isInternalConstructing) {
            throw new TypeError("PrivateConstructor is not constructable");
        }
        PrivateConstructor.#isInternalConstructing = false;
        // More initialization logic
    }

    static create() {
        PrivateConstructor.#isInternalConstructing = true;
        const instance = new PrivateConstructor();
        return instance;
    }
}

//new PrivateConstructor(); // TypeError: PrivateConstructor is not constructable
PrivateConstructor.create(); // PrivateConstructor {}



class MyClazz2 {
    #list = new Array();
    #param1;
    #param2;

    constructor(param1, param2) {
        this.#param1 = param1;
        this.#param2 = param2;

        // this.#undeclaredField = 42; // Syntax error
    }
    
}


class ClassWithPrivateAccessor {
    
    #message;

    get #decoratedMessage() {
        return `🎬${this.#message}🛑`;
    }
    set #decoratedMessage(msg) {
        this.#message = msg;
    }

    get message() {
        return `🎬${this.#message}🛑`;
    }
    
    constructor() {
        this.#decoratedMessage = "hello world";
        console.log(this.#decoratedMessage);
    }
}

let classWithPrivateAccessor = new ClassWithPrivateAccessor(); // 🎬hello world🛑
console.log(classWithPrivateAccessor.message);



const getUsers = async(array)=> {
    try {
        const users =  await fetch('https://myapi/myusersfake');
        return users;
    } catch (error) {
        console.log('enter ' + error.message)
        throw new Error('Something went wrong, please try again later', { cause: error })
    }
}

try{
    const users = await getUsers();
} catch(error) {
    console.log("****************************************");
    console.log(error); // Error: The array need a minimum of two elements
    console.log(error.name); 
    console.log(error.message); 
    console.log(error.cause); // TypeError: Failed to fetch
    console.log("****************************************");
}




const fruitsArray = ['banana', 'apple', 'orange', 'kiwi'];
console.log(fruitsArray[fruitsArray.length -1])
// Output: kiwi

const fruit = 'kiwi';
console.log(fruit[fruit.length -1])
// Output: i


const fruitsArray2 = ['banana', 'apple', 'orange', 'kiwi'];
console.log(fruitsArray2.at(-1))
// Output: kiwi

const fruit2 = 'kiwit';
console.log(fruit2.at(-1))
// Output: i

const fruit3 = '';
console.log(fruit3.at(-1))
// Output: i

let objt12 = {};
if (Object.hasOwn(objt12, "foo")) {
    console.log("has property foo")
}

let objt1254 = {bar: "bar", foo: "bar22"};
if (Object.hasOwn(objt1254, "foo")) {
    console.log("has property foo")
}


const regexExample = /greeting(\d)/g;
const exampleString = 'greeting1greeting2';
const result = [...exampleString.matchAll(regexExample)];
console.log(result[0]);
console.log(result[1]);



const regexExample2022 = /greeting(\d)/dg;
const exampleString22 = 'greeting1greeting2';
const result22 = [...exampleString22.matchAll(regexExample2022)];
console.log(result22[0]);



// Create an Array
const fruits = [
    {name:"apples", quantity:300},
    {name:"bananas", quantity:500},
    {name:"oranges", quantity:200},
    {name:"kiwi", quantity:150}
];

// Callback function to Group Elements
function myCallback({ quantity }) {
    return quantity > 200 ? "ok" : "low";
}

// Group by Quantity
const resultss = Map.groupBy(fruits, myCallback);
console.log(resultss);