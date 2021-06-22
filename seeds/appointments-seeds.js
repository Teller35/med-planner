<<<<<<< HEAD
const { Appointment } = require('../models');

const appointmentData = [
    {
        hour: '09:00:00',
        is_available: '1', //true
        patient: '',
        caregiver: '',
    },
    {
        hour: '10:00:00',
        is_available: '1', //true
        patient: '',
        caregiver: '',
    },
    {
        hour: '11:00:00',
        is_available: '1', //true
        patient: '',
        caregiver: '',
    },
    {
        hour: '12:00:00',
        is_available: 'true', //1?
        patient: '',
        caregiver: '',
    },
    {
        hour: '13:00:00',
        is_available: '0', //false
        patient: '',
        caregiver: '',
    },
    {
        hour: '14:00:00',
        is_available: 'true', //1?
        patient: '',
        caregiver: '',
    },
    {
        hour: '15:00:00',
        is_available: 'true', //1?
        patient: '',
        caregiver: '',
    },
    {
        hour: '16:00:00',
        is_available: 'true', //1?
        patient: '',
        caregiver: '',
    },
    {
        hour: '17:00:00',
        is_available: 'true', //1?
        patient: '',
        caregiver: '',
    },
];

const seedAppointments = () => Appointment.bulkCreate(appointmentData);
=======
const { Appointments } = require('../models');

const appointmentData = [
    {
        caregiver_id: '1',
        patient_id: '2',
        caregiver_sched_id: '1',
        patient_sched_id: '1'
    },
    {
        caregiver_id: '2',
        patient_id: '2',
        caregiver_sched_id: '2',
        patient_sched_id: '2'
    }
];


const seedAppointments = () => Appointments.bulkCreate(appointmentData);
>>>>>>> 8392a29ea103fefa8dd3735901f5ddc676e931a4

module.exports = seedAppointments;