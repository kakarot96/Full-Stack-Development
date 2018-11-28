var express  = require("express");
var app = express();

var voices = {
    "pig":"Oink",
    "dog":"Woof Woof!",
    "cow":"Moo"
};

app.get("/", function(req,res){
    res.send("Hi there, welcome to my assignment!");
});
app.get("/speak/:animal", function(req,res){
    var animal=req.params.animal.toLowerCase();
   res.send("The "+animal+" says '"+voices[animal]+"'"); 
});
app.get("/repeat/:word/:frequency", function(req,res){
    var word=req.params.word;
    var frequency=Number(req.params.frequency);
   res.send((word+" ").repeat(frequency-1)+word); 
});
app.get("*", function(req,res){
    res.send("Sorry, page not found... What are you doing with your life?");
});
app.listen(process.env.PORT,process.env.IP,function(){
    console.log("Server has started!!");
});

