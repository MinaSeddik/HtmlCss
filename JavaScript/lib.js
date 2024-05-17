export const sqrt = Math.sqrt;


// https://exploringjs.com/es6/index.html


export function square(x) {
    return x * x;
}

export function diag(x, y) {
    return sqrt(square(x) + square(y));
}

export function epsEqu(x, y) {
    return Math.abs(x - y) < Number.EPSILON;
}

Number.My_isSafeInteger = function (n) {
    return (typeof n === 'number' &&
        Math.round(n) === n &&
        Number.MIN_SAFE_INTEGER <= n &&
        n <= Number.MAX_SAFE_INTEGER);
}
