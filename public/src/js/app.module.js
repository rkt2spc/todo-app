var app = angular.module('app', ['ui.router', 'appComponents', 'appControllers', 'appServices']);

app.config(['$stateProvider', '$urlRouterProvider', '$locationProvider',
  function ($stateProvider, $urlRouterProvider, $locationProvider) {

    // SPA HTML5 Mode
    // $locationProvider.html5Mode({ enabled: true }).hashPrefix('!');
    $urlRouterProvider.otherwise('/');

    // UI-Router
    // Application states
    var applicationStates = [
      // Pre-authenticated
      {
        name: 'dashboard',
        url: '/',
        component: 'dashboard'
      }
    ];


    applicationStates.forEach((state) => {
      $stateProvider.state(state);
    });
  }
]);

app.run(['$rootScope', '$transitions',
  function ($rootScope, $transitions) {

    // Default Substate Redirection
    $transitions.onBefore({ to: (state) => state.defaultSubstate }, (trans) => {
      return trans.router.stateService.target(trans.to().defaultSubstate);
    });

    // Loading Screen Trigger
    $transitions.onStart({}, () => { $rootScope.loading = true; });
    $transitions.onFinish({}, () => {
      $rootScope.loading = false;
      $("html, body").animate({ scrollTop: 0 }, 200);
    });
  }]);