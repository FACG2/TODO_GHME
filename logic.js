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
    // should leave the input argument todos unchanged
    // returns a new array, it should contain todos with the newTodo added to the end.
    // add an id to the newTodo. You can use the generateId function to create an id.
    // hint: array.concat

    var todoo = {};
    todoo.id = todoFunctions.generateId();
    todoo.state = false;
    todoo.description = newTodo.description;
    var newtodoo = todos.concat(todoo);
    console.log('add old array', todos);
    console.log('add new array', newtodoo);
    return newtodoo;


  },



  deleteTodo: function(todos, idToDelete) {
    // should leave the input argument todos unchanged
    // return a new array, this should not contain any todo with an id of idToDelete
    // hint: array.filter

    function isid(to) {
      return to.id != idToDelete;
    }
    var newtodoo = todos.filter(isid);

    console.log('del old array', todos);
    console.log('del new array', newtodoo);
    return newtodoo;

  },
  markTodo: function(todos, idToMark) {
    // should leave the input argument todos unchanged
    // in the new todo array, all elements will remain unchanged except the one with id: idToMark
    // this element will have its done value toggled


    return todos.map(function(tod) {
      var newtod = Object.assign({}, tod);
      if (newtod.id == idToMark) {
        if (newtod.state == false) {
          newtod.state = true;
        } else if (newtod.state == true) {
          newtod.state = false;
        }

      }
      console.log('mark old array', todos);
      console.log('mark new array', newtod);
      return newtod;
    });
  },
  sortTodos: function(todos, sortFunction) {
    // stretch goal! Do this last
    // should leave the input arguement todos unchanged
    // sortFunction will have same signature as the sort function in array.sort
    // hint: array.slice, array.sort

    var todo = todos.slice(0);

    todo.sort(sortFunction);


    console.log('sort old array', todos);
    console.log('sort new array', todo);
    return todo;
  },

};


// Why is this if statement necessary?
// The answer has something to do with needing to run code both in the browser and in Node.js
// See this article for more details:
// http://www.matteoagosti.com/blog/2013/02/24/writing-javascript-modules-for-both-browser-and-node/
if (typeof module !== 'undefined') {
  module.exports = todoFunctions;
}
