/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
Filename: header.directive.js
Description:
    - Header directive
* * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
function appointmentHeader() {
    return {
        restrict: 'E',
        templateUrl: './src/app/components/header/header.html'
    }
}

export default angular.module('AppointmentMarker.components.appointmentHeader', [])
    .directive('appointmentHeader', appointmentHeader)
    .name;