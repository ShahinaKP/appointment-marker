/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
Filename: appointment.module.js
Description:
    - Appointment module that handles data fetch and post
* * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
import router from './appointment.routes';
import AddController from './addAppointment/add.controller';
import ListController from './appointmentList/list.controller';
export default angular.module('AppointmentMarker.appointment', [])
    .config(router)
    .controller('AddController', AddController)
    .controller('ListController', ListController)
    .name;
