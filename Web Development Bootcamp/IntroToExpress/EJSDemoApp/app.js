var app = require("express")();

app.get("/",function(req,res){
   res.render("home.ejs"); 
});
app.get("/fallinlove/:thing",function(req,res){
    var thing = req.params.thing;
    res.render("fallinlove.ejs",{thingVar:thing});
});

app.listen(process.env.PORT,process.env.IP,function(){
   console.log("Server has started"); 
});