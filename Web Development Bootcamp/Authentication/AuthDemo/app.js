var express = require("express"),
    bodyParser = require("body-parser"),
    mongoose = require("mongoose");
var app = express();

// APP CONFIG
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
mongoose.connect("mongodb://localhost/auth_demo_app");

app.get("/", function(req, res) {
    res.render("home");
});
app.get("/secret", function(req, res) {
    res.render("secret");
});
app.listen(process.env.PORT, process.env.IP, function() {
    console.log("RESTful Blog App started");
});
