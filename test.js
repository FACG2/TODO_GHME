var test = require('tape');
var todoFunctions = require('./logic');

test('Example test', function(t) {

  var todos = [];
  var newTodo = {
    description: 'make smoothie out of things that should really be cooked'
  };
  var result = todoFunctions.addTodo(todos, newTodo);
  var expected = [{
    id: 1,
    description: "make smoothie out of things that should really be cooked",
    state: false,
  }];
  t.deepEqual(result, expected, 'equal');
  t.end();
});


test('Example test', function(t) {

  var todos = [{
    description: 'make tea'
  }];
  var newTodo = {
    description: 'make eggs'
  };
  var result = todoFunctions.addTodo(todos, newTodo);
  var expected = [{
      description: 'make tea',
    },
    {
      id: 2,
      description: 'make eggs',
      state: false,
    }
  ]
  t.deepEqual(result, expected, 'equal');
  t.end();
});



//////////////delete //////////////////



test('Example test', function(t) {

  var todos = [{
    id: 2,
    description: "haha",
    state: false
  }];
  var idToDelete = 2;
  var result = todoFunctions.deleteTodo(todos, idToDelete);
  var expected = [];
  t.deepEqual(result, expected, 'equal');
  t.end();
});


test('Example test', function(t) {

  var todos = [{
    id: 2,
    description: "haha",
    state: false
  }, {
    id: 3,
    description: "walid",
    state: true
  }];
  var idToDelete = 2;
  var result = todoFunctions.deleteTodo(todos, idToDelete);
  var expected = [{
    id: 3,
    description: "walid",
    state: true
  }];
  t.deepEqual(result, expected, 'equal');
  t.end();
});





test('Example test', function(t) {

  var todos = [];
  var idToDelete = 2;
  var result = todoFunctions.deleteTodo(todos, idToDelete);
  var expected = [];
  t.deepEqual(result, expected, 'equal');
  t.end();
});

///////////mark ////////////


test('Example test', function(t) {

  var todos = [{
    id: 2,
    description: "haha",
    state: false
  }, ];
  var idToMark = 2;
  var result = todoFunctions.markTodo(todos, idToMark);
  var expected = [{
    id: 2,
    description: "haha",
    state: true
  }];
  t.deepEqual(result, expected, 'equal');
  t.end();
});


test('Example test', function(t) {

  var todos = [{
    id: 2,
    description: "haha",
    state: false
  }, {
    id: 3,
    description: "walid",
    state: true
  }];
  var idToMark = 2;
  var result = todoFunctions.markTodo(todos, idToMark);
  var expected = [{
    id: 2,
    description: "haha",
    state: true
  }, {
    id: 3,
    description: "walid",
    state: true
  }];
  t.deepEqual(result, expected, 'equal');
  t.end();
});



/////////////sort/////////////////
test('Example test', function(t) {

  var todos = [{
    id: 2,
    description: "haha",
    state: true
  }, {
    id: 1,
    description: "qamar",
    state: false
  }, ];

  function sortFunction(a, b) {

    return (a.id) - (b.id);
  }

  var result = todoFunctions.sortTodos(todos, sortFunction);
  var expected = [{
    id: 1,
    description: "qamar",
    state: false
  }, {
    id: 2,
    description: "haha",
    state: true
  }];
  t.deepEqual(result, expected, 'equal');
  t.end();
});




////////////////////

test('Example test', function(t) {

  var todos = [{
    id: 2,
    description: "haha",
    state: false
  }, {
    id: 3,
    description: "haha",
    state: true
  }, {
    id: 4,
    description: "haha",
    state: false
  }, {
    id: 1,
    description: "qamar",
    state: true
  }, ];

  function sortFunction(a, b) {

    return (a.id) - (b.id);
  }

  var result = todoFunctions.sortTodos(todos, sortFunction);
  var expected = [{
    id: 1,
    description: "qamar",
    state: true
  }, {
    id: 2,
    description: "haha",
    state: false
  }, {
    id: 3,
    description: "haha",
    state: true
  }, {
    id: 4,
    description: "haha",
    state: false
  }, ];
  t.deepEqual(result, expected, 'equal');
  t.end();
});
