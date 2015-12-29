// jscs:disable
/* jshint ignore:start */
angular.module('recipe.mock', [])

.factory('RecipeMockTable', function () {

    var RecipeMockTable = {};

    RecipeMockTable.recipes = TAFFY([
        {
            title: "Stuffed Peppers",
            description: "My favorite stuffed peppers recipe.",
            servings: 4,
            servingSize: "1 pepper",
            dietInfo: {
                21day: {
                    green: 2,
                    red: 1,
                    yellow: 0.5,
                    blue: 0.5
                }
            },
            ingredients: [
                "4 bell peppers, any kind",
                " Hi aimee sdfkjdfj ksdfk"
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
        },

        {
            title: "Barbeque Pulled Pork Sandwich",
            description: "My favorite Barbeque Pulled Pork Sandwich recipe.",
            servings: 4,
            servingSize: "1 sandwhich",
            dietInfo: {
                21day: {
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
        },

        {
            title: "Grilled Fish Tostadas",
            description: "",
            servings: 2,
            servingSize: "1 corn tortilla",
            dietInfo: {
                21day: {
                    purple: 0,
                    red: 1,
                    yellow: 1,
                    green: 0.5,
                    blue: 1,
                    orange: 0,
                    grey: 0,
                    notes: ""
                },
                wwPointsPlus: {
                    points: 6,
                    notes: "2 tortillas with 3 oz fish and ¼ cup avocado/guacamole"
                }

            },
            ingredients: [
                "4 wild caught white fish fillets (e.g. halibut, tilapia, etc. A serving of fish is ⅓ to ½ lb)",
                "½ jar of medium salsa, any kind",
                "8 corn tortillas ",
                "mashed avocado or guacamole ",
                "optional: jalapenos, lettuce, cheese",
                "optional: salt and pepper to taste"
            ],
            instructions: [
                "Preheat your oven to 400 degrees ",
                "Place your fish fillets in a large piece of foil.  Cover with salsa and sprinkle with salt and pepper, if desired.",
                "Fold the foil over the fish to seal them in",
                "Grill the fish over medium heat for 6-8 minutes",
                "While the fish is cooking, cook the tortillas for 6-8 minutes on a cookie sheet in your preheated oven until they’re crisp but not brown",
                "Take the tortillas out of the oven and let cool ",
                "Spread the mashed avocado or guacamole over the tortillas (use only 1 blue container if you’re doing the 21 day fix diet)",
                "When fish has cooked, use a fork to flake apart.",
                "Transfer fish onto the tortillas ",
                "Top with the leftover salsa from the foil and add any additional toppings if desired"

            ]
        },

        {
            title: "template",
            description: "",
            servings: 0,
            servingSize: "",
            dietInfo: {
                21day: {
                    purple: 0,
                    red: 0,
                    yellow: 0,
                    green: 0,
                    blue: 0,
                    orange: 0,
                    grey: 0
                },
                ,
                wwPointsPlus: {
                    points: 0,
                    notes: ""
                }
            },
            ingredients: [
                "ingredient 1",
                "ingredient 2",
            ],
            instructions: [
                "instruction 1",
                "instruction 2"
            ]
        }
    ]);

    return RecipeMockTable;
});
/* jshint ignore:end */
// jscs:enable