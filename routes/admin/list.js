const layout = require("../../utils/layout.js")
const db = require("../../utils/db.js")

module.exports = exports = function(req, res) {
    db.query("SELECT id, login FROM restaurateurs", (err, resul) => {
        console.error(err)
        // TODO: handle err
        layout({title: "Listes des restaurateurs", "view": "admin/list.ejs", "data": resul}, req, res)
    })
}
