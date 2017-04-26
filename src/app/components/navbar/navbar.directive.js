/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
Filename: navbar.directive.js
Description:
    - Navbar directive
* * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
function appointmentNavbar() {
    return {
        restrict: 'E',
        templateUrl: './src/app/components/navbar/navbar.html'
    }
}

export default angular.module('AppointmentMarker.components.appointmentNavbar', [])
    .directive('appointmentNavbar', appointmentNavbar)
    .name;