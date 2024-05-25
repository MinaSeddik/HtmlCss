
// https://exploringjs.com/
// https://exploringjs.com/tackling-ts/toc.html


enum NoYes {
    No = 0,
    Yes = 1, // trailing comma
}

enum NoYes2 {
    No = 'No',
    Yes = 'Yes',
}

enum NoYes3 {
    No,
    Yes,
}

enum HttpRequestField {
    'Accept',
    'Accept-Charset',
    'Accept-Datetime',
    'Accept-Encoding',
    'Accept-Language',
}

function toGerman(value: NoYes): string {
    switch (value) {
        case NoYes.No:
            return 'Nein';
        case NoYes.Yes:
            return 'Ja';
    }
}

HttpRequestField["Accept-Charset"];


enum Perm {
    UserRead     = 1 << 8, // bit 8
    UserWrite    = 1 << 7,
    UserExecute  = 1 << 6,
    GroupRead    = 1 << 5,
    GroupWrite   = 1 << 4,
    GroupExecute = 1 << 3,
    AllRead      = 1 << 2,
    AllWrite     = 1 << 1,
    AllExecute   = 1 << 0,
}

class UnsupportedValueError extends Error {
    constructor(value: never) {
        super('Unsupported value: ' + value);
    }
}

function toGerman3(value: NoYes) {
    if (value === NoYes.No) {
        return 'Nein';
    } else if (value === NoYes.Yes) {
        return 'Ja';
    } else {
        throw new UnsupportedValueError(value);
    }
}


function toGerman4(value: NoYes): string {
    switch (value) {
        case NoYes.No:
            const x: NoYes.No = value;
            return 'Nein';
        case NoYes.Yes:
            const y: NoYes.Yes = value;
            return 'Ja';
    }
}


type NoYesStrings = 'No' | 'Yes';

function toGerman2(value: NoYesStrings): string {
    switch (value) {
        case 'No':
            return 'Nein';
        case 'Yes':
            return 'Ja';
    }
}

// @ts-expect-error: bla bla bla
function toGerman3333(value: NoYesStrings): string {
    switch (value) {
        case 'Yes':
            return 'Ja';
    }
}


class UnsupportedValueError2 extends Error {
    constructor(value: any) {
        super('Unsupported value: ' + value);
    }
}

function toGerman224(value: NoYesStrings): string {
    switch (value) {
        case 'Yes':
            return 'Ja';
        default:
            throw new UnsupportedValueError2(value);
    }
}


abstract class SyntaxTree1 {
    abstract toString(): string;
    abstract evaluate(): number;
}

class NumberValue1 extends SyntaxTree1 {
    constructor(public numberValue: number) {
        super();
    }

    toString(): string {
        return String(this.numberValue);
    }

    evaluate(): number {
        return this.numberValue;
    }

}
class Addition1 extends SyntaxTree1 {
    constructor(public operand1: SyntaxTree1, public operand2: SyntaxTree1) {
        super();
    }

    toString(): string {
        return this.operand1.toString() + ' + ' + this.operand2.toString();
    }

    evaluate(): number {
        return this.operand1.evaluate() + this.operand2.evaluate();
    }

}

const tree = new Addition1(
    new NumberValue1(1),
    new Addition1(
        new NumberValue1(2),
        new NumberValue1(3), // trailing comma
    ), // trailing comma
);

class NumberValue2 {
    constructor(public numberValue: number) {}
}
class Addition2 {
    constructor(public operand1: SyntaxTree2, public operand2: SyntaxTree2) {}
}
type SyntaxTree2 = NumberValue2 | Addition2; // (A)

const tree2 = new Addition2(
    new NumberValue2(1),
    new Addition2(
        new NumberValue2(2),
        new NumberValue2(3),
    ),
);


interface NumberValue3 {
    kind: 'number-value';
    numberValue: number;
}
interface Addition3 {
    kind: 'addition';
    operand1: SyntaxTree3;
    operand2: SyntaxTree3;
}
type SyntaxTree3 = NumberValue3 | Addition3;



const tree3: SyntaxTree3 = { // (A)
    kind: 'addition',
    operand1: {
        kind: 'number-value',
        numberValue: 1,
    },
    operand2: {
        kind: 'addition',
        operand1: {
            kind: 'number-value',
            numberValue: 2,
        },
        operand2: {
            kind: 'number-value',
            numberValue: 3,
        },
    }
};


interface InputStream {
    getNextLine(): string;
}

interface InputStream0 {
    getNextLine(): string | null;
}

type StreamValue = null | string;
interface InputStream2 {
    getNextLine(): StreamValue;
}

const EOF = Symbol('EOF');
type StreamValue2 = typeof EOF | string;


function countComments(is: InputStream) {
    let commentCount = 0;
    while (true) {
        const line = is.getNextLine();
        if (line === null) break;
        if (line.startsWith('#')) { // (A)
            commentCount++;
        }
    }
    return commentCount;
}


type Union = [string] | string;

function logHexValue(x: Union) {
    if (Array.isArray(x)) { // discriminating check
        console.log(x[0]); // OK
    } else {
        // console.log(x.toString(16)); // OK
        console.log(x.toUpperCase()); // OK
    }
}


interface PersonInterface {
    first: string;
}
interface PersonInterface {
    last: string;
}
const jane1: PersonInterface = {
    first: 'Jane',
    last: 'Doe',
};

// @ts-expect-error: Duplicate identifier 'PersonAlias'. (2300)
type PersonAlias = {first: string};
// @ts-expect-error: Duplicate identifier 'PersonAlias'. (2300)
type PersonAlias = {last: string};



interface X {
    a: number
    b: string
}

type Y = {
    a: number
    b: string
};


interface Pointss {
    x: 2;
    y: 3;
}