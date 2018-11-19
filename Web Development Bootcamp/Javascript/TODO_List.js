var todos = [];

window.setTimeout(function(){
    var input = prompt("What would you like to do?");

    while(input !== "quit"){
        
        if(input === "new"){
          addTodo();  
        }
        else if(input === "list"){
            listTodo();
        }
        else if(input === "delete"){

           delTodo();
        }
        input = prompt("What would you like to do?");
    }
    console.log("Ok! You have quit the APP");
},500);




function listTodo(){
    console.log("**********");
    todos.forEach(function(todo,index){
         console.log(index+". "+todo);
    });
    console.log("**********");
}

function delTodo(){
    var idx = prompt("Enter the index you want to delete");
    todos.splice(idx,1);
    console.log("Todo deleted");
}

function addTodo(){
    var newTodo = prompt("Enter a new todo");
    todos.push(newTodo);
    console.log("Todo added");
}