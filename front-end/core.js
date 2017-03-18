// public/core.js
var myApp = angular.module('organizerApp', []);

function mainController($scope, $http) {
    $scope.formData = {};
    // when landing on the page, get all todos and show them
    $http.get('/api/tasks')
        .success(function(data) {
            $scope.tasks = data;
            console.log(data);
        })
        .error(function(data) {
            
            console.log('Error: ' + data);
        });

    // when submitting the add form, send the text to the node API
    
    $scope.createTask = function() {
        $http.post('/api/create_tasks', $scope.formData)
            .success(function(data) {
                $scope.formData = {}; // clear the form so our user is ready to enter another
                $scope.tasks = data;
                console.log(data);
            })
            .error(function(data) {
                console.log('Error: ' + data);
            });
    };

}