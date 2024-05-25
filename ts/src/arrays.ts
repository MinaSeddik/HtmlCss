
// https://exploringjs.com/
// https://exploringjs.com/tackling-ts/toc.html

const myStringArray: string[] = ['fee', 'fi', 'fo', 'fum'];
const myStringArray1: (number | string)[] = ['fee', 'fi', 'fo', 'fum'];
const myStringArray2: (() => boolean)[] = [() => true, () => false];


const myStringArray3: Array<string> = ['fee', 'fi', 'fo', 'fum'];
const myStringArray4: Array<null | string> = ['fee', 'fi', 'fo', 'fum', null];
const myStringArray2d: Array<() => boolean> = [() => true, () => false];


const yes: [string, string, boolean] = ['oui', 'sí', true];


interface StringArray {
    [index: number]: string;
}

const strArr: StringArray = ['Huey', 'Dewey', 'Louie'];

interface FirstNamesAndLastName {
    [index: number]: string;

    lastName: string;
}

const ducks: FirstNamesAndLastName = {
    0: 'Huey',
    1: 'Dewey',
    2: 'Louie',
    lastName: 'Duck',
};


const arr32 = [123, 'abc'];
const arr3222: (number | string)[] = [123, 'abc'];


const rockCategories: readonly (string)[] =
    ['igneous', 'metamorphic', 'sedimentary'] as const;

console.log(rockCategories)

const testArray: (string)[] = ['AAA', 'BBB'];
let strValue: string = testArray[5];

console.log(strValue)