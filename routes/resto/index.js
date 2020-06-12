const layout = require("../../utils/layout.js")
const db = require("../../utils/db.js")

module.exports = exports = function(req, res) {
    if (req.body.login && req.body.pass) {
        var args = [req.body.login, req.body.pass];
        db.query("SELECT id, login FROM restaurateurs WHERE login=$1 AND pass=$2", args, (err, resul) => {
            console.error(err)
            // TODO: handle err
            if (resul.rows.length == 1)
            {
                res.writeHead(303, {
                    'Location': '/resto/commande'
                    //add other headers here...
                });
                res.end();
            } else
                layout({title: "Connecter-vous", "view": "resto/index.ejs", "data": {message: "Mauvaise paire login/mot de passe."}}, req, res)
        })
    } else
        layout({title: "Connecter-vous", "view": "resto/index.ejs", "data": {message: ""}}, req, res)
}
