var express = require("express"),
    bodyParser = require("body-parser"),
    mongoose = require("mongoose"),
    methodOverride = require("method-override");
var app = express();

// APP CONFIG
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(methodOverride("_method"));
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

// INDEX ROUTE
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

// NEW ROUTE
app.get("/blogs/new", function(req, res) {
    res.render("new");
});

// SHOW ROUTE
app.get("/blogs/:id", function(req, res) {

    Blog.findById(req.params.id, function(err, foundBlog) {
        if (err) {
            console.log("ERROR!!");
        }
        else {
            res.render("show", { blog: foundBlog });
        }
    })
});

// UPDATE ROUTE
app.put("/blogs/:id", function(req, res) {
    //res.send("updated");
    Blog.findByIdAndUpdate(req.params.id, req.body.blog, function(err, foundBlog) {
        if (err) {
            console.log("ERROR!!");
        }
        else {
            res.redirect("/blogs/" + req.params.id);
        }
    });
});

// EDIT ROUTE
app.get("/blogs/:id/edit", function(req, res) {

    Blog.findById(req.params.id, function(err, foundBlog) {
        if (err) {
            console.log("ERROR!!");
        }
        else {
            res.render("edit", { blog: foundBlog });
        }
    })
});
// CREATE ROUTE
app.post("/blogs", function(req, res) {
    var newBlog = req.body.blog;
    Blog.create(newBlog, function(err, newBlog) {
        if (err) {
            console.log("Error!!");
        }
        else {
            res.redirect("/blogs");
        }
    });
});
app.delete("/blogs/:id", function(req, res) {
    Blog.findByIdAndRemove(req.params.id, function(err) {
        if (err) {
            res.redirect("/blogs");
        }
        else {
            res.redirect("/blogs");
        }
    });
});
app.listen(process.env.PORT, process.env.IP, function() {
    console.log("RESTful Blog App started");
});
