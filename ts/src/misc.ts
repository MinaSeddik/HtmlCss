
// https://exploringjs.com/
// https://exploringjs.com/tackling-ts/toc.html

type CarYear = number
type CarType = string
type CarModel = string
type Car = {
    year: CarYear,
    type: CarType,
    model: CarModel
}


const carYear: CarYear = 2001
const carType: CarType = "Toyota"
const carModel: CarModel = "Corolla"
const car: Car = {
    year: carYear,
    type: carType,
    model: carModel
};


interface Rectangle {
    height: number,
    width: number,
    area: ((h: number, w: number) => number) | null;
}

interface ColoredRectangle extends Rectangle {
    color: string
}

const coloredRectangle: ColoredRectangle = {
    height: 20,
    width: 10,
    color: "red",
    area: null
};

const rectangle: Rectangle = {
    height: 10,
    width: 10,
    area: (h: number, w: number) => h * w
}

let rArea: number = 0;
if (rectangle.area) {
    rArea = rectangle.area(25, 25);
}
console.log(`Rectangle Area= ${rArea}`);


interface ValueContainer<Value> {
    value: Value;
}

type StringContainer = ValueContainer<string>;

// const salary: bigint = 500_000n;

class SimpleStack<Elem> {
    #data: Array<Elem> = [];

    push(x: Elem): void {
        this.#data.push(x);
    }

    pop(): Elem {
        const result = this.#data.pop();
        if (result === undefined) {
            throw new Error();
        }
        return result;
    }

    get length() {
        return this.#data.length;
    }
}

const stringStack = new SimpleStack<string>();
stringStack.push('first');
stringStack.push('second');

const myMap: Map<boolean,string> = new Map([
    [false, 'no'],
    [true, 'yes'],
]);


function identity<Arg>(arg: Arg): Arg {
    return arg;
}

const num1 = identity<number>(123);

const identity2 = <Arg>(arg: Arg): Arg => arg;


function fillArray<T>(len: number, elem: T): T[] {
    return new Array<T>(len).fill(elem);
}

const array: Array<number> = fillArray<number>(6, 6);


// It is introduced via fillArray<T>. Therefore, its scope is the function.
function fillArray2<T>(len: number, elem: T): Array<T> {
    return new Array<T>(len).fill(elem);
}

// const array: Array<number> = fillArray2<number>(6, 6);

interface Array<T> {
    concat(...items: Array<T[] | T>): T[];
    reduce<U>(
        callback: (state: U, element: T, index: number, array: T[]) => U,
        firstState?: U
    ): U;
}

function func(value: any) {
    // Only allowed for numbers, but they are a subtype of `any`
    5 * value;

    // Normally the type signature of `value` must contain .propName
    value.propName;

    // Normally only allowed for Arrays and types with index signatures
    value[123];
}


let storageLocation: any;

storageLocation = null;
storageLocation = true;
storageLocation = {};


function func345(value: any) {
    const a: null = value;
    const b: boolean = value;
    const c: object = value;
}


interface StringConstructor {
    (value?: any): string; // call signature
    // ···
}


function func324344(value: unknown) {
    // @ts-expect-error: Object is of type 'unknown'.
    value.toFixed(2);

    // Type assertion:
    (value as number).toFixed(2); // OK
}


function func324ss344(value: any) {
    value.toFixed(2);

    // Type assertion:
    (value as number).toFixed(2); // OK
}



function func12222(value: unknown) {
    // @ts-expect-error: Object is of type 'unknown'.
    value.length;

    if (typeof value === 'string') { // type guard
        // %inferred-type: string
        value;

        value.length; // OK
    }
}



function funfdsfc(value: unknown) {
    // @ts-expect-error: Object is of type 'unknown'.
    value.test('abc');

    assertIsRegExp(value);

    // %inferred-type: RegExp
    value;

    value.test('abc'); // OK
}

/** An assertion function */
function assertIsRegExp(arg: unknown): asserts arg is RegExp {
    if (! (arg instanceof RegExp)) {
        throw new TypeError('Not a RegExp: ' + arg);
    }
}


