/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
Filename: calendar.routes.js
Description:
    - Calendar Module
* * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
import angular from 'angular';
import uiRouter from 'angular-ui-router';

import router from './calendar.routes';
import CalendarController from './calendar.controller';

export default angular.module('AppointmentMarker.calendar', [uiRouter])
    .config(router)
    .controller('CalendarController', CalendarController)
    .name;