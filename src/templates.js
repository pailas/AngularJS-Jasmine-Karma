angular.module("templates-main", ["templates/test.html"]);

angular.module("templates/test.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("templates/test.html",
    "<h1>Welcome to jasmine testing</h1>");
}]);
