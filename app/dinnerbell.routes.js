angular.module('dinnerbell.routes', [])
  .config(function($stateProvider, $urlRouterProvider) {

    // For any unmatched url, redirect to /
    $urlRouterProvider.otherwise("/");

    $stateProvider
      .state('splash', {
        url: "/",
        templateUrl: "src/splash/splash.tmpl.html"
      })
      .state('login', {
        url: "/login",
        templateUrl: "src/login/login.tmpl.html"
      })
      .state('recipe', {
        url: "/recipe",
        templateUrl: "src/recipes/recipe.view.tmpl.html",
        controller: 'RecipeViewController'
      });
  });
