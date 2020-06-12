const layout = require("../../utils/layout.js")
const db = require("../../utils/db.js")

module.exports = exports = function(req, res) {
    var data
    if (req.body.tel && req.body.nom && req.body.prix && req.body.adresse) {
        function f(resul) {
            console.log(resul)
            db.query("INSERT INTO commandes (id_client, prix) VALUES ((SELECT id FROM clients WHERE tel=$1), $2)", [req.body.tel, req.body.prix], err => {
                console.error(err)
                // TODO: handle err
            })
        }
        data = {
            tel: "",
            nom: "",
            prix: "",
            adresse: "",
        }
        db.query("SELECT * FROM clients WHERE tel=$1", [req.body.tel], (err, resul) => {
            console.error(err)
            // TODO: handle err
            if (resul.rows.length > 0 && (resul.rows[0].nom != req.body.nom || resul.rows[0].adresse != req.body.adresse))
                db.query("UPDATE clients SET nom=$1 AND adresse=$2 WHERE tel=$3 RETURNING id", [req.body.nom, req.body.adresse, req.body.tel], (err, resul) => {
                    console.error(err)
                    // TODO: handle err
                    f(resul)
                })
            else
                db.query("INSERT INTO clients (nom, adresse, tel) VALUE ($1, $2, $3) RETURNING id", [req.body.nom, req.body.adresse, req.body.tel], (err, resul) => {
                    console.error(err)
                    // TODO: handle err
                    f(resul)
                })
        })
    } else {
        data = {
            tel: req.body.tel,
            nom: req.body.nom,
            prix: req.body.prix,
            adresse: req.body.adresse,
        }
    }
    layout({title: "Prendre une commande", "view": "resto/commande.ejs", "data": data}, req, res)
}
