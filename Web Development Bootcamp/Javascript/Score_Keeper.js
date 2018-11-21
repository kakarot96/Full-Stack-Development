

var p1 = document.getElementById("p1");
var p2 = document.getElementById("p2");
var reset = document.getElementById("reset");
var s1= document.getElementById("s1");
var s2= document.getElementById("s2");
var s3 = document.getElementById("s3");
var input = document.getElementById("limit");
var p1Score =0;
var p2Score = 0;
var limit = 5;
var status = true;


    p1.addEventListener("click", function(){
        if(status==="true"){
            p1Score++;
            s1.textContent = p1Score;

        }
    
        if(s1.textContent==limit){
            s1.style.color = "green";
            status=false;
        }
    });
    
    p2.addEventListener("click", function(){
        if(status==="true"){
            p2Score++;
            s2.textContent = p2Score;
        }
        

        if(s2.textContent==limit){
            s2.style.color = "green";
            status=false;
        }
    });
    
    reset.addEventListener("click", function(){
       resetCode();
    });

function resetCode(){
    s1.textContent = "0";p1Score=0;
    s2.textContent = "0";p2Score=0;
    s2.style.color = "black";
    s1.style.color = "black";
    status = true;
}
 function setLimit(){
     limit = parseInt(input.value);
     s3.textContent=limit;
     resetCode();
 }
