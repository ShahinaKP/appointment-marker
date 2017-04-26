
function appointmentHeader() {
    return {
        restrict: 'E',
        templateUrl: './src/app/directives/header/header.html'
    }
}

export default angular.module('AppointmentMarker.directives.appointmentHeader', [])
    .directive('appointmentHeader', appointmentHeader)
    .name;