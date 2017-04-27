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
// import smartTable from 'angular-smart-table';
// import uiCalendar from 'angular-ui-calendar';

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
import appointmentService from './app/components/appointment/appointment.service';

angular.module("AppointmentMarker", [
    //External
    uiRouter,
    // smartTable,
    // uiCalendar,
    //Directives
    appointmentHeader,
    appointmentFooter,
    appointmentNavbar,
    //Services
    appointmentService,
    //Internal modules
    home,
    calendar,
    appointment
]).config(router);
