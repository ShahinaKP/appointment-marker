/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
Filename: appointment.routes.js
Description:
    - Appointment routes
* * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
routes.$inject = ['$stateProvider', '$urlRouterProvider'];

function routes($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('home.main.appointment', {
            url: '/add',
            template: require('./addAppointment/add.html'),
            controller: 'AddController',
            controllerAs: 'appointment'
        })
        .state('home.main.appointmentlist', {
            url: '/list',
            template: require('./appointmentList/list.html'),
            controller: 'ListController',
            controllerAs: 'list'
        })

    $urlRouterProvider.otherwise('/home');
}

export default routes;