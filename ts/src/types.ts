
// https://exploringjs.com/
// https://exploringjs.com/tackling-ts/toc.html

type TPoint = {
    x: number;
    y: number;
};

let d1: TPoint = {
    x: 1,
    y: 1,
}


type SetPoint = (x: number, y: number) => number;

let setPoint: SetPoint = function (x: number, y: number) {
    return x + y;
}
setPoint(15,25);


type TPoint2 = {
    x: number;
    y: number;
    z?: number;
    doThis: (x: number, y: number) => string;
};

let d2: TPoint2 = {
    x: 1,
    y: 1,
    doThis: function (x: number, y: number) {
        return "Hello";
    }
}

let d3: TPoint2 = {
    x: 1,
    y: 1,
    z: 10,
    doThis: function (x: number, y: number) {
        return "Hello";
    }
}

// primitive
type Name = string;


// object
type PartialPointX = { x: number; };
type PartialPointY = { y: number; };
type PartialPointZ = { y: Name; };

// union
type PartialPoint = PartialPointX | PartialPointY;

type Pointtype = PartialPointX & { y: number; };



type Pair = [first: number, second: number];
type Pairs = {first: number, second: number};

let yyy: Pair = [5, 10]

let ddddd: Pairs = {first: 5, second: 10};


type Fruit = 'apple' | 'pear' | 'orange';
type Vegetable = 'broccoli' | 'carrot' | 'lettuce';







