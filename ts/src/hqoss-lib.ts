
// https://exploringjs.com/
// https://exploringjs.com/tackling-ts/toc.html


import {isBoolean} from "@hqoss/guards";


let val: boolean | number = false;

if (isBoolean(val)) {
    // TypeScript will infer val: boolean
    console.log("this is a boolean");
} else {
    // TypeScript will infer val: number
    console.log("this is a number");
}


