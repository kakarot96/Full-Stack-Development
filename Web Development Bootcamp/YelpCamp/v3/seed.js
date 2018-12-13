var mongoose = require("mongoose"),
    Campground = require("./models/campground");
var data = [

    {
        name: "Campground 1",
        image: "https://images.pexels.com/photos/699558/pexels-photo-699558.jpeg?auto=compress&cs=tinysrgb&h=350",
        description: "This is campground site 1"
    },

    {
        name: "Campground 1",
        image: "https://images.pexels.com/photos/699558/pexels-photo-699558.jpeg?auto=compress&cs=tinysrgb&h=350",
        description: "This is campground site 2"
    },
    {
        name: "Campground 1",
        image: "https://images.pexels.com/photos/699558/pexels-photo-699558.jpeg?auto=compress&cs=tinysrgb&h=350",
        description: "This is campground site 3"
    }
];

function seedDB() {
    // Remove all from campgrounds
    Campground.remove({}, function(err) {
        if (err) console.log("Error removing all from campgrounds");
        else {
            console.log("Removed all from campgrounds");
        }

    });

    // Insert into campgrounds

    data.forEach(function(seed) {
        Campground.create(seed, function(err, seed) {
            if (err) {
                console.log("Error inserting seed in campground");
            }
            else {
                console.log("Inserted seed in CG");
            }
        });
    });

}

module.exports = seedDB;
