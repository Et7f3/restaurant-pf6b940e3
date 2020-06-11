const ejs = require("ejs")

module.exports = exports = function(data, req, res) {
    ejs.renderFile("views/layout.ejs", data, {}, function(err, str) {
        if (err) {
            console.error(err)
        }
        res.writeHead(500)
        res.end(str)
    })
}
