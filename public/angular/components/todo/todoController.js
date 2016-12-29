app.controller("todoController", function ($scope, $http, todoFactory) {

    $scope.formData = {};

    // GET =====================================================================
    todoFactory.get()
        .success(function (data) {
            $scope.todos = data;
        });

    // CREATE ==================================================================
    $scope.createTodo = function () {
        if (!$.isEmptyObject($scope.formData)) {
            todoFactory.create($scope.formData)
                .success(function (data) {
                    $scope.formData = {};
                    $scope.todos = data;
                });
        }
    };

    // DELETE ==================================================================
    $scope.deleteTodo = function (id) {
        todoFactory.delete(id)
            .success(function (data) {
                $scope.todos = data;
            });
    };
});
