
// https://exploringjs.com/
// https://exploringjs.com/tackling-ts/toc.html

const data: object = ['a', 'b', 'c']; // (A)

// @ts-expect-error
data.length; // (B)

let len: number = (data as Array<string>).length;
console.log(len);


interface Named {
    name: string;
}

function getName(obj: object): string {
    if (typeof (obj as Named).name === 'string') { // (A)
        return (obj as Named).name; // (B)
    }
    return '(Unnamed)';
}

let inp: Named = {name: 'this is a string'};
let out: String = getName(inp)
console.log(out);

type Dict = {[k:string]: any};

function getPropertyValue(dict: unknown, key: string): any {
    if (typeof dict === 'object' && dict !== null && key in dict) {
        // %inferred-type: object
        dict;

        //// @ts-expect-error: Element implicitly has an 'any' type because
        // expression of type 'string' can't be used to index type '{}'.
        // [...]
        dict[key];

        return (dict as Dict)[key]; // (A)
    } else {
        throw new Error();
    }
}


class Point1 {
    // @ts-expect-error: Property 'x' has no initializer and is not definitely assigned in the constructor.
    x: number;

    // @ts-expect-error: Property 'y' has no initializer and is not definitely assigned in the constructor.
    y: number;

    constructor() {
        this.initProperties();
    }
    initProperties() {
        this.x = 0;
        this.y = 0;
    }
}

class Point21 {
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


let x: unknown = 'hello';
console.log((x as string).length);

let x2: unknown = 4;
console.log((x2 as string).length); // prints undefined since numbers don't have a length


let x3: unknown = 'hello';
console.log((<string>x).length);
