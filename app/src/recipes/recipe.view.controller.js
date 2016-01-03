angular.module('recipe.recipeViewController', ['recipe.recipeService'])

.controller('RecipeViewController', ['$scope', 'RecipeService', function($scope, RecipeService) {

    $scope.recipe = {
            title: "Barbeque Pulled Pork Sandwich",
            description: "My favorite Barbeque Pulled Pork Sandwich recipe.",
            servings: 4,
            servingSize: "1 sandwhich",
            dietInfo: {
                twentyOneDay: {
                    purple: 0.25,
                    red: 1,
                    yellow: 1,
                    green: 0.25
                }
            },
            ingredients: [
                "1 pork loin",
                "½ cup unsweetened applesauce ",
                "½ cup water",
                "1 ¼ cups chopped onions and mushrooms (1 green container if you’re doing 21df",
                "1 tsp cayenne pepper",
                "1 tbsp garlic powder",
                "¼ cup red wine or apple cider vinegar",
                "¼ cup yellow mustard",
                "whole wheat buns or rolls"
            ],
            instructions: [
                "Combine pork loin, applesauce, chooped onions and mushrooms, cayenne pepper, and garlic powder in a crockpot",
                "Cook for 7-8 hours on low",
                "Drain and shred pork and then return to crockpot",
                "Stir in vinegar and mustard.  You may add more mustard and/or pepper, cayenne, garlic pepper if preferred.",
                "Service ⅔ cup (1 red container) pork on a whole wheat bun or roll"
            ]
        };

}]);