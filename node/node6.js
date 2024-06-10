import connect from 'connect';
import {route} from 'lib/middleware/router.js'

function logger(req, res, next) {
    console.log('%s %s', req.method, req.url);
    next();
}

function hello(req, res) {
    res.setHeader('Content-Type', 'text/plain');
    res.end('hello world');
}

function authenticateWithDatabase(user, pass, cb) {
    if(!user || !pass){
        cb(new Error('Missed username and/or password'))
    }

    if(user === 'admin' && pass === 'admin'){
       console.log('Successfully logged-in!!')
        cb();
    }else {
        cb(new Error('Invalid username and/or password'))
    }
}

function restrict(req, res, next) {
    let authorization = req.headers.authorization;
    if (!authorization)
        return next(new Error('Unauthorized'));

    let parts = authorization.split(' ')
    let scheme = parts[0]
    let auth = new Buffer(parts[1], 'base64').toString().split(':')
    let [user, pass] = auth;

    authenticateWithDatabase(user, pass, function (err) {
        if (err) return next(err);
        next();
    });
}

function admin(req, res, next) {
    switch (req.url) {
        case '/':
            res.end('try /users');
            break;
        case '/users':
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify(['tobi', 'loki', 'jane']));
            break;
    }
}


function setup(format) {
    let regexp = /:(\w+)/g;
    return function logger(req, res, next) {
        let str = format.replace(regexp, function(match, property){
            return req[property];
        });
        console.log(str);
        next();
    }
}

const routes = {
    GET: {
        '/users': function(req, res){
            res.end('tobi, loki, ferret');
        },
        '/user/:id': function(req, res, id){
            res.end('user ' + id);
        }
    },
    DELETE: {
        '/user/:id': function(req, res, id){
            res.end('deleted user ' + id);
        }
    }
};


let app = connect();
app.use(logger)
    .use('/admin', restrict)
    .use('/admin', admin)
    .use(route(routes))
    .use(hello)
    .listen(3000);

