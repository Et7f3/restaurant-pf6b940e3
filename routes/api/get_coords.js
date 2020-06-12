const layout = require("../../utils/layout.js")
const db = require("../../utils/db.js")

module.exports = exports = function(req, res) {
    res.setHeader('Content-Type', 'application/json');
    if (!req.body.tel) {
        res.writeHead(400)
        res.end('{"reason": "missing tel"}')
    } else {
        db.query("SELECT * FROM clients WHERE tel=$1", [req.body.tel], (err, resul) => {
            console.error(err)
            // TODO: handle err
            res.writeHead(200)
            if (resul.rows.length === 1)
                res.end(JSON.stringify(resul.rows[0]))
            else
                res.end('{"reason": "Not found"}')
        })
    }
}
