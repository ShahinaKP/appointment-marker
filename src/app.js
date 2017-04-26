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
import home from './app/components/home/home.module';
import calendar from './app/components/calendar/calendar.module';
import appointment from './app/components/appointment/appointment.module';

//Directives
import appointmentHeader from './app/components/header/header.directive';
import appointmentNavbar from './app/components/navbar/navbar.directive';
import appointmentFooter from './app/components/footer/footer.directive';
//Services


angular.module("AppointmentMarker", [
    //External
    uiRouter,
    //Directives
    appointmentHeader,
    appointmentFooter,
    appointmentNavbar,
    //Services
    //Internal modules
    home,
    calendar,
    appointment
]).config(router);
