var test = require('tape');
var logic = require('./logic');

var todo=[                              {id: 0, description: 'make tea', done: false},
                                        {id: 1, description: 'make tea', done: true},
                                        {id: 2, description: 'make tea', done: false},
                                        {id: 3, description: 'make tea', done: true},
                                        {id:4, description: 'make tea', done: false},
                                        {id: 5, description: 'make tea', done: true},
                                        {id: 6, description: 'make tea', done: true},
                                        {id: 7, description: 'make tea', done: false},
                                        {id: 8, description: 'make tea', done: true},
                                        {id: 9, description: 'make tea', done: false},
                                        {id: 10, description: 'make tea', done: true},
                                        {id:11, description: 'make tea', done: false},
                                        {id: 12, description: 'make tea', done: true},
                                        {id: 13, description: 'make tea', done: true},
                                        {id: 14, description: 'make tea', done: false},
                                        {id: 15, description: 'make tea', done: false},
                                        {id: 16, description: 'make tea', done: true},
                                        {id: 17, description: 'make tea', done: false},
                                        {id: 18, description: 'make tea', done: true},
                                        {id:19, description: 'make tea', done: false},
                                        {id: 20, description: 'make tea', done: true},
                                        ];
//test if items toggles when the function markTodo is called
todo.forEach(function (item ,id){
  test('Testing the markTodo Function ',function(test) {
    var actual_item_state = logic.markTodo(todo , id);
    var actual = item.done;
    var expected = true;
    test.equal(actual,expected,'id '+item.id+' Should be marked and its value is true' );
    test.end();

  });
});

//test if  the other items affected when an item got toggled when the function markTodo is called
todo.forEach(function (item){


});
