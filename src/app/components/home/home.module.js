import angular from 'angular';
import uiRouter from 'angular-ui-router';

import router from './home.routes';
import HomeController from './home.controller';

export default angular.module('AppointmentMarker.home', [uiRouter])
    .config(router)
    .controller('HomeController', HomeController)
    .name;