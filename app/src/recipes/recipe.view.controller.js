angular.module('recipe.recipeViewController', ['recipe.recipeService'])

.controller('RecipeViewController', ['$scope', 'RecipeService', function($scope, RecipeService) {

    $scope.recipe = {
        title: "Stuffed Peppers",
        description: "My favorite stuffed peppers recipe.",
        servings: 4,
        servingSize: "1 pepper",
        dietInfo: {
            twentyOneDay: {
                green: 2,
                red: 1,
                yellow: 0.5,
                blue: 0.5
            }
        },
        ingredients: [
            "4 bell peppers, any kind",
            "½ pound 93% lean ground turkey",
            "1 15 oz can fire roasted tomatoes",
            "2 grated garlic cloves",
            "1 cup chopped onions (1 green container if you’re doing 21 day fix diet)",
            "1 cup cooked brown rice (2 yellow containers if you’re doing 21 day fix diet)",
            "½ cup shredded cheddar cheese (2 blue containers if you’re doing 21 day fix diet)",
            "1 tbsp black pepper",
            "1 tbsp garlic powder",
            "1 tbsp onion powder",
            "1 tbsp ground cumin",
            "1 tbsp italian seasoning",
            "1 tbsp paprika",
            "1 tbsp tabasco (add more or less depending on preference)",
            " tbsp extra virgin olive oil",
            "½ tsp salt optional"
        ],
        instructions: [
            "Prepare rice using package directions ",
            "Preheat the oven to 325 degrees",
            "Saute onion and garlic in a pan with small amount of extra virgin olive oil",
            "Remove garlic and onion from pan and set aside",
            "Brown the ground turkey in the same pan",
            "While the turkey is cooking, chop off the bell pepper tops and boil water in a large pot",
            "Boil the peppers for three minutes.  Remove the peppers and drain on a paper towel",
            "Use a colander/strainer to separate the fire roasted tomatoes from the sauce that it’s soaking in from the can.  Spread the the sauce in the bottom of a baking dish.",
            "Take out a large mixing bowl and combine the cooked ground turkey, onions, garlic, 1 cup rice (2 yellow containers), ¼ cup cheese (1 blue container), tomatoes, tabasco, black pepper, garlic powder, onion powder, ground cumin, italian seasoning, and paprika.  Mix it all together.",
            "Fill each pepper with the above mixture.  Sprinkle ¼ cup cheese (1 blue container) and paprika on top.",
            "Bake for 20-25 min"
        ]
    };

}]);