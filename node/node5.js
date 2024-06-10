import fs from 'fs';
import _ from 'lodash';


let filesDir = './text';
fs.readdir(filesDir, function (err, files) {
    if (err) throw err;

    let tasks = [];
    for (const file of files) {

        tasks.push(new Promise(function (resolve, reject) {
                fs.readFile(filesDir + '/' + file, 'utf8', function (err, text) {
                    if (err) {
                        reject(err);
                    }
                    resolve(countWordsInText(text));
                });
            })
        );

    }

    Promise.all(tasks)
        .then(data => console.log(data))
        .catch(error => console.error(error))
});


function countWordsInText(text) {
    let words = text.split(/\W+/)
        .map(word => word.toLowerCase());

    const result = _.values(_.groupBy(words)).map(d => ({word: d[0], count: d.length}));
    return result;
}

