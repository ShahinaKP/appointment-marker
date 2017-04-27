/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
Filename: calendar.routes.js
Description:
    - Calendar routes
* * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
routes.$inject = ['$stateProvider', '$urlRouterProvider'];

function routes($stateProvider, $urlRouterProvider) {
    $stateProvider
       .state('home.main.calendar', {
            url: '/calendar',
            templateUrl: './src/app/components/calendar/calendar.html',
            controller: 'CalendarController',
            controllerAs: 'calendar'
        });

    $urlRouterProvider.otherwise('/home');
}

export default routes;
