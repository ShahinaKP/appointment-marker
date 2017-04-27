/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
Filename: list.controller.js
Description:
    - Appointment list Controller
* * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
export default class ListController {
    constructor(appointmentService) {
        this.appointmentService = appointmentService;
        this.appointmentList = this.appointmentService.getAppointments();
    }
}
