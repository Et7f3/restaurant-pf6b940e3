const layout = require("../../utils/layout.js")

module.exports = exports = function(req, res) {
    if (req.body.login && req.body.pass) {
        res.writeHead(303, {
            'Location': '/resto/commande'
            //add other headers here...
        });
        res.end();
    } else
        layout({title: "Connecter-vous", "view": "resto/index.ejs", "data": {}}, req, res)
}
