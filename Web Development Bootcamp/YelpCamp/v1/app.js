var express = require("express");
var app = express();

app.set("view engine", "ejs");

app.get("/", function(req, res) {
    res.render("landing");
});
app.get("/campgrounds", function(req, res) {
    var campgrounds = [{
            "name": "Campground 1",
            "image": "https://images.pexels.com/photos/699558/pexels-photo-699558.jpeg?auto=compress&cs=tinysrgb&h=350"
        },
        {
            "name": "Campground 2",
            "image": "https://images.pexels.com/photos/699558/pexels-photo-699558.jpeg?auto=compress&cs=tinysrgb&h=350"
        }
    ];
    res.render("campgrounds", { campgrounds: campgrounds });
})


app.listen(process.env.PORT, process.env.IP, function() {
    console.log("Yelpcamp v1 started!!");
});
