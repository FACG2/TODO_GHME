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
test('Testing the markTodo Function ',function(test){
  var actual_todos_items = logic.markTodo( [{id: 0, description: 'make tea', done: false}] , 0);
  var actual = actual_todos_items[0].done;

  var expected = true;
  test.equal(actual,expected,'id 0 Should be marked and its value is true' );
  test.end();
});


test('Testing the markTodo Function if its toggled or not',function(test){

var actual_todos_items = logic.markTodo(toDoArray, 3);
  var actual = actual_todos_items[3].done;

// console.log(toDoArray);
  var expected = false;
  test.equal(actual,expected,'id 3 Should be marked and its value is false' );
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
