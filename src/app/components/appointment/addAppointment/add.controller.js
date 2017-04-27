/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
Filename: add.controller.js
Description:
    - Add appointment Controller
* * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
export default class AddController {
    constructor(appointmentService) {
        this.appointmentService = appointmentService;
        this.appointmentList = this.appointmentService.getAppointments();
    }
    getAppointments() {
        this.appointmentList = this.appointmentService.getAppointments();
        console.log(this.appointmentList)
    }
    appointmentSubmit() {
        this.appointmentService.addAppointment(this.appointmentForm);
        this.getAppointments();
    }

}
