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

module.exports = seedAppointments;