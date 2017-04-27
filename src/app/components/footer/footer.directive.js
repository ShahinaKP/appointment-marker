/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
Filename: footer.directive.js
Description:
    - Footer directive
* * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
function appointmentFooter() {
    return {
        restrict: 'E',
        templateUrl: './src/app/components/footer/footer.html'
    }
}

export default angular.module('AppointmentMarker.components.appointmentFooter', [])
    .directive('appointmentFooter', appointmentFooter)
    .name;
