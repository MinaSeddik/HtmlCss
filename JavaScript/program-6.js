// https://exploringjs.com/es6/index.html

function asyncFuncTest() {
    return new Promise(
        function (resolve, reject) {

            let results = "";
            resolve(results);

            let error = "";
            reject(error);
        });
}


function asyncFunc1() {
    return new Promise(
        function (resolve, reject) {

            let results = "";
            resolve(results);

            let error = "";
            reject(error);
        });
}


function asyncFunc2() {
    return new Promise(
        function (resolve, reject) {

            let results = "";
            resolve(results);

            let error = "";
            reject(error);
        });
}


asyncFuncTest()
    .then(result => {
    })    // then() always returns a Promise, which enables you to chain method calls
    .then(result1 => {

        // Use result1
        return asyncFunction2(); // (A)
    })
    .then(result => {
    }) // (B) //the callback from line B can pick up the settlement of asyncFunction2’s Promise.
    .catch(error => {
    });

// they are executed sequentially, one at a time
asyncFunc1()
    .then(() => asyncFunc2());

// executed in parallel (a fork in Unix process terminology):
asyncFunc1();
asyncFunc2();


// Promise.all() enables you to be notified once all results are in.
// Its input is an Array of Promises,
// its output a single Promise that is fulfilled with an Array of the results.
Promise.all([
    asyncFunc1(),
    asyncFunc2(),
])
    .then(([result1, result2]) => {

    })
    .catch(err => {
        // Receives first rejection among the Promises

    });


function asyncFunc() {
    return new Promise((resolve, reject) => { // (A)
        setTimeout(() => resolve('DONE'), 100); // (B)
    });
}

asyncFunc()
    .then(x => console.log('Result: ' + x));

console.log(">>>==========================================<<<");

async function main() {
    const x = await asyncFunc(); // (A)  Line A: Wait until asyncFunc() is finished.
    console.log('Result: ' + x); // (B)   Then log its result x.

    // Same as:
    // asyncFunc()
    // .then(x => console.log('Result: '+x));
}

main();

console.log(">>>==========================================<<<");

function asyncFunc3() {
    const blank = [];
    setTimeout(() => blank.push('DONE FROM ARRAY'), 100);
    return blank;
}

const blank = asyncFunc3();
console.log("is it available yet ? => " + blank[0]);

// Wait until the value has been filled in
setTimeout(() => {
    const x = blank[0]; // (A)
    console.log('Result: ' + x);
}, 200);

console.log(">>>==========================================<<<");

function asyncFunc4() {
    const eventEmitter = {success: []};

    setTimeout(() => { // (A)
        for (const handler of eventEmitter.success) {
            handler('Handle DONE');
        }
    }, 100);


    return eventEmitter;
}

asyncFunc4()
    .success.push(x => console.log('Result: ' + x)); // (B)

console.log(">>>==========================================<<<");

const p = new Promise(
    function (resolve, reject) { // (A)

        let value = true;
        if (value) {
            resolve(value); // success
        } else {
            let reason = "something went wrong !!!"
            reject(reason); // failure
        }
    });

p
    .then(value => { /* fulfillment */
    })
    .catch(error => { /* rejection */
    });

console.log(">>>==========================================<<<");

/*
// import {readFile} from 'fs';
// const fs = require("fs");
import * as fs from 'fs';

function readFilePromisified(filename) {
    return new Promise(
        function (resolve, reject) {
            fs.readFile(filename, {encoding: 'utf8'},
                (error, data) => {
                    if (error) {
                        reject(error);
                    } else {
                        resolve(data);
                    }
                });
        });
}

let fileName = "/home/mina/Desktop/README.txt"
readFilePromisified(fileName)
    .then(text => {
        console.log(text);
    })
    .catch(error => {
        console.log(error);
    });
*/

console.log(">>>==========================================<<<");

function httpGet(url) {
    return new Promise(
        function (resolve, reject) {
            const request = new XMLHttpRequest();

            request.onload = function () {
                if (this.status === 200) {
                    // Success
                    resolve(this.response);
                } else {
                    // Something went wrong (404 etc.)
                    reject(new Error(this.statusText));
                }
            };

            request.onerror = function () {
                reject(new Error('XMLHttpRequest Error: ' + this.statusText));
            };

            request.open('GET', url);
            request.send();
        });
}

