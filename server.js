var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");
var Sequelize = require("sequelize");

var port = process.env.PORT || 3000;


// Requiring our models for syncing
var db = require("./models");

db.burgers.sync();

var app = express();
// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static(__dirname + "/public"));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
    extended: false
}));
// override with POST having ?_method=DELETE
app.use(methodOverride("_method"));
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({
    defaultLayout: "main"
}));
app.set("view engine", "handlebars");

var routes = require("./controllers/burgers_controller");

app.use("/", routes);
app.use("/burgers", routes)
// app.use("/update", routes);
// app.use("/create", routes);
app.use("/burgers/create", routes);
app.use("/burgers/update", routes);
app.use("/api/all", routes);

// require("./controllers/burgers_controller.js")(app);

// listen on port 3000

app.listen(port, function () {
    console.log("listening on port " + port);
});