import angular from 'angular';


class appointmentService {
    constructor() {
        this.appointmentList = [];
    }

    addAppointment(appointment) {
       this.appointmentList.push(appointment);
    }

    getAppointments(){
        return this.appointmentList;
    }
}

export default angular.module('AppointmentMarker.appointment.appointmentService', [])
    .service('appointmentService', appointmentService)
    .name;
