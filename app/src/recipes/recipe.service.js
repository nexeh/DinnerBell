angular.module('recipe.recipeService', [])

.factory('RecipeService', ['$http',function($http) {

	var RecipeService = {};

	RecipeService.get = function() {
		return $http.get('/api/recipe');
	};

	RecipeService.getOne = function(id) {
		return $http.get('/api/recipe/' + id);
	};

	RecipeService.create = function(recipeData) {
		return $http.post('/api/recipe', recipeData);
	};

	RecipeService.delete = function(id) {
		return $http.delete('/api/recipe/' + id);
	};

	return RecipeService;
}]);