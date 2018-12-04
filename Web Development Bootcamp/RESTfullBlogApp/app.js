var express = require("express"),
    bodyParser = require("body-parser"),
    mongoose = require("mongoose");
var app = express();

// APP CONFIG
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
mongoose.connect("mongodb://localhost/restful_blog_app");

// MONGOOSE CONFIG

var blogSchema = new mongoose.Schema({
    title: String,
    image: String,
    body: String,
    created: { type: Date, default: Date.now }
});

var Blog = mongoose.model("Blog", blogSchema);
// Blog.create({
            //     title: "Blog 1",
            //     image: "https://images.pexels.com/photos/545063/pexels-photo-545063.jpeg?auto=compress&cs=tinysrgb&h=350",
            //     body: "Body of Blog 1"
            // });

// RESTful Routes

app.get("/", function(req, res) {
    res.redirect("/blogs");
});

app.get("/blogs", function(req, res) {
    Blog.find({}, function(err, blogs) {
        if (err) {
            console.log("ERROR!!");
        }
        else {
            res.render("index", { blogs: blogs });
        }
    })

});


app.listen(process.env.PORT, process.env.IP, function() {
    console.log("RESTful Blog App started");
});
