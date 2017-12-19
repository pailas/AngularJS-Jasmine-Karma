describe('todoController Spec', function() {
	var scope;
	var todoCtrl;

	beforeEach(module('myTodoApp'));

	beforeEach(inject(function($controller, $rootScope){
		scope = $rootScope.$new();
		todoCtrl = $controller('todoController', {$scope: scope});
	}));

	it("should have todos defined", function() {
		expect(todoCtrl.todos.length).toBeGreaterThan(2);
	});
});