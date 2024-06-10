
// https://exploringjs.com/
// https://exploringjs.com/tackling-ts/toc.html

interface PersonTest {
    name: string;
    age: number;
}

// `keyof PersonTest` here creates a union type of "name" and "age", other strings will not be allowed
function printPersonProperty(personTest: PersonTest, property: keyof PersonTest) {
    console.log(`Printing person property ${property}: "${personTest[property]}"`);
}


let persontst = {
    name: "Max",
    age: 27
};
printPersonProperty(persontst, "name"); // Printing person property name: "Max"



console.log('-----------------------------');


type StringMap = { [key: string]: unknown };
// `keyof StringMap` resolves to `string` here
function createStringPair(property: keyof StringMap, value: string): StringMap {
    return { [property]: value };
}

let stringMap : StringMap = createStringPair("name", "Monmon");
console.log(stringMap.name);
console.log(stringMap["name"]);

console.log('-----------------------------');

function printMileage(mileage: number | null | undefined) {
    console.log(`Mileage: ${mileage ?? 'Not Available'}`);
}

printMileage(null); // Prints 'Mileage: Not Available'
printMileage(0); // Prints 'Mileage: 0'

console.log('-----------------------------');

function getValue(): string | undefined {
    return 'hello';
    // return undefined;
}
let value3232 = getValue();
// let dummy_val: any;
// value = dummy_val;
console.log('value length: ' + value3232!.length);

console.log('-----------------------------');

let arraylll: number[] = [1, 2, 3];
let valuelll = arraylll[0]; // with `noUncheckedIndexedAccess` this has the type `number | undefined`
console.log('value valuelll: ' + valuelll);



