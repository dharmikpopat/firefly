'use strict';

angular.module('fireflyApp')
  .constant('GOOGLE_API_KEY', 'Set in server/config/local.env.js')
  .config(function ($routeProvider, $locationProvider, $mdThemingProvider) {
    $routeProvider.otherwise({ redirectTo: '/' });

    $locationProvider.html5Mode(true);

    $mdThemingProvider.theme('default')
        .primaryPalette('grey')
        .accentPalette('indigo');
  })
  .config(function (uiGmapGoogleMapApiProvider, GOOGLE_API_KEY) {
    uiGmapGoogleMapApiProvider.configure({
      key: GOOGLE_API_KEY,
      v: '3.17',
      libraries: 'weather,geometry,visualization'
    });
  })
  .service('config', config);

function config(GOOGLE_API_KEY) {
  return {
    GOOGLE_API_KEY: GOOGLE_API_KEY,
    DOMAIN: 'gdgroups.org',
    DEFAULT_PREFIX: 'devfest'
  };
}
