var todos = [];

window.setTimeout(function(){
    var input = prompt("What would you like to do?");

    while(input !== "quit"){
        if(input === "new"){
            var newTodo = prompt("Enter a new todo");
            todos.push(newTodo);
        }
        else if(input === "list"){
            console.log(todos);
        }
        input = prompt("What would you like to do?");
    }
},500);
