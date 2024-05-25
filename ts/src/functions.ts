
// https://exploringjs.com/
// https://exploringjs.com/tackling-ts/toc.html


function add(x: number, y: number): number {
    return x + y;
}

const add2 = function (x: number, y: number): number {
    return x + y;
}

const myAdd: (x: number, y: number) => number = (x: number, y: number) => x + y;
const myAddTest: (x: number, y: number) => number = (x: number, y: number) => x + y;

function greeting(fullName: string, callbaclFunc: (name: string) => string) {
    return callbaclFunc(fullName);
}


interface ArthMethod {
    add(x: number, y: number): number;
}

interface HasArthAddFunc {
    add: (x: number, y: number) => number;
}


const objWithArthMethod: HasArthAddFunc = {
    add(x: number, y: number): number {
        return x + y;
    }
};

const wobjWithMethod2: HasArthAddFunc = {
    add(x: number, y: number): number {
        return x + y;
    }
}


const objWithArithMethod222: HasArthAddFunc = {
    add(x: number, y: number): number {
        return x + y;
    }
};

function repeat1(str: string, times: number): string { // (A)
    return str.repeat(times);
}

let strout: string = repeat1('*', 5);
console.log(strout)

const repeat2 = (str: string, times: number): string => {
    return str.repeat(times);
};

console.log(repeat1('#', 15))

const repeat3 = (str: string, times: number): string => str.repeat(times);

console.log(repeat3('$', 10))

type Repeat = (str: string, times: number) => string;

type StringPredicate = (str: string) => boolean;
const pred1: StringPredicate = (x) => x.length > 0;
console.log(pred1('test-length'))

function pred3(...[str]: Parameters<StringPredicate>): ReturnType<StringPredicate> {
    return str.length > 0;
}


['a', 'b', 'c'].map((str) => str + str)


function trim1(str?: string): string {
    // Internal type of str:
    // %inferred-type: string | undefined
    str;

    if (str === undefined) {
        return '';
    }
    return str.trim();
}

function trim2(str: undefined | string): string {
    // Internal type of str:
    // %inferred-type: string | undefined
    str;

    if (str === undefined) {
        return '';
    }
    return str.trim();
}

function trim3(str = ''): string {
    // Internal type of str:
    // %inferred-type: string
    str;

    return str.trim();
}

function trim4(str: string = ''): string {
    return str.trim();
}


function join(separator: string, ...parts: string[]) {
    return parts.join(separator);
}


function repeat13(...[str, times]: [string, number]): string {
    return str.repeat(times);
}


function padStart({str, len, fillStr = ' '}
                      : { str: string, len: number, fillStr: string }): string { // (B)
    return str.padStart(len, fillStr);
}

strout = padStart({str: '7', len: 3, fillStr: '0'})
console.log(strout)


interface EventSource {
    addEventListener(
        type: string,
        listener: (this: EventSource, ev: Event) => any,
        options?: boolean | AddEventListenerOptions
    ): void;

    // ···
}

function toIsoString(this: Date): string {
    return this.toISOString();
}

toIsoString.call(new Date());


interface Customer {
    id: string;
    fullName: string;
}

const jane111 = {id: '1234', fullName: 'Jane Bond'};
const lars1 = {id: '5678', fullName: 'Lars Croft'};
const idToCustomer = new Map<string, Customer>([
    ['1234', jane111],
    ['5678', lars1],
]);

function getFullName(customerOrMap: Customer | Map<string, Customer>, id?: string): string {
    if (customerOrMap instanceof Map) {
        if (id === undefined) throw new Error();
        const customer = customerOrMap.get(id);
        if (customer === undefined) {
            throw new Error('Unknown ID: ' + id);
        }
        customerOrMap = customer;
    } else {
        if (id !== undefined) throw new Error();
    }
    return customerOrMap.fullName;
}

function getFullName2(customer: Customer): string {
    return customer.fullName;
}


let fname: string = getFullName(idToCustomer, '5678')
console.log(fname)

let fname2 = getFullName(lars1)
console.log(fname2)


interface GetFullNameInterface {
    (customerOrMap: Customer): string;

    (customerOrMap: Map<string, Customer>, id: string): string;
}


const getFullNameInt: GetFullNameInterface = (
    customerOrMap: Customer | Map<string, Customer>,
    id?: string
): string => {
    if (customerOrMap instanceof Map) {
        if (id === undefined) throw new Error();
        const customer = customerOrMap.get(id);
        if (customer === undefined) {
            throw new Error('Unknown ID: ' + id);
        }
        customerOrMap = customer;
    } else {
        if (id !== undefined) throw new Error();
    }
    return customerOrMap.fullName;
}


class StringBuffer {
    #data = '';

    add(num: number): this;
    add(bool: boolean): this;
    add(str: string): this;
    add(value: any): this {
        this.#data += String(value);
        return this;
    }

    toString() {
        return this.#data;
    }
}

const sb = new StringBuffer();
sb.add('I can see ')
    .add(3)
    .add(' monkeys!');

const trg1: (x: RegExp) => Object = (x: Object) => /abc/;

const trg2: () => void = () => new Date();

let ddddddd = trg2();
console.log(ddddddd)


const trg3: () => Object = () => new Date();

let dddddsss = trg3();
console.log(dddddsss)


const trg4: () => Date = () => new Date();

let dddd = trg4();
console.log(dddd);


// const trg321: () => string = (x: string) => 'abc';
const trg4223333: (x: string) => string = () => 'abc';

['a', 'b'].map(x => x + x)