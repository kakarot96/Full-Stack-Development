var colors = [];
var boxes  = document.querySelectorAll(".box");
var answer = Math.round(Math.random()*(boxes.length-1));
var guess = document.getElementById("guess");
var message = document.getElementById("message");




function random_rgb() {
    var o = Math.round, r = Math.random, s = 255;
    return 'rgb(' + o(r()*s) + ', ' + o(r()*s) + ', ' + o(r()*s)  + ')';
}
for(var i=0;i<boxes.length;i++){
    var color = random_rgb();
    colors.push(color);
    boxes[i].style.backgroundColor = color;

    boxes[i].addEventListener("click",function(){
        if(this.style.backgroundColor === colors[answer]){
           console.log("Pass");
           message.textContent = "Correct";
           changeColors(answer);
        }
        else{
            this.style.backgroundColor="#212121";
            message.textContent = "Try Again";
            console.log("Fail");
        }
    });
}
guess.textContent = colors[answer];
function changeColors(answer){
    for(var i=0;i<boxes.length;i++){
        boxes[i].style.backgroundColor=colors[answer];
    }
}