/*
httpGet('http://example.com/file.txt')
    .then(
        function (value) {
            console.log('Contents: ' + value);
        },
        function (reason) {
            console.error('Something went wrong', reason);
        });
*/
console.log(">>>==========================================<<<");

function delay(ms) {
    return new Promise(function (resolve, reject) {
        setTimeout(resolve, ms); // (A)
    });
}

delay(1000)
    .then(() => console.log("Hatchie!"));

console.log(">>>==========================================<<<");


function timeout(ms, promise) {
    return new Promise(function (resolve, reject) {
        promise.then(resolve);
        setTimeout(function () {
            reject(new Error('Timeout after ' + ms + ' ms')); // (A)
        }, ms);
    });
}

console.log(">>>==========================================<<<");

Promise.resolve('**abc**')
    .then(x => console.log(x)); // abc


Promise.resolve(['AA', 'BB', 'DD'])
    .then(arr => arr.forEach((v, i) => console.log("--" + v))); // abc


Promise.resolve('**abc**')
    .then(x => console.log(x)); // abc


const fulfilledThenable = {
    then(reaction) {
        reaction('hello vvvv');
    }
};
const promise = Promise.resolve(fulfilledThenable);
console.log(promise instanceof Promise); // true
promise.then(x => console.log(x)); // hello


const myError = new Error('Problem!');
Promise.reject(myError)
    .catch(err => console.error(err === myError)); // true


console.log(">>>==========================================<<<");

function asyncFunc102() {
    return new Promise((resolve, reject) => {
        resolve('$$');
    });
}

function asyncFunc203(msg) {
    return new Promise((resolve, reject) => {
        resolve(msg + '###');
    });
}

asyncFunc102()
    .then(function (value1) {
        return '123' + value1;  // 123$$
    })
    .then(function (value2) {
        let message = value2 + value2;
        console.log(message); // 123$$123$$
        return message;
    }).then(function (value3) {
    console.log(value3 + value3); // 123$$123$$123$$123$$
});


asyncFunc102()
    .then(function (value1) {
        asyncFunc203(value1)
            .then(function (value2) {
                console.log(' =============>>>> ' + value2 + value2);
            });
    })


asyncFunc102()
    .then(function (value1) {
        return asyncFunc203(value1);
    })
    .then(function (value2) {
        console.log(value2 + value2);
    })

function retrieveFileName() {
    // return new Promise((resolve, reject) => reject(new Error('any error wi khalas')))
    return new Promise((resolve, reject) => resolve(new Error('any error wi khalas')))
}

retrieveFileName()
    .catch(function () {
        // Something went wrong, use a default value
        return 'Untitled.txt';
    })
    .then(function (fileName) {
        console.log("Filename : " + fileName);
    });

retrieveFileName()
    .then(function (value) {
        throw new Error("Eroorrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr");
    })
    .catch(function (reason) {
        // Handle error here
        console.error("Reason : " + reason.message);
    });


// Don’t do this
function fooProms() {
    const promise = asyncFunc102();
    const promise2 = promise.then(result => {
        return result + "////////////////";
    });

    return promise2;
}


fooProms()
    .then(val => console.log("!!!!!!!!!!!!!!!!!!!! : " + val))


// Don’t do this
class Model {
    insertInto(db) {
        return new Promise((resolve, reject) => { // (A)

            db.insert(this.fields) // (B)
                .then(resultCode => {
                    this.notifyObservers({event: 'created', model: this});

                    resolve(resultCode); // (C)

                }).catch(err => {
                reject(err); // (D)
            });

        });
    }

    // correction
    insertInto2(db) {
        return db.insert(this.fields) // (A)
            .then(resultCode => {
                this.notifyObservers({event: 'created', model: this});
                return resultCode; // (B)
            });
    }

}


function asyncFunc566() {
    try {
        doSomethingSync();
        return doSomethingAsync()
            .then(result => {
                // ···
            });
    } catch (err) {
        return Promise.reject(err);
    }
}


