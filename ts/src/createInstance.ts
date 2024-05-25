
// https://exploringjs.com/
// https://exploringjs.com/tackling-ts/toc.html

interface Class<T> {
    new(...args: any[]): T;
}

function createInstance<T>(AnyClass: Class<T>, ...args: any[]): T {
    return new AnyClass(...args);
}


function serialize<T>(jsonStr: string, clazz: Class<T>): T {
    return new clazz();
}

function cast<T>(AnyClass: Class<T>, obj: any): T {
    if (! (obj instanceof AnyClass)) {
        throw new Error(`Not an instance of ${AnyClass.name}: ${obj}`)
    }
    return obj;
}


function parseObject(jsonObjectStr: string): Object {
    // %inferred-type: any
    const parsed = JSON.parse(jsonObjectStr);
    return cast(Object, parsed);
}
