
// https://exploringjs.com/
// https://exploringjs.com/tackling-ts/toc.html

import assert from "node:assert";

function getScore(value: number | string): number {
    if (typeof value === 'number') { // (A)
        // %inferred-type: number
        value;
        return value;
    }
    if (typeof value === 'string') { // (B)
        // %inferred-type: string
        value;
        return value.length;
    }
    throw new Error('Unsupported value: ' + value);
}

assert.equal(getScore('*****'), 5);
assert.equal(getScore(3), 3);

function getScore2(value: number | string): number {
    switch (typeof value) {
        case 'number':
            // %inferred-type: number
            value;
            return value;
        case 'string':
            // %inferred-type: string
            value;
            return value.length;
        default:
            throw new Error('Unsupported value: ' + value);
    }
}


function parseStringLiteral(stringLiteral: string): string {
    const result: unknown = JSON.parse(stringLiteral);
    if (typeof result === 'string') { // (A)
        return result;
    }
    throw new Error('Not a string literal: ' + stringLiteral);
}


function func(value: Function | Date | number[]) {
    if (typeof value === 'function') {
        // %inferred-type: Function
        value;
    }

    if (value instanceof Date) {
        // %inferred-type: Date
        value;
        (value as Date).getDay();
    }

    if (Array.isArray(value)) {
        // %inferred-type: number[]
        value;
    }
}


type FirstOrSecond =
    | { first: string }
    | { second: string };

function funcv(firstOrSecond: FirstOrSecond) {
    if ('second' in firstOrSecond) {
        // %inferred-type: { second: string; }
        firstOrSecond;
    }
}

function funcsas(firstOrSecond: FirstOrSecond) {
    // @ts-expect-error: Property 'second' does not exist on type 'FirstOrSecond'. [...]
    if (firstOrSecond.second !== undefined) {
        // ···
    }
}


function funcwqee(obj: object) {
    if ('name' in obj) {
        // %inferred-type: object
        obj;

        // // @ts-expect-error: Property 'name' does not exist on type 'object'.
        obj.name;
    }
}


const mixedValues: ReadonlyArray<undefined | null | number> = [1, undefined, 2, null];

if (mixedValues.every(isNotNullish)) {
    // %inferred-type: readonly (number | null | undefined)[]
    mixedValues; // (A)
}

function isNotNullish<T>(value: T): value is NonNullable<T> { // (A)
    return value !== undefined && value !== null;
}


function isFunction(value: unknown): value is Function {
    return typeof value === 'function';
}

function isFunction2(value: any): value is Function {
    try {
        value(); // (A)
        return true;
    } catch {
        return false;
    }
}

function func31111111(arg: unknown) {
    if (isFunction(arg)) {
        // %inferred-type: Function
        arg; // type is narrowed
    }
}


function isArrayWithInstancesOf<T>(
    arr: any, Class: new (...args: any[]) => T): arr is Array<T> {

    if (!Array.isArray(arr)) {
        return false;
    }

    if (!arr.every(elem => elem instanceof Class)) {
        return false;
    }

    // %inferred-type: any[]
    arr; // (A)

    return true;
}

const valuesss: unknown = {};
if (isArrayWithInstancesOf(valuesss, RegExp)) {
    // %inferred-type: RegExp[]
    valuesss;
}


function removeFilenameExtension(filename: string) {
    const dotIndex = filename.lastIndexOf('.');
    assert(dotIndex >= 0); // (A)
    return filename.slice(0, dotIndex);
}


function assertTrue(condition: boolean): asserts condition {
    if (!condition) {
        throw new Error();
    }
}



