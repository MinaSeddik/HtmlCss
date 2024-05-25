
// https://exploringjs.com/
// https://exploringjs.com/tackling-ts/toc.html

import assert from "node:assert";

class MyClass2 {

    public static readonly MAGIC_NUMBER: number = 1;

    static staticPublicMethod() {
        return 2;
    }
}


class MyClass3 {
    #privateField = 1;

    #privateMethod() {
        return 2;
    }

    static accessPrivateMembers() {
        // Private members can only be accessed from inside class definitions
        const inst3 = new MyClass3();
        // assert.equal(inst3.#privateField, 1);
        // assert.equal(inst3.#privateMethod(), 2);
    }
}

MyClass3.accessPrivateMembers();


class MyClass5 {
    #name = 'Rumpelstiltskin';

    /** Prototype getter */
    get name() {
        return this.#name;
    }

    /** Prototype setter */
    set name(value) {
        this.#name = value;
    }
}


class MyClass6 {
    public* publicPrototypeGeneratorMethod() {
        yield 'hello';
        yield 'world';
    }

    public* publicPrototypeGeneratorMethod2() {
        for (let i = 0; i < 10; i++) {
            yield i;
        }
    }

}


const inst6 = new MyClass6();

for (const x of inst6.publicPrototypeGeneratorMethod())
    console.log(x);

for (const x of inst6.publicPrototypeGeneratorMethod2())
    console.log(x);


class MyClass7 {
    public async publicPrototypeAsyncMethod() {
        const result = await Promise.resolve('abc');
        return result + result;
    }
}

const inst7 = new MyClass7();
inst7.publicPrototypeAsyncMethod()
    .then(result => console.log(result + '$$$'));


const publicInstanceFieldKey = Symbol('publicInstanceFieldKey');
const publicPrototypeMethodKey = Symbol('publicPrototypeMethodKey');

class MyClass8 {

    private readonly collection: Array<String> = ['Mango', 'Watermelon', 'Dates'];

    [publicInstanceFieldKey] = 1;

    [publicPrototypeMethodKey]() {
        return 2;
    }

    [Symbol.iterator]() {
        for (const item of this.collection) {
            // yield item;
        }
    }

}


const inst8 = new MyClass8();
let m: number = inst8[publicInstanceFieldKey]
let n: number = inst8[publicPrototypeMethodKey]();

class ClassA {
    static staticMthdA() {
    }

    constructor(protected instPropA: any) {
        this.instPropA = instPropA;
    }

    prototypeMthdA() {
    }
}

class ClassB extends ClassA {
    static staticMthdB() {
    }

    constructor(instPropA: any, private instPropB: any) {
        super(instPropA);
        this.instPropB = instPropB;
    }

    prototypeMthdB() {
    }

    private prototypeMthdC() {
    }
}

const instB = new ClassB(0, 1);


class PersonPrivateField {
    #name: string;

    constructor(name: string) {
        this.#name = name;
    }

    sayHello() {
        return `Hello ${this.#name}!`;
    }

    get name() {
        return this.#name;
    }

    set name(name: string) {
        this.#name = name;
    }

}

const johnObj = new PersonPrivateField('John');


class PrivatePerson {
    protected readonly name: string;

    constructor(name: string) {
        this.name = name;
    }

    sayHello() {
        return `Hello ${this.name}!`;
    }
}

class PrivateEmployee extends PrivatePerson {
    private readonly company: string;

    constructor(name: string, company: string) {
        super(name);
        this.company = company;
    }

    sayHello() {
        return `Hello ${this.name} from ${this.company}!`; // (A)
    }
}


class DataContainer {
    #data: string;

    static async create() {
        const data = await Promise.resolve('downloaded'); // (A)
        return new this(data);
    }

    private constructor(data: string) {
        this.#data = data;
    }

    getData() {
        return 'DATA: ' + this.#data;
    }
}


class Singletone {
    static #instance: Singletone;

    static createInstance() {
        if (!Singletone.#instance) {
            Singletone.#instance = new this();
        }

        return Singletone.#instance;
    }

    private constructor() {
    }

    getData() {
        // return 'DATA: ' + this.#data;
    }
}


Singletone.createInstance();

class Pointe {
    x: number;
    y: number;

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }
}

