
// https://exploringjs.com/
// https://exploringjs.com/tackling-ts/toc.html
// https://www.w3schools.com/typescript/typescript_utility_types.php

// Partial changes all the properties in an object to be optional.
interface Pointg {
    x: number;
    y: number;
}

let pointPart: Partial<Pointg> = {}; // `Partial` allows x and y to be optional
pointPart.x = 10;

console.log(pointPart.x);
console.log(pointPart.y);
console.log('-----------------------------');




// Required changes all the properties in an object to be required.
interface Caro {
    make: string;
    model: string;
    mileage?: number;
}

let myCar: Required<Caro> = {
    make: 'Ford',
    model: 'Focus',
    mileage: 12000 // `Required` forces mileage to be defined
};
console.log(myCar.make);
console.log(myCar.model);
console.log(myCar.mileage);
console.log('-----------------------------');





// Record is a shortcut to defining an object type with a specific key type and value type.
// Record<string, number> is equivalent to { [key: string]: number }
const nameAgeMap: Record<string, number> = {
    'Alice': 21,
    'Bob': 25,
    'john': 58,
};
console.log(nameAgeMap);
console.log('-----------------------------');



// Omit removes keys from an object type.
interface Personage {
    name: string;
    age: number;
    location?: string;
}

const bob: Omit<Personage, 'age' | 'location'> = {
    name: 'Bob'
    // `Omit` has removed age and location from the type and they can't be defined here
};
console.log(bob);
console.log('-----------------------------');



// Pick removes all but the specified keys from an object type.
interface PersonBob{
    name: string;
    age: number;
    location?: string;
}

const bobe: Pick<PersonBob, 'name'> = {
    name: 'Bob'
    // `Pick` has only kept name, so age and location were removed from the type and they can't be defined here
};
console.log(bobe);
console.log('-----------------------------');



// Exclude removes types from a union.
type Primitive = string | number | boolean
const value: Exclude<Primitive, string> = true; // a string cannot be used here since Exclude removed it from the type.



// ReturnType extracts the return type of a function type.
type PointGenerator = () => { x: number; y: number; };
const pointdw: ReturnType<PointGenerator> = {
    x: 10,
    y: 20
};



// Parameters extracts the parameter types of a function type as an array.
type PointPrinter = (p: { x: number; y: number; }) => void;
const pointh: Parameters<PointPrinter>[0] = {
    x: 10,
    y: 20
};


// Readonly is used to create a new type where all properties are readonly, meaning they cannot be modified once assigned a value.
interface PersonY {
    name: string;
    age: number;
}
const person: Readonly<PersonY> = {
    name: "Dylan",
    age: 35,
};
// @ts-expect-error: error TS2540: Cannot assign to 'name' because it is a read-only property.
person.name = 'Israel'; // prog.ts(11,8): error TS2540: Cannot assign to 'name' because it is a read-only property.





