var express = require("express");
var bodyParser = require('body-parser');
var app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.set("view engine", "ejs");
var friends = ["Uday", "Pakia", "Gupta"];
app.get("/", function(req, res) {
    res.render("home");
});

app.get("/friends", function(req, res) {
    res.render("friends", { friends: friends });
});
app.post("/addFriend", function(req, res) {
    // res.send("this is post");
    // console.log(req.body);
    var newFriend = req.body.name;
    friends.push(newFriend);
    res.redirect("/friends");
});

app.listen(process.env.PORT, process.env.IP, function() {
    console.log("Server Started");
});
