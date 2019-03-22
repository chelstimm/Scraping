var express = require("express");
var logger = require("morgan");
var exphbs = require("express-handlebars");
var app = express();
var PORT = process.env.PORT || 3000;

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

require("./Controller/controller.js")(app);

app.listen(PORT, function () { 
console.log("http://localhost:" + PORT) });



