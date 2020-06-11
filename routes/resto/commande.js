const layout = require("../../utils/layout.js")

module.exports = exports = function(req, res) {
    var data
    if (req.body.tel && req.body.nom && req.body.prix) {
        // TODO: save
        console.log("save :", req.body.tel, req.body.nom, req.body.prix)
        data = {
            tel: "",
            nom: "",
            prix: "",
        }
    } else {
        data = {
            tel: req.body.tel,
            nom: req.body.nom,
            prix: req.body.prix,
        }
    }
    layout({title: "Prendre une commande", "view": "resto/commande.ejs", "data": data}, req, res)
}
