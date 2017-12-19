describe('todoProvider', function () {
	var todoProv;

	beforeEach(function () {
		module('myTodoApp', function (todosProvider) {
			todoProv = todosProvider;
		});
	});

	it("should behave been defined", inject(function () {
		expect(todoProv).toBeDefined();
	}));

	it("should have more than one todos", inject(function () {
		expect(todoProv.$get().getTodos().length).toBeGreaterThan(1);
	}));
});