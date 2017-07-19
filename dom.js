// part 2 linking it all together
// The function here is called an iife,
// it keeps everything inside hidden from the rest of our application
(function() {
  // This is the dom node where we will keep our todo
  var container = document.getElementById('todo-container');
  var completed= document.getElementById('hana');
  var addTodoForm = document.getElementById('add-todo');

  var state =
   [
     {
      id: -3,
      description: 'Learn javascript',
      state: false,
    },
    {
      id: -2,
      description: 'Watching A Movie',
      state: true,
    },
    {
      id: -1,
      description: 'Shopping',
      state: false,
    },
  ]; // this is our initial todoList

  // This function takes a todo, it returns the DOM node representing that todo
  var createTodoNode = function(todo) {
    var todoNode = document.createElement('li');

  if(todo.state){
    todoNode.innerHTML = "<span class='description-span' style='text-decoration: line-through;'>" + todo.description +"</span>";

  }else{
    todoNode.innerHTML = "<span class='description-span'>" + todo.description +"</span>";

  }


    // you will need to use addEventListener

    // add span holding description

    // this adds the delete button
    var deleteButtonNode = document.createElement('button');
    deleteButtonNode.textContent = "Delete";
    deleteButtonNode.addEventListener('click', function(event) {
      var newState = todoFunctions.deleteTodo(state, todo.id);
      update(newState);
    });
    todoNode.appendChild(deleteButtonNode);

    // add markTodo button
    var markButtonNode = document.createElement('button');
    markButtonNode.textContent = "Done";
    markButtonNode.addEventListener('click', function(event) {
      console.log("newState",state);
      var newState = todoFunctions.markTodo(state, todo.id);

      update(newState);

    });
    todoNode.appendChild(markButtonNode);
    // add classes for css

    return todoNode;
  };

  // bind create todo form
  if (addTodoForm) {
    addTodoForm.addEventListener('submit', function(event) {
      // https://developer.mozilla.org/en-US/docs/Web/Events/submit
      // what does event.preventDefault do?
      // what is inside event.target?
var desctext=event.target;
      var description = desctext.firstElementChild.value;// event.target ....
      event.preventDefault();
    var newState = todoFunctions.addTodo(state, {description: description});
    function sortFunction(a, b) {

      return (b.id) - (a.id);
    }
    var newsort=todoFunctions.sortTodos(newState, sortFunction)
      // hint: todoFunctions.addTodo
    //  var newState = []; // ?? change this!
      update(newsort);
    });
  }

  // you should not need to change this function
  var update = function(newState) {
    state = newState;
    renderState(state);
  };

  // you do not need to change this function
  var renderState = function(state) {
    console.log("state",state.length);
    var todoListNode = document.createElement('ul');
      todoListNode.setAttribute("id", "todoListNode");
      console.log("state");
      if(state.length!=0){
        state.forEach(function(todo) {
          todoListNode.appendChild(createTodoNode(todo));


          container.replaceChild(todoListNode, container.firstChild);
        });

      }else{
        document.getElementById("todoListNode").innerHTML=null;
      }
  };

  if (container) renderState(state);
})();
