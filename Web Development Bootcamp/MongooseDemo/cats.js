var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/cats");

var catSchema = new mongoose.Schema({
    name: String,
    age: Number,
    temperament: String
});

var Cat = mongoose.model("Cat", catSchema);

// var george = new Cat({
//     name: "Mrs Norris",
//     age: 11,
//     temperament: "Grouchy"
// });
// george.save();
Cat.find({}, function(err, cats) {
    if (err) {
        console.log("Oh no! Error");
    }
    else {
        console.log(cats);
    }
});
