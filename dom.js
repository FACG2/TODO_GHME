// part 2 linking it all together
// The function here is called an iife,
// it keeps everything inside hidden from the rest of our application
(function() {
  // This is the dom node where we will keep our todo
  var container = document.getElementById('todo-container');
  var addTodoForm = document.getElementById('add-todo');

  var state =[{
      id: -3,
      description: 'first todo',
      done: false,
    },
    {
      id: -2,
      description: 'second todo',
      done: true,
    },
    {
      id: -1,
      description: 'third todo',
      done: false,
    },
  ]; // this is our initial todoList

  // This function takes a todo, it returns the DOM node representing that todo
  var createTodoNode = function(todo) {
    var divsection = document.querySelector("main-todo");
    var todoNode = document.createElement('div');
    todoNode.className="desc";
    //adding the node elements

    //adding the task number span
    var taskNumberSpan = document.createElement('span');
    taskNumberSpan.textContent = '#'+todo.id;
    todoNode.appendChild(taskNumberSpan);

    //adding the description
    var descriptinSpan = document.createElement('span');
    descriptinSpan.className="description";
    descriptinSpan.textContent = todo.description;
    todoNode.appendChild(descriptinSpan);

    //adding checked button
    var checkButton = document.createElement('button');
    checkButton.className=".btn-check";
    checkButton.addEventListener('click', function(event) {
      var newState = todoFunctions.markTodo(state, todo.id);
      update(newState);
    });
    todoNode.appendChild(checkButton);

    //adding the EditButton
    var editButton = document.createElement('button');
    editButton.className=".btn-edit";
    editButton.addEventListener('click', function(event) {
      var newState = todoFunctions.editTodos(state, todo.id ,todo.description);
      update(newState);
    });
    todoNode.appendChild(editButton);

    //adding the deleteButton
    var deleteButton = document.createElement('button');
    deleteButton.className=".btn-delete";
    deleteButton.addEventListener('click', function(event) {
      var newState = todoFunctions.deleteTodo(state, todo.id );
      update(newState);
    });
    todoNode.appendChild(deleteButton);

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
    var todoListNode = document.createElement('ul');

    state.forEach(function(todo) {
      todoListNode.appendChild(createTodoNode(todo));
    });


    // you may want to add a class for css
    container.replaceChild(todoListNode, container.firstChild);
  };

  if (container) renderState(state);
})();
