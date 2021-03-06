var express = require("express");
var mongoose = require("mongoose");
var app = express();
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect("mongodb://localhost/yelp_camp");
app.set("view engine", "ejs");

var Campground = require("./models/campground.js");
var seedDB = require("./seed");
seedDB();

// Campground.create({
//         name: "Campground 1",
//         image: "https://images.pexels.com/photos/699558/pexels-photo-699558.jpeg?auto=compress&cs=tinysrgb&h=350",
//         description: "This is campground site 1"
//     },
//     function(err, campground) {
//         if (err) {
//             console.log(err);
//         }
//         else {
//             console.log("New Campground created");
//             console.log("campground");
//         }
//     }
// );

app.get("/", function(req, res) {
    res.render("landing");
});

app.get("/campgrounds", function(req, res) {
    // console.log("in the get");
    Campground.find({}, function(err, allCampgrounds) {
        if (err) {
            console.log(err);
        }
        else {
            res.render("campgrounds", { campgrounds: allCampgrounds });
        }
    });

});

app.post("/campgrounds", function(req, res) {
    console.log("in the post");
    var name = req.body.name;
    var image = req.body.image;
    var desc = req.body.description;
    var newCampground = {
        name: name,
        image: image,
        description: desc
    }
    Campground.create(newCampground, function(err, campground) {
        if (err) {
            console.log(err);
        }
        else {
            res.redirect("/campgrounds");
        }
    });
});

app.get("/campgrounds/new", function(req, res) {
    res.render("new");
});

app.get("/campgrounds/:id", function(req, res) {
    console.log(req.params.id);
    Campground.findById(req.params.id, function(err, foundCampground) {
        if (err) {
            console.log(err);
        }
        else {
            res.render("show", { campground: foundCampground });
        }
    });

});
app.listen(process.env.PORT, process.env.IP, function() {
    console.log("Yelpcamp v2 started!!");
});
