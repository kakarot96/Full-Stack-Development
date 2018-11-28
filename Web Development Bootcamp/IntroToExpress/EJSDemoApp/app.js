var express = require("express");
var app = express();

app.use(express.static("public"));

app.set("view engine", "ejs");

app.get("/", function(req, res) {
    res.render("home");
});
app.get("/fallinlove/:thing", function(req, res) {
    var thing = req.params.thing;
    res.render("fallinlove", { thingVar: thing });
});
app.get("/posts", function(req, res) {
    var posts = [{
            "title": "Harry Potter 1",
            "author": "JK Rowling"
        },
        {
            "title": "Harry Potter 2",
            "author": "JK Rowling"
        },
        {
            "title": "Harry Potter 3",
            "author": "JK Rowling"
        },
        {
            "title": "Harry Potter 4",
            "author": "JK Rowling"
        },
        {
            "title": "Harry Potter 5",
            "author": "JK Rowling"
        },
        {
            "title": "Harry Potter 6",
            "author": "JK Rowling"
        },
        {
            "title": "Harry Potter 7",
            "author": "JK Rowling"
        },
        {
            "title": "Harry Potter 8",
            "author": "JK Rowling"
        }
    ]
    res.render("posts", { posts: posts });
});



app.listen(process.env.PORT, process.env.IP, function() {
    console.log("Server has started");
});
