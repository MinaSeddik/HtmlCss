
import fs from 'fs';
import EventEmitter from "node:events";


export class FileWatcher extends EventEmitter{

    #watchDir;
    #processedDir;

    constructor(watchDir, processedDir) {
        super();
        this.#watchDir = watchDir;
        this.#processedDir = processedDir;

        this.on('process', function process(file) {

            console.log('@@@@@@@ ' + file);

            let watchFile = this.#watchDir + '/' + file;
            let processedFile = this.#processedDir + '/' + file.toLowerCase();
            fs.rename(watchFile, processedFile, function(err) {
                if (err) throw err;
            });
        });


    }

    watch(){
        fs.readdir(this.#watchDir, (err, files) => {
            if (err) throw err;
            for(const index of files) {
                this.emit('process', files[index]);
            }
        })
    }

    start(){
        console.log(`Start audit directory: ${this.#watchDir}`)
        fs.watchFile(this.#watchDir,()=> this.watch());
    }


}