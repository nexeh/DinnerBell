angular.module('recipe.recipeListController', ['recipe.recipeService'])

.controller('recipeListController', ['$scope', 'RecipeService', function($scope, RecipeService) {

    $scope.recipeList;

    $scope.get = function () {
        RecipeService.get().then(function (data) {
            console.log(data.data);
            $scope.recipeList = data.data;
        });
    };

    $scope.get();

}]);