angular.module('ToDo', [])
.controller('todoController', ['$scope', function ($scope) {

    $scope.todos = [{'title': 'build', 'done':false}];

    
    // ok so initializing the array as empty allows the app to start 'from             scratch', hence no initial text and no initial bulletpoint 
        
    
    $scope.addTodo = function () {
            
    $scope.todos.push({'title': $scope.newtodo});
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