const layout = require("../../utils/layout.js")
const db = require("../../utils/db.js")

module.exports = exports = function(req, res) {
    db.query("SELECT clients.nom, clients.tel, commandes.prix, clients.adresse FROM commandes INNER JOIN clients ON commandes.id_client=clients.id", (err, resul) => {
        console.error(err)
        // TODO: handle err
        layout({title: "Listes des restaurateurs", "view": "admin/list_commandes.ejs", "data": resul}, req, res)
    })
}
