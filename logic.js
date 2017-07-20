// Part 1. Fill in any missing parts of the todoFunction object!
// you can access these on todo.todoFunctions
// For part one we expect you to use tdd

var todoFunctions = {
  // todoFunctions.generateId() will give you a unique id
  // You do not need to understand the implementation of this function.
  generateId: (function() {
    var idCounter = 0;

    function incrementCounter() {
      return (idCounter += 1);
    }

    return incrementCounter;
  })(),
  addTodo: function(todos, newTodo) {
    //when adding an empty todo ,it will add nothing
    console.log(IsValid(newTodo.description));

    if (newTodo.description === undefined || IsValid(newTodo.description) ||  todos.length > 24)
      return todos;
    else{
    //when ther is an id ,it's a Dummy statmen ,but to insure the logic

    //this is the usual flow when adding a todo that has only the description
    return todos.concat({
      id: todos.length,
      description: newTodo.description,
      done: false
    });
      }
    function IsValid(text) {
      if(text !== undefined)
      if(text.trim().length === 0 )
      return true;
      return false;
    }

  },



  deleteTodo: function(todos, idToDelete) {
    // should leave the input argument todos unchanged
    // return a new array, this should not contain any todo with an id of idToDelete
    // hint: array.filter
    var new_array = todos.filter(function(obj) {
      return obj.id !== idToDelete;
    })

    return new_array;
  },
  markTodo: function(todos, idToMark) {
    // should leave the input argument todos unchanged
    // in the new todo array, all elements will remain unchanged except the one with id: idToMark
    // this element will have its done value toggled
    // hint: array.map
    var new_array = todos.map(function(item) {
      var new_item = Object.assign({}, item);
      if (idToMark === new_item.id) {
        new_item.done = !new_item.done;
      }
      return new_item;
    });
    return new_array;
  },
  sortTodos: function(todos, sortFunction) {
    // stretch goal! Do this last
    // should leave the input arguement todos unchanged
    // sortFunction will have same signature as the sort function in array.sort
    // hint: array.slice, array.sort
    var newArray = todos.slice(0);
    return newArray.sort(sortFunction);

  },
  editTodos: function functionName(todos, id, description) {
    var new_array = todos.map(function(todo) {
      var new_item = Object.assign({}, todo);
      if (id == new_item.id) {
        new_item.description = description;
      }
      return new_item;
    });
    return new_array;
  },

};
// Why is this if statement necessary?
// The answer has something to do with needing to run code both in the browser and in Node.js
// See this article for more details:
// http://www.matteoagosti.com/blog/2013/02/24/writing-javascript-modules-for-both-browser-and-node/
if (typeof module !== 'undefined') {
  module.exports = todoFunctions;
}
