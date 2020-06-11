const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const layout = require("./utils/layout.js")

const bodyParser = require('body-parser')

const session = require('express-session');

app.use(session({
  store: new (require('connect-pg-simple')(session))(),
  secret: process.env.FOO_COOKIE_SECRET,
  resave: false,
  cookie: { maxAge: 30 * 24 * 60 * 60 * 1000 } // 30 days
}));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

var myLogger = function (req, res, next) {
    console.log(req.body);
    next();
};

app.use(myLogger);

app.post("/resto/login", require("./routes/resto/index.js"))
app.get("/resto/login", require("./routes/resto/index.js"))
app.get("/", require("./routes/resto/index.js"))
app.get("/resto/commande", require("./routes/resto/commande.js"))
app.post("/resto/commande", require("./routes/resto/commande.js"))

app.listen(port, function () {
    console.log(`Listen on port ${port}`)
})


