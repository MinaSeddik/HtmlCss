import http from 'http';
import mysql from 'mysql2';

import * as work from './lib/timetrack.js';


let db = mysql.createConnection({
    host: '127.0.0.1',
    user: 'mina',
    password: '#Mina_1234$',
    database: 'myapp'
});

let server = http.createServer(function (req, res) {
    switch (req.method) {
        case 'POST':
            switch (req.url) {
                case '/':
                    work.add(db, req, res);
                    break;
                case '/archive':
                    work.archive(db, req, res);
                    break;
                case '/delete':
                    work.remove(db, req, res);
                    break;
            }
            break;
        case 'GET':
            switch (req.url) {
                case '/':
                    work.show(db, res);
                    break;
                case '/archived':
                    work.showArchived(db, res);
            }
            break;
    }
});


db.query(
    "CREATE TABLE IF NOT EXISTS work ("
    + "id INT(10) NOT NULL AUTO_INCREMENT, "
    + "hours DECIMAL(5,2) DEFAULT 0, "
    + "date DATE, "
    + "archived INT(1) DEFAULT 0, "
    + "description LONGTEXT,"
    + "PRIMARY KEY(id))",
    function (err) {
        if (err) throw err;
        console.log('Server started...');
        server.listen(3000, '127.0.0.1');
    }
);


/*

USE myapp;

CREATE TABLE work
(
id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
hours DECIMAL(4, 2) NOT NULL,
date DATETIME NOT NULL,
description VARCHAR(255) NOT NULL,
archived INT(1) NOT NULL DEFAULT '0'
);

 */

