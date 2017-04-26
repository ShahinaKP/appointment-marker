/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
Filename: app.js
Description:
    - Appointment module declaration with dependencies
* * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
//SASS
import './assets/scss/main.scss';

//External
import angular from 'angular';
import uiRouter from 'angular-ui-router';

//Internal
import router from './app.config';

//Directives
import appointmentHeader from './app/directives/header/header.directive';
import appointmentFooter from './app/directives/footer/footer.directive';
//Services


angular.module("AppointmentMarker", [
    //External
    uiRouter,
    //Directives
    appointmentHeader,
    appointmentFooter
    //Services
    //Internal modules
]).config(router);
