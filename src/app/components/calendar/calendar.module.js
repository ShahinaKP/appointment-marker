/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
Filename: calendar.routes.js
Description:
    - Calendar Module
* * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
import router from './calendar.routes';
import CalendarController from './calendar.controller';

export default angular.module('AppointmentMarker.calendar', [])
    .config(router)
    .controller('CalendarController', CalendarController)
    .name;