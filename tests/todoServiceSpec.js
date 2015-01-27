describe('todoService', function() {
	var todoSvc;
	beforeEach(module('myTodoApp'));

	beforeEach(inject(function ($http, $q, todoService) {
		todoSvc = todoService;
	}));

	it("should behave been defined", function() {
		expect(todoSvc.getTodos).toBeDefined();
	});	

	it("should return 3 todos", function() {
		expect(todoSvc.getTodos().length).toBe(3);
	});

});