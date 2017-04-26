/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
Filename: appointment.routes.js
Description:
    - Appointment routes
* * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
routes.$inject = ['$stateProvider', '$urlRouterProvider'];

function routes($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('home', {
            abstract: true,
            template: '<ui-view></ui-view>',
        }).state('home.main', {
        	url: '/home',
            templateUrl: './src/app/components/home/home.html',
            controller: 'HomeController',
        });

    $urlRouterProvider.otherwise('/home');
}

export default routes;
