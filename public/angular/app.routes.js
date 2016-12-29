app.config(['$routeProvider', function ($routeProvider) {

    $routeProvider
        .when('/', {
            templateUrl: 'angular/components/todo/todoView.html',
            controller: 'todoController'
        })
}]);