angular.module('myTodoApp')
.provider('todos', function () {
	var todos = [
				{id:1, description:"todo 1"},
				{id:2, description:"todo 2"},
				{id:3, description:"todo 3"}
			];

	this.$get = function() {
		function getTodos () {
			return todos;
		}

		return {
			getTodos : getTodos
		};
	};
});