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

module.exports = seedAppointments;