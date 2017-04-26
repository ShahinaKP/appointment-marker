/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
Filename: appointment.module.js
Description:
    - Appointment module that handles data fetch and post
* * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
import angular from 'angular';
import uiRouter from 'angular-ui-router';

import router from './appointment.routes';
import AddController from './addAppointment/add.controller';
import ListController from './appointmentList/list.controller';
export default angular.module('AppointmentMarker.appointment', [uiRouter])
    .config(router)
    .controller('AddController', AddController)
    .controller('ListController', ListController)
    .name;