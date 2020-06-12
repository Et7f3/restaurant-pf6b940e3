const layout = require("../../utils/layout.js")
const db = require("../../utils/db.js")

module.exports = exports = function(req, res) {
    if (req.body.login && req.body.pass) {
        var args = [req.body.len, req.body.pass];
        db.query("SELECT * FROM restaurateurs WHERE login = $1::text", [args[0]], (err, resul) => {
            console.error(err)
            console.info(resul)
            // TODO: handle err
            if (resul.length == 0)
                db.query("INSERT INTO restaurateurs (login, pass) VALUES ($1, $2)", args, (err, resul) => {
                    console.error(err)
                    console.info(resul)
                    // TODO: handle err
                    res.writeHead(303, {
                        'Location': '/admin/list'
                        //add other headers here...
                    });
                    res.end();
                })
            else
                layout({title: "Inscrivez un restaurateur", "view": "admin/signin.ejs", "data": {message: "Login déjà pris"}}, req, res)
        })
    } else
        layout({title: "Inscrivez un restaurateur", "view": "admin/signin.ejs", "data": {message: ""}}, req, res)
}
