

// https://exploringjs.com/
// https://exploringjs.com/tackling-ts/toc.html


interface MyDataInterface {
    str: string,
    num: number,
    flag: boolean,
    flag2?: boolean,
}

const myData: MyDataInterface = {
    str: "sample String",
    num: 22,
    flag: true,
}

const myData2: MyDataInterface = {
    str: "sample String 2",
    num: 444,
    flag: true,
    flag2: true,
}

interface MyMethodInterface {
    str: string,
    num: number,
    flag: boolean,
    flag2?: boolean,
    doSomething: (value: number) => boolean,
    doSomething2?: (value: number, callback: (str: string) => string) => boolean,
}

const myData3: MyMethodInterface = {
    str: "sample String 232",
    num: 42222,
    flag: true,
    flag2: false,
    doSomething: function (value: number) {
        return value % 2 === 0;
    }
}


interface MyChildMethodInterface extends MyMethodInterface {
    stringy: string,
    doThat: (value: number, callback: (str: string) => number) => boolean,
}

const myData4: MyChildMethodInterface = {
    str: "sample String 232",
    num: 42222,
    flag: true,
    flag2: false,
    stringy: "falsy string",
    doSomething: function (value: number) {
        return value % 2 === 0;
    },
    doThat: function (value: number, callback: (str: string) => number): boolean {
        let result: number = callback('mystr');
        return result === value;
    }
}


interface Point {
    x: number;
    y: number;
}

interface Point {
    z: number;
}

class SomePoint implements Point {
    x: number = 1;
    y = 2;
    z: number = 9;
}


interface MyInt {
    str: string,
    num: number | string | null,
    arr: [string, string, string],
    arr2: Array<string>,
}

let dat: MyInt = {
    str: "sample String",
    num: null,
    arr: ['str1', 'str2', 'str3'],
    arr2: ['str1', 'str2', 'str3', 'str1s', 'str2s', 'strs3'],
}

interface iPair {
    first: number | string | null,
    second: number | string | null,
}

let myVal: iPair = {
    first: "sample String",
    second: "sample String",
}


interface TranslationDict {
    [key: string]: string; // (A)
}

const dict: TranslationDict = {
    'yes': 'sí',
    'no': 'no',
    'maybe': 'tal vez',
};


interface TranslationDict2 {
    [key: string]: any; // (A)

    // Property signature
    myPropertys: boolean;

    // Method signature
    myMethod(str: string): number;

}

const dict2: TranslationDict2 = {
    myPropertys: true,

    'yes': 'sí',
    'no': 'no',
    'maybe': 'tal vez',

    myMethod(str: string): number {
        return 10;
    }

};


interface StringAndNumberKeys {
    [key: string]: Object;

    [key: number]: RegExp;
}

const dict3: StringAndNumberKeys = {
    myPropertys: "true",

    'yes': 'sí',
    'no': 'no',
    'maybe': 'tal vez',
    1: /.*/,

};


interface Personq {
    first: string;
    middle?: string;
    last: string;
}

function computeFullName(person: Personq) { /*...*/
}

interface PointR {
    x: number;
    y: number;
}

function computeDistance1(point: PointR) {
    point.x * point.y;
}

computeDistance1({x: 1, y: 2, z: 3} as PointR); // OK

interface Interf {
    prop1?: string;    // optional field
    prop2: undefined | string;   // required field even if the value is undefined explicitly
}


let valpld: Interf = {
    prop2: undefined
}


interface MyInterfaceD {
    // toString(): string; // inherited property
    prop: number; // own property
}

const obssdj: MyInterfaceD = {
    prop: 123
}
// obj inherits .toString() from Object.prototype.




