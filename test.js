var test = require('tape');
var logic = require('./logic');


var toDoArray=[
  {id: 0, description: 'make tea', done: false},
  {id: 1, description: 'make tea', done: true},
  {id: 2, description: 'make tea', done: false},
  {id: 3, description: 'make tea', done: true},
  {id:4, description: 'make tea', done: false},
  {id: 5, description: 'make tea', done: true},
  {id: 6, description: 'make tea', done: true},
  {id: 7, description: 'make tea', done: false},
] ;
//addTodo function test cases
test('Testing the addTodo Function, #scenario:1 when adding just the description in a todo item',function(test){


  var actual = logic.addTodo(toDoArray ,  { description: 'Sty home sss'} );

  var expected =[
    {id: 0, description: 'make tea', done: false},
    {id: 1, description: 'make tea', done: true},
    {id: 2, description: 'make tea', done: false},
    {id: 3, description: 'make tea', done: true},
    {id:4, description: 'make tea', done: false},
    {id: 5, description: 'make tea', done: true},
    {id: 6, description: 'make tea', done: true},
    {id: 7, description: 'make tea', done: false},
    {id: 8, description: 'Sty home sss', done: false},
  ] ;



  test.deepEqual(actual,expected,'should add new todo to the todos and add the todo id and done defualt value' );
  test.end();
});


test('Testing the addTodo Function, #scenario:2 when adding full todo ',function(test){


  var actual =logic.addTodo(toDoArray , {id: 8, description: 'Sty home sss', done: false});

  var expected =[
    {id: 0, description: 'make tea', done: false},
    {id: 1, description: 'make tea', done: true},
    {id: 2, description: 'make tea', done: false},
    {id: 3, description: 'make tea', done: true},
    {id:4, description: 'make tea', done: false},
    {id: 5, description: 'make tea', done: true},
    {id: 6, description: 'make tea', done: true},
    {id: 7, description: 'make tea', done: false},
    {id: 8, description: 'Sty home sss', done: false},
  ] ;


  test.deepEqual(actual,expected,'should return the array with the add value' );
  test.end();
});
test('Testing the addTodo Function, #scenario:3 when adding an empty todo',function(test){


  var actual =logic.addTodo(toDoArray , {});

  var expected =[
    {id: 0, description: 'make tea', done: false},
    {id: 1, description: 'make tea', done: true},
    {id: 2, description: 'make tea', done: false},
    {id: 3, description: 'make tea', done: true},
    {id:4, description: 'make tea', done: false},
    {id: 5, description: 'make tea', done: true},
    {id: 6, description: 'make tea', done: true},
    {id: 7, description: 'make tea', done: false},

  ] ;



  test.deepEqual(actual,expected,'should return the same array without adding a thing' );
  test.end();
});
//
// //deleteTodo function test cases
test('Testing the deleteTodo Function,#scenario:1 the usual deleting a todo from the todos',function(test) {
  var actual=logic.deleteTodo(toDoArray , 3);
  var expected=[
    {id: 0, description: 'make tea', done: false},
    {id: 1, description: 'make tea', done: true},
    {id: 2, description: 'make tea', done: false},
    {id: 4, description: 'make tea', done: false},
    {id: 5, description: 'make tea', done: true},
    {id: 6, description: 'make tea', done: true},
    {id: 7, description: 'make tea', done: false},
  ] ;

  test.deepEqual(actual,expected,'should delete the todo with the id 3');
  test.end();
});
test('Testing the deleteTodo Function,#scenario:2 deleting a todo from the todos that does not contain the todo',function(test){

   var actual=logic.deleteTodo(toDoArray , 9);
   var expected=[
     {id: 0, description: 'make tea', done: false},
     {id: 1, description: 'make tea', done: true},
     {id: 2, description: 'make tea', done: false},
     {id: 3, description: 'make tea', done: true},
     {id: 4, description: 'make tea', done: false},
     {id: 5, description: 'make tea', done: true},
     {id: 6, description: 'make tea', done: true},
     {id: 7, description: 'make tea', done: false},
   ] ;
   test.deepEqual(actual,expected,'the todos should not changed ');
   test.end();
});
test('Testing the deleteTodo Function,#scenario:3 deleting a todo from an empty todos',function(test){

   var actual=logic.deleteTodo([] , 4);
   var expected=[];
   test.deepEqual(actual,expected,'Nothing gonna happen,');
   test.end();
});

//markTodo function test cases
test('Testing the markTodo Function ',function(test){
  var actual_todos_items = logic.markTodo( [{id: 0, description: 'make tea', done: false}] , 0);
  var actual = actual_todos_items[0].done;

  var expected = true;
  test.equal(actual,expected,'id 0 Should be marked and its value is true' );
  test.end();
});
test('Testing the markTodo Function if its toggled or not', function(test) {

  var actual_todos_items = logic.markTodo(toDoArray, 3);
  var actual = actual_todos_items[3].done;

  // console.log(toDoArray);
  var expected = false;
  test.equal(actual, expected, 'id 3 Should be marked and its value is false');
  test.end();
});
test('Testing the markTodo returned array other item got changed or not ',function(test){


   var actual_todos_items = logic.markTodo(toDoArray, 3);
  var actual =actual_todos_items;
  var expected = [
    {id: 0, description: 'make tea', done: false},
    {id: 1, description: 'make tea', done: true},
    {id: 2, description: 'make tea', done: false},
    {id: 3, description: 'make tea', done: false},
    {id:4, description: 'make tea', done: false},
    {id: 5, description: 'make tea', done: true},
    {id: 6, description: 'make tea', done: true},
    {id: 7, description: 'make tea', done: false},
  ] ;
  test.deepEqual(actual,expected,'id 3 Should be marked and its value is false' );
  test.end();
});
//
//
// //sortTodos testCases

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

  var result = logic.sortTodos(todos, sortFunction);
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
