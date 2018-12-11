var express = require("express"),
    bodyParser = require("body-parser"),
    mongoose = require("mongoose"),
    passport = require("passport"),
    LocalStrategy = require("passport-local"),
    passportLocalMongoose = require("passport-local-mongoose"),
    User = require("./models/user")
var app = express();

// APP CONFIG
app.set("view engine", "ejs");
app.use(require("express-session")({
    secret: "My username is kakarot96",
    resave: false,
    saveUninitialized: false
}));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(passport.initialize());
app.use(passport.session());
mongoose.connect("mongodb://localhost/auth_demo_app");
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.get("/", function(req, res) {
    res.render("home");
});
app.get("/secret", function(req, res) {
    res.render("secret");
});

// AUTH ROUTES
app.get("/login", function(req, res) {
    res.render("login");
});
app.post("/login", passport.authenticate("local", {
    successRedirect: "/secret",
    failureRedirect: "/login"
}), function(req, res) {

});
app.get("/register", function(req, res) {
    res.render("register");
});
app.post("/register", function(req, res) {
    User.register(new User({ username: req.body.username }), req.body.password, function(err, user) {
        if (err) {
            console.log(err);
            res.render("register");
        }
        else {
            passport.authenticate("local")(req, res, function() {
                res.render("secret");
            });

        }

    })

    // res.send("This  is register post")
});
app.listen(process.env.PORT, process.env.IP, function() {
    console.log("RESTful Blog App started");
});
