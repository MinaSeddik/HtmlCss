import {parse} from "url";


function findPostIdBySlug(match1, param2) {
    // apply lookup logic here ...
}

function rewrite(req, res, next) {
    let path = url.parse(req.url).pathname;

    let match = path.match(/^\/blog\/posts\/(.+)/)
    if (match) {
        findPostIdBySlug(match[1], function(err, id) {
            if (err) return next(err);
            if (!id) return next(new Error('User not found'));
            req.url = '/blog/posts/' + id;
            next();
        });
    } else {
        next();
    }
}

