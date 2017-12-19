
angular.module('myTodoApp')
.controller('todoController', ['$scope', 'todoService', function ($scope, todoService) {
		var vm = this;

		vm.todos = todoService.getTodos();
}]);