function doSomethingAsync158() {
    // throw new Error('Not implemented');
    return Promise.reject(new Error('Not implemented'));
}

// doSomethingAsync158()
//     .then(() => console.log("Will never reach here!"));
// .catch(err => console.error(err.message));

function mytestFunc() {

    try {
        doSomethingAsync158()
            .then(() => console.log("Will never reach here!"))
            .catch(err => {
                console.error(err.message);
                // throw new Error(err.message + ' XXXXXXXXXXXXXXXXXx' );
                // throw err;
            });
    } catch (e) {

        /*
                WATCH OUT

            You cannot use try-catch statements to handle exceptions 
            thrown asynchronously, as the function has "returned" before any exception is thrown

         */


        console.error(e.message);
    }

}

mytestFunc();

console.log(">>>==========================================<<<");

// Don’t do this
asyncFunc1()
    .then(result1 => {
        handleSuccess({result1});
    })
    .catch(handleError);

asyncFunc2()
    .then(result2 => {
        handleSuccess({result2});
    })
    .catch(handleError);


const results = {};

function handleSuccess(props) {
    Object.assign(results, props);
    if (Object.keys(results).length === 2) {
        const {result1, result2} = results;
        // ···
    }
}

let errorCounter = 0;

function handleError(err) {
    errorCounter++;
    if (errorCounter === 1) {
        // One error means that everything failed,
        // only react to first error
        // ···
    }
}

console.log(">>>==========================================<<<");

Promise.all([
    asyncFunc1(),
    asyncFunc2(),
]).then(([result1, result2]) => {
    // ···
})
    .catch(err => {
        // Receives first rejection among the Promises
        // ···
    });


const fileUrls = [
    'http://example.com/file1.txt',
    'http://example.com/file2.txt',
];
const promisedTexts = fileUrls.map(httpGet);

Promise.all(promisedTexts)
    .then(texts => {
        for (const text of texts) {
            console.log(text);
        }
    })
    .catch(reason => {
        // Receives first rejection among the Promises
    });

// The first of the input Promises that is settled 
Promise.race([
    httpGet('http://example.com/file.txt'),
    delay(5000).then(function () {
        throw new Error('Timed out')
    })
])
    .then(function (text) {
    })
    .catch(function (reason) {
    });


console.log(">>>==========================================<<<");

function doSomething_v1() {
    asyncFunc()
        .then(f1)
        .catch(r1)
        .then(f2); // (A)
}

Promise.prototype.done = function (onFulfilled, onRejected) {
    this.then(onFulfilled, onRejected)
        .catch(function (reason) {
            // Throw an exception globally
            setTimeout(() => {
                throw reason
            }, 0);
        });
};


function doSomething_v2() {
    asyncFunc()
        .then(() => {
        })
        .catch(() => {
        })
        .done(onComplete, onError);
}


function doSomething_v3() {
    asyncFunc()
        .then((val) => {
            console.log("!!!!!!!!!!!!!!!!!!!! : " + val);
        })
        .catch(() => {
            console.log("!!!!!!!!!!!!!!!!!!!!")
        })
        .finally(() => { // Clean up
            console.log("!!!!!!!!!!!!!!!!!!!! : CLEAN-UP performed here .................");
        })
}

doSomething_v3();


function doSomething_v4() {
    doSomethingAsync158()
        .then((val) => {
            console.log("!!!!!!!!!!!!!!!!!!!! : " + val);
        })
        .catch(() => {
            console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ error here")
        })
        .finally(() => { // Clean up
            console.log("!!!!!!!!!!!!!!!!!!!! : CLEAN-UP performed here .................");
        })
}


doSomething_v4();


// using finally() to hide a spinner.
showSpinner();
fetchGalleryData()
    .then(data => updateGallery(data))
    .catch(showNoDataError)
    .finally(hideSpinner);



// using finally() to tear down a test.
function testRunner() {
    const HTTP = require("q-io/http");
    const server = HTTP.Server(app);
    
    return server.listen(0)
        .then(function () {
            // run test
        })
        .finally(server.stop);
}




