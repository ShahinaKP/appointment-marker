function appointmentFooter() {
    return {
        restrict: 'E',
        templateUrl: './src/app/directives/footer/footer.html'
    }
}

export default angular.module('AppointmentMarker.directives.appointmentFooter', [])
    .directive('appointmentFooter', appointmentFooter)
    .name;
