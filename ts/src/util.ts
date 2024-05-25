
// https://exploringjs.com/
// https://exploringjs.com/tackling-ts/toc.html

function toStrings(num: number) {
    return String(num);
}

const undef: undefined = undefined;

type Age = number;
const age: Age = 82;


let arr1: number[] = [];
let arr2: Array<number> = [];

let point: [number, number] = [7, 5];

const entries = Object.entries({a: 1, b: 2})


const toString56: (num: number) => string = // (A)
    (num: number) => String(num); // (B)


const toString2 = (num: number) => String(num);

function stringify123(callback: (num: number) => string) {
    return callback(123);
}

stringify123((n) => String(n));


function convert2Str(num: number) {
    return String(num);
}

let convert2Str_2: (num: number) => string = (num: number) => String(num);

function stringify1234(callback: (num: number) => string): string {
    return callback(123);
}


function stringify12345(value: number, callback: (num: number) => string): string {
    return callback(value);
}


function f1(): void {
    return undefined;
}


function f2(): void {
}


function f3(): void {
    // @ts-expect-error: Type '"abc"' is not assignable to type 'void'. (2322)
    return 'abc';
}


function stringify123322(callback?: (num: number) => string) {
    if (callback === undefined) {
        callback = String;
    }
    return callback(123); // (A)
}


function createPoint(x: number = 0, y: number = 0): [number, number] {
    return [x, y];
}


function joinNumbers(...nums: number[]): string {
    return nums.join('-');
}


function getScore(stringOrNumber: string | number): number {
    if (typeof stringOrNumber === 'string'
        && /^\*{1,5}$/.test(stringOrNumber)) {
        return stringOrNumber.length;
    } else if (typeof stringOrNumber === 'number'
        && stringOrNumber >= 1 && stringOrNumber <= 5) {
        return stringOrNumber
    } else {
        throw new Error('Illegal value: ' + JSON.stringify(stringOrNumber));
    }
}

let maybeNumber: null | number = null;
maybeNumber = 123;


// let maybeNumber2: number = null;
// maybeNumber = 123;

let maybeStr: string | null = null;
maybeStr = "123";


let maybeObj: object | null = null;
maybeObj = {};

console.log(typeof maybeNumber);
// console.log(typeof maybeNumber2);
console.log(typeof maybeStr);
console.log(typeof maybeObj);


function stringify123534333(
    callback: null | ((num: number) => string)) {
    const num = 123;
    if (callback === null) { // (A)
        callback = String;
    }
    return callback(num); // (B)
}

// assert.throws(() => stringify123534333());

interface Point {
    x: number;
    y: number;
}

function pointToString(pt: Point) {
    return `(${pt.x}, ${pt.y})`;
}

type Point2 = {
    x: number;
    y: number;
};

function pointToString2(pt: { x: number, y: number }) {
    return `(${pt.x}, ${pt.y})`;
}

interface Person {
    name: string;
    company?: string;
}


const john: Person = {
    name: 'John',
};
const jane: Person = {
    name: 'Jane',
    company: 'Massive Dynamic',
};


interface Point3 {
    x: number;
    y: number;

    distance(other: Point): number;
}


interface HasMethodDef {
    simpleMethod(flag: boolean): void;
}

interface HasFuncProp {
    simpleMethod: (flag: boolean) => void;
}

const objWithMethod: HasMethodDef = {
    simpleMethod(flag: boolean): void {
    },
};
const objWithMethod2: HasFuncProp = objWithMethod;

const objWithOrdinaryFunction: HasMethodDef = {
    simpleMethod: function (flag: boolean): void {
    },
};
const objWithOrdinaryFunction2: HasFuncProp = objWithOrdinaryFunction;

const objWithArrowFunction: HasMethodDef = {
    simpleMethod: (flag: boolean): void => {
    },
};
const objWithArrowFunction2: HasFuncProp = objWithArrowFunction;

type MyType = string;

class MyClass {
    // readonly myProperty: MyType;
    // private myProperty2: MyType;
    // public myProperty3: MyType;
    private readonly DATE_FORMAT: MyType = 'yyyy-MM-dd';

    constructor(private readonly myProperty: MyType, private myProperty2: string, public myProperty3: string) {
        this.myProperty = myProperty;
        this.myProperty2 = myProperty2;
        this.myProperty3 = myProperty3;
    }
}

let myclaz: MyClass = new MyClass("p1", "p2", "p3");

// myclaz.myProperty = "sss"
// myclaz.myProperty2 = "sss"
// myclaz.myProperty3 = "dsdsdsds"

interface PointW {
    x: number;
    y: number;
}

type PointCopy1 = {
    [Key in keyof PointW]: Point[Key]; // (A)
};


interface AddsStrings {
    add(str: string): this;
}

class StringBuilder implements AddsStrings {
    private result = '';

    add(str: string): this {
        this.result += str;
        return this;
    }

    toString(): string {
        return this.result;
    }
}

let stringBuilder: AddsStrings = new StringBuilder();
stringBuilder.add('my')
    .add(' name')
    .add(' is')
    .add(' mina.');

let fullStr: string = stringBuilder.toString();


interface ExampleInterface {
    // Property signature
    myProperty: boolean;

    // Method signature
    myMethod(str: string): number;

    // Index signature   ???? need more info
    [key: string]: any;

    // Call signature
    (num: number): string;

    // Construct signature
    new(str: string): ExampleInstance;
}
interface ExampleInstance {}

