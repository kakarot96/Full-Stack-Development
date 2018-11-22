var colors = [];
var boxes  = document.querySelectorAll(".box");
var answer = Math.round(Math.random()*(boxes.length-1));
var guess = document.getElementById("guess");
var message = document.getElementById("message");
var reset = document.getElementById("reset");
var easyBtn = document.getElementById("easyBtn");
var hardBtn = document.getElementById("hardBtn");

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
easyBtn.addEventListener("click",function(){
    easyBtn.classList.add("selected");
    hardBtn.classList.remove("selected");
    message.textContent = "";
    generateAndSetColors(3);
});

hardBtn.addEventListener("click",function(){
    easyBtn.classList.remove("selected");
    hardBtn.classList.add("selected");
    message.textContent = "";
    generateAndSetColors(boxes.length);
});

reset.addEventListener("click", function(){
    generateAndSetColors(colors.length);
    message.textContent = "";
    this.textContent = "New Colors";
    });




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
    for(var i=0;i<boxes.length;i++){
        var color = random_rgb();
        if(i<num){
            colors.push(color);
            boxes[i].style.backgroundColor = color;
            boxes[i].style.display = "block";
        }
        else{
            boxes[i].style.display = "none";
        }    
    }
    answer = Math.round(Math.random()*(num-1));
    guess.textContent = colors[answer];
}