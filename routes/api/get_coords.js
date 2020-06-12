const layout = require("../../utils/layout.js")
const db = require("../../utils/db.js")

module.exports = exports = function(req, res) {
    if (!req.body.tel) {
        res.writeHead(400)
        res.end('{"reason": "missing tel"}')
    } else {
        db.query("SELECT * FROM clients WHERE tel=$1", [req.body.tel], (err, resul) => {
            console.error(err)
            // TODO: handle err
            res.end(JSON.stringify(resul))
        })
    }
}
