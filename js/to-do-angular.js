angular.module('ToDo', [])
.controller('todoController', ['$scope', function ($scope) {

    $scope.todos = [];
//the list will be initiated as an empty array, if you want to have a starting item at initiation of page loading, you have to hard code it in the above array
    
    // ok so initializing the array as empty allows the app to start 'from             scratch', hence no initial text and no initial bulletpoint 
        
    
    $scope.addTodo = function () {
            
    $scope.todos.push({'title': $scope.newtodo, 'done':false});
//    the above code ensures that all of the new objects will be added on with a done property of false
        
    $scope.newtodo = '';
    // the above line is what resets the input box to empty after submission
        };
    
    $scope.cleardone = function() {
    $scope.todos = $scope.todos.filter(function(test) {
    
    if (!test.done) {
    
    return test;
    }
    
    });
    
    };
    
        }])