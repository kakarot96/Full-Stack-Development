var colors = [];
var boxes  = document.querySelectorAll(".box");
var answer = Math.round(Math.random()*(boxes.length-1));
var guess = document.getElementById("guess");
var message = document.getElementById("message");
var reset = document.getElementById("reset");

reset.addEventListener("click", function(){
generateAndSetColors(boxes.length);
message.textContent = "";
this.textContent = "New Colors";


});

generateAndSetColors(boxes.length);


for(var i=0;i<boxes.length;i++){
  

    boxes[i].addEventListener("click",function(){
        if(this.style.backgroundColor === colors[answer]){
           message.textContent = "Correct";
           changeColors(answer);
           reset.textContent = "Play Again?";
        }
        else{
            this.style.backgroundColor="#212121";
            message.textContent = "Try Again";
            
        }
    });
}

function changeColors(answer){
    for(var i=0;i<boxes.length;i++){
        boxes[i].style.backgroundColor=colors[answer];
    }
}
function random_rgb() {
    var o = Math.round, r = Math.random, s = 255;
    return 'rgb(' + o(r()*s) + ', ' + o(r()*s) + ', ' + o(r()*s)  + ')';
}

function generateAndSetColors(num){
    colors = [];
    for(var i=0;i<num;i++){
        var color = random_rgb();
        colors.push(color);
        boxes[i].style.backgroundColor = color;
    }
    answer = Math.round(Math.random()*(num-1));
    guess.textContent = colors[answer];
}