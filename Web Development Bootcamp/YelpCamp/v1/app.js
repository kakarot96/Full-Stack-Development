var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var campgrounds = [{
        name: "Campground 1",
        image: "https://images.pexels.com/photos/699558/pexels-photo-699558.jpeg?auto=compress&cs=tinysrgb&h=350"
    },
    {
        name: "Campground 2",
        image: "https://images.pexels.com/photos/699558/pexels-photo-699558.jpeg?auto=compress&cs=tinysrgb&h=350"
    }
];

app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");

app.get("/", function(req, res) {
    res.render("landing");
});

app.get("/campgrounds", function(req, res) {
    // console.log("in the get");
    res.render("campgrounds", { campgrounds: campgrounds });
});

app.post("/campgrounds", function(req, res) {
    // console.log("in the post");
        var name = req.body.name;
    var image = req.body.image;
    var newCampground = {
        name: name,
        image: image
    }
    campgrounds.push(newCampground);
    res.redirect("/campgrounds");
});
app.get("/campgrounds/new", function(req, res) {
    res.render("new");
});


app.listen(process.env.PORT, process.env.IP, function() {
    console.log("Yelpcamp v1 started!!");
});