let vAny: any = 10;          // We can assign anything to any
let vUnknown: unknown =  10; // We can assign anything to unknown just like any


let s1: string = vAny;     // Any is assignable to anything
// @ts-expect-error: we can't assign vUnknown to any other type (without an explicit assertion)
let s2: string = vUnknown; // Invalid; we can't assign vUnknown to any other type (without an explicit assertion)
let s3: string = vUnknown as string;

// vAny.method();     // Ok; anything goes with any
// @ts-ignore
// vUnknown.method(); // Not ok; we don't know anything about this variable

class Purchase{
    constructor(item: any){

    }
}

// unknown => "I don't know, I don't wanna know"
function buy(item: unknown): Purchase {
    if (item) {
        return new Purchase(item);
    } else {
        throw new TypeError('item is missing');
    }
}


function doSomething(x: unknown){
    if(typeof x === 'string'){
        return x.toUpperCase();
    }
}

function doSomething2(x: any){
    if(typeof x === 'string'){
        return x.toUpperCase();
    }
}

type ObjectLiteralType = {
    first: 1,
    second: 2,
};

type Objte = {
    first: 1,
    second: 2,
};


let json = JSON.parse("55");
// Most expect json to be an object, but it can be a string or a number like this example
console.log(typeof json);


let text = '{"rightQuotes": 5, "name": "mina"}';
json = JSON.parse(text);
console.log(typeof json);


interface Sample{
    rightQuotes: number,
    name: string,
}

let sample: Sample = json as Sample;
console.log(typeof sample);
console.log(sample);

console.log('-----------------------------');

let sample2: Sample = json;
console.log(typeof sample2);
console.log(sample2);
console.log(sample2.name);

console.log('-----------------------------');

// let sample3: Sample = text;
// console.log(typeof sample2);
// console.log(sample2);

// Setting any to the special type any disables type checking:
let v: any = true;
v = "string"; // no error as it can be "any" type
Math.round(v); // no error as it can be "any" type

const graph: [x: number, y: number] = [55.2, 41.3];
let [toto, koko] = graph;
console.log(koko);

const carsa: { type: string, model: string, year: number } = {
    type: "Toyota",
    model: "Corolla",
    year: 2009
};

const nameAgeMap2: { [indexs: string]: number } = {};
nameAgeMap2.Jack = 25; // no error
// nameAgeMap.Mark = "Fifty"; // Error: Type 'string' is not assignable to type 'number'


enum CardinalDirections {
    North,
    East,
    South,
    West
}
let currentDirection = CardinalDirections.North;
// logs 0
console.log(currentDirection);


enum CardinalDirections2 {
    North = 1,
    East,
    South,
    West
}
// logs 1
console.log(CardinalDirections2.North);
// logs 4
console.log(CardinalDirections2.West);

console.log('-----------------------------');

enum StatusCodes {
    NotFound = 404,
    Success = 200,
    Accepted = 202,
    BadRequest = 400
}
// logs 404
console.log(StatusCodes.NotFound);
// logs 200
console.log(StatusCodes.Success);

console.log('-----------------------------');

enum CardinalDirections3 {
    North = 'North',
    East = "East",
    South = "South",
    West = "West"
};
// logs "North"
console.log(CardinalDirections3.North);
// logs "West"
console.log(CardinalDirections3.West);

console.log('-----------------------------');

interface Rectangle2 {
    height: number,
    width: number
}

interface ColoredRectangl extends Rectangle2 {
    color: string
}

const coloredRectanglee: ColoredRectangl = {
    height: 20,
    width: 10,
    color: "red"
};


function adding(a: number, b: number, c?: number) {
    return a + b + (c || 0);
}

function divide({ dividend, divisor }: { dividend: number, divisor: number }) {
    return dividend / divisor;
}

function add101(a: number, b: number, ...rest: number[]) {
    return a + b + rest.reduce((p, c) => p + c, 0);
}



