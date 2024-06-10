import {FileWatcher} from "./lib/file-watcher.js";

let inputDirectory = '/home/mina/Desktop';
let outputDirectory = '/home/mina/Desktop/output';

let fileWatcher = new FileWatcher(inputDirectory, outputDirectory);
fileWatcher.start();
