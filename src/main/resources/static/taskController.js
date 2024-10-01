app.controller('taskController', function($scope, $http) {
    $scope.tasks = [];
    
    // Carregar todas as tarefas
    $http.get('http://localhost:8080/api/tasks')
        .then(function(response) {
            $scope.tasks = response.data;
        });

    // Adicionar uma nova tarefa
    $scope.addTask = function() {
        $http.post('http://localhost:8080/api/tasks', $scope.task)
            .then(function(response) {
                $scope.tasks.push(response.data);
                $scope.task = {};
            });
    };

    // Deletar uma tarefa
    $scope.deleteTask = function(id) {
        $http.delete('http://localhost:8080/api/tasks/' + id)
            .then(function() {
                $scope.tasks = $scope.tasks.filter(task => task.id !== id);
            });
    };
});
