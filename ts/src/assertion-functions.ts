

// https://exploringjs.com/
// https://exploringjs.com/tackling-ts/toc.html


function assertFnArray(value: unknown): asserts value is number[] {

    // Checking if the 'value' is not an array or if it has non-number items
    if (!Array.isArray(value) ||
        value.some((item) => typeof item !== 'number')) {
        throw new Error("Assertion failed");
    }
}


const arr: unknown = [1, 2, 3, 4];

// Applying the assertion function to 'arr'
assertFnArray(arr);


type PersonE = { name: string; age: number };

function assertPerson(value: unknown): asserts value is PersonE {
    // Checking if 'value' is an object, not null or undefined, and its 'name' is a string and 'age' is a number
    if (
        typeof value !== 'object' ||
        !value ||
        typeof (value as PersonE).name !== 'string' ||
        typeof (value as PersonE).age !== 'number'
    ) {
        throw new Error("Assertion failed");
    }
}

const obj: unknown = {name: "Geek1", age: 23};

// Applying the assertion function 'assertPerson' to 'obj'
assertPerson(obj);

function assertIsNumber(value: any): asserts value is number {
    if (typeof value !== 'number') {
        throw new TypeError();
    }
}

function isString(value: unknown): value is string {
    return typeof value === 'string';
}


function getLengthOfValue(strMap: Map<string, string>, key: string): number {
    if (strMap.has(key)) {
        const value = strMap.get(key);

        // %inferred-type: string | undefined
        value; // before type check

        // We know that value can’t be `undefined`
        if (value === undefined) { // (A)
            throw new Error();
        }

        // %inferred-type: string
        value; // after type check

        return value.length;
    }
    return -1;
}
