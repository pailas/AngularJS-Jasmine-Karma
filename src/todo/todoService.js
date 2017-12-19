angular.module('myTodoApp')
.service('todoService', ['$http', '$q', function ($http, $q) {

	this.getMockTodos = function getData() {
		var deferred = $q.defer();

		$http.get('jsonplaceholder.typicode.com/todos').then(function (data) {
			deferred.resolve(data);
		}, function (error) {
			deferred.reject(error);
		});

		return deferred.promise;
	};

	this.getTodos = function () {
		return [
			{id:1, description:"todo 1"},
			{id:2, description:"todo 2"},
			{id:3, description:"todo 3"}
		];
	}
}]);