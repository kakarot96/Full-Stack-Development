// Toggle status of a todo
$("ul").on("click","li",function(){
$(this).toggleClass("done");
});

//Delete a todo from the list
$("ul").on("click","span",function(event){

$(this).parent().fadeOut(500,function(){
    $(this).remove();
});
event.stopPropagation();
});

$("input[type=text]").keypress(function(event){
    if(event.which === 13){
        var newTodo = $(this).val();
        $(this).val("");
        $("ul").append("<li><span>Del </span>"+newTodo+"</li>");
        console.log("enter is clicked");
    }
});