class Pointg {
    x = 0;
    y = 0;

    // No constructor needed
}

class Pointww {
    x!: number; // (A)
    y!: number; // (B)
    constructor() {
        this.initProperties();
    }

    initProperties() {
        this.x = 0;
        this.y = 0;
    }
}

// Helper interface for the parameter properties
interface CompilerErrorProps {
    line: number,
    description: string,
}

class CompilerError implements CompilerErrorProps { // (A)
    line!: number;
    description!: string;

    constructor(props: CompilerErrorProps) {
        Object.assign(this, props); // (B)
    }
}

// Using the class:
const err = new CompilerError({
    line: 123,
    description: 'Unexpected token',
});


class Point1 {
    constructor(public x: number, public y: number) {
    }
}

class StringBuilderrr {
    string = '';

    add(str: string) {
        this.string += str;
    }
}

abstract class Printable {
    toString() {
        const out = new StringBuilderrr();
        this.print(out);
        return out.string;
    }

    abstract print(out: StringBuilderrr): void;
}

class Entries extends Printable {
    entries: Entry[];

    constructor(entries: Entry[]) {
        super();
        this.entries = entries;
    }

    print(out: StringBuilderrr): void {
        for (const entry of this.entries) {
            entry.print(out);
        }
    }
}

class Entry extends Printable {
    key: string;
    value: string;

    constructor(key: string, value: string) {
        super();
        this.key = key;
        this.value = value;
    }

    print(out: StringBuilderrr): void {
        out.add(this.key);
        out.add(': ');
        out.add(this.value);
        out.add('\n');
    }
}


const entries2 = new Entries([
    new Entry('accept-ranges', 'bytes'),
    new Entry('content-length', '6518'),
]);


class Counter extends Object {
    static createZero() {
        return new Counter(0);
    }

    // value: number;

    constructor(public value: number) {
        super();
        this.value = value;
    }

    increment() {
        this.value++;
    }
}


// Static method
const myCounter: Counter = Counter.createZero();
assert.ok(myCounter instanceof Counter);
assert.equal(myCounter.value, 0);

// Instance method
myCounter.increment();
assert.equal(myCounter.value, 1);

interface CountingService {
    value: number;

    increment(): void;
}

const myCounter2: CountingService = new Counter(3);


// Converting JSON to instances
interface JsonStatic {
    fromJson(json: any): JsonInstance;
}

// Converting instances to JSON
interface JsonInstance {
    toJson(): any;
}

// Very important for data classes
class PersonJ implements JsonInstance {

    static fromJson(json: any): PersonJ {
        if (typeof json !== 'string') {
            throw new TypeError(json);
        }
        return new PersonJ(json);
    }

    name: string;

    constructor(name: string) {
        this.name = name;
    }

    toJson(): any {
        return this.name;
    }
}

const myperson: Person = PersonJ.fromJson('{name: "John Smith"}');

// Assign the class to a type-annotated variable
const personImplementsJsonStatic: JsonStatic = PersonJ;


class Color {
    name: string;

    constructor(name: string) {
        this.name = name;
    }
}

class PersonCC {
    name: string;

    constructor(name: string) {
        this.name = name;
    }
}

const personcc: Person = new PersonCC('Jane');
const color: Color = personcc; // (A)

class Point {
    x: number;
    y: number;

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }
}

function createPoint(PointClass: typeof Point, x: number, y: number) { // (A)
    return new PointClass(x, y);
}

const point = createPoint(Point, 3, 6);
assert.ok(point instanceof Point);

function createPoint2(
    PointClass: new (x: number, y: number) => Point, // (A)
    x: number, y: number
) {
    return new PointClass(x, y);
}


type Classu<T> = new (...args: any[]) => T;


interface Shape {
    getArea: () => number;
}

class Rectangle implements Shape {

    public constructor(protected readonly width: number, protected readonly height: number) {
    }

    public getArea(): number {
        return this.width * this.height;
    }

    public toString(): string {
        return `Rectangle[width=${this.width}, height=${this.height}]`;
    }
}


class Square extends Rectangle {
    public constructor(width: number) {
        super(width, width);
    }

    // this toString replaces the toString from Rectangle
    public override toString(): string {
        return `Square[width=${this.width}]`;
    }
}
