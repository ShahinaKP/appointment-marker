import router from './home.routes';
import HomeController from './home.controller';

export default angular.module('AppointmentMarker.home', [])
    .config(router)
    .controller('HomeController', HomeController)
    .name;