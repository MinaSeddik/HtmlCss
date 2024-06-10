import * as qs from 'querystring'


export function sendHtml(res, html) {
    res.setHeader('Content-Type', 'text/html');
    res.setHeader('Content-Length', Buffer.byteLength(html));
    res.end(html);
}

export function parseReceivedData(req, cb) {
    let body = '';
    req.setEncoding('utf8');
    req.on('data', function (chunk) {
        body += chunk
    });
    req.on('end', function () {
        let data = qs.parse(body);
        cb(data);
    });
}

export function actionForm(id, path, label) {
    let html = '<form method="POST" action="' + path + '">' +
        '<input type="hidden" name="id" value="' + id + '">' +
        '<input type="submit" value="' + label + '" />' +
        '</form>';
    return html;
}

export function add(db, req, res) {
    parseReceivedData(req, function(work) {
        db.query("INSERT INTO work (hours, date, description) VALUES (?, ?, ?)",
            [work.hours, work.date, work.description],
            function(err) {
                if (err) throw err;
                show(db, res);
            }
        );
    });
}

export function remove(db, req, res) {
    parseReceivedData(req, function(work) {
        db.query(
            "DELETE FROM work WHERE id=?",
            [work.id],
            function(err) {
                if (err) throw err;
                show(db, res);
            }
        );
    });
}

export function archive(db, req, res) {
    parseReceivedData(req, function(work) {
        db.query(
            "UPDATE work SET archived=1 WHERE id=?",
            [work.id],
            function(err) {
                if (err) throw err;
                show(db, res);
            }
        );
    });
}


export function show(db, res, showArchived) {
    let query = "SELECT * FROM work WHERE archived=? ORDER BY date DESC";
    let archiveValue = (showArchived) ? 1 : 0;
    db.query(
        query,
        [archiveValue],
        function(err, rows) {
            if (err) throw err;
            let html = (showArchived)
                ? ''
                : '<a href="/archived">Archived Work</a><br/>';
            html += workHitlistHtml(rows);
            html += workFormHtml();
            sendHtml(res, html);
        }
    );
};


export function showArchived(db, res) {
    show(db, res, true);
};


export function workHitlistHtml(rows) {
    let html = '<table>';
    for(let i in rows) {
        html += '<tr>';
        html += '<td>' + rows[i].date + '</td>';
        html += '<td>' + rows[i].hours + '</td>';
        html += '<td>' + rows[i].description + '</td>';
        if (!rows[i].archived) {
            html += '<td>' + workArchiveForm(rows[i].id) + '</td>';
        }
        html += '<td>' + workDeleteForm(rows[i].id) + '</td>';
        html += '</tr>';
    }
    html += '</table>';
    return html;
}


export function workFormHtml() {
    let html = '<form method="POST" action="/">' +
        '<p>Date (YYYY-MM-DD):<br/><input name="date" type="text"><p/>' +
        '<p>Hours worked:<br/><input name="hours" type="text"><p/>' +
        '<p>Description:<br/>' +
        '<textarea name="description"></textarea></p>' +
        '<input type="submit" value="Add" />' +
        '</form>';
    return html;
}


export function workArchiveForm(id) {
    return actionForm(id, '/archive', 'Archive');
}


export function workDeleteForm(id) {
    return actionForm(id, '/delete', 'Delete');
}