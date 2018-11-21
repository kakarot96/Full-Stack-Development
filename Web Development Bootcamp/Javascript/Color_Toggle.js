// Method 1

    // var button = document.getElementById("click");
    // var bod = document.querySelector("body");
    // var count = 0;
    // button.addEventListener("click",function(){
    //     count+=1;
    //     if(count%2 ===1){
    //         bod.style.background = "purple";
    //     }
    //     else{
    //         bod.style.background = "white";
    //     }
    // });


// Method 2

var button = document.getElementById("click");
button.addEventListener("click", function(){

    document.body.classList.toggle("purple");
});