const { Appointments } = require('../models');

const appointmentData = [
    {
        caregiver_id: '1',
        patient_id: '1',
<<<<<<< HEAD
        appointment_time: "15:00:00",
        caregiver_sched_id: '6',
        patient_sched_id: '2'
=======
        appointment_time: "09:00:00",
        date: "2021-07-14"
>>>>>>> 1c9c5a4534245b93dd772ea339c8a6a4229ced14
    },
    {
        caregiver_id: '1',
        patient_id: '2',
        appointment_time: "09:00:00",
        date: "2021-07-14"
    },
    {
        caregiver_id: '1',
        patient_id: '3',
        appointment_time: "09:00:00",
        date: "2021-07-14"
    },
    {
        caregiver_id: '1',
        patient_id: '4',
        appointment_time: "09:00:00",
        date: "2021-07-14"
    },
    {
        caregiver_id: '1',
        patient_id: '5',
        appointment_time: "09:00:00",
        date: "2021-07-14"
    },
    {
        caregiver_id: '1',
        patient_id: '5',
        appointment_time: "09:00:00",
        date: "2021-07-14"
    },
    {
        caregiver_id: '1',
        patient_id: '2',
        appointment_time: '10:00:00',
        date: "2021-07-14"
    },
    {
        caregiver_id: '2',
        patient_id: '4',
        appointment_time: "09:00:00",
        date: "2021-07-14"
    },
    {
        caregiver_id: '2',
        patient_id: '5',
        appointment_time: "09:00:00",
        date: "2021-07-14"
    },
    {
        caregiver_id: '2',
        patient_id: '4',
        appointment_time: "09:00:00",
        date: "2021-07-14"
    },
    {
        caregiver_id: '2',
        patient_id: '5',
        appointment_time: "09:00:00",
        date: "2021-07-14"
    },
    {
        caregiver_id: '2',
        patient_id: '4',
        appointment_time: "09:00:00",
        date: "2021-07-14"
    },
    {
        caregiver_id: '2',
        patient_id: '5',
        appointment_time: "09:00:00",
        date: "2021-07-14"
    },
    {
        caregiver_id: '3',
        patient_id: '2',
        appointment_time: "09:00:00",
        date: "2021-07-14"
    },
    {
        caregiver_id: '3',
        patient_id: '4',
        appointment_time: "09:00:00",
        date: "2021-07-14"
    },
    {
        caregiver_id: '3',
        patient_id: '5',
        appointment_time: "09:00:00",
        date: "2021-07-14"
    },
    {
        caregiver_id: '3',
        patient_id: '2',
        appointment_time: "09:00:00",
        date: "2021-07-14"
    },
    {
        caregiver_id: '3',
        patient_id: '4',
        appointment_time: "09:00:00",
        date: "2021-07-14"
    },
    {
        caregiver_id: '3',
        patient_id: '5',
        appointment_time: "09:00:00",
        date: "2021-07-14"
    },
    {
        caregiver_id: '3',
        patient_id: '2',
        appointment_time: "09:00:00",
        date: "2021-07-14"
    },
    {
        caregiver_id: '3',
        patient_id: '4',
        appointment_time: "09:00:00",
        date: "2021-07-14"
    },
    {
        caregiver_id: '3',
        patient_id: '5',
        appointment_time: "09:00:00",
        date: "2021-07-14"
    },
    {
        caregiver_id: '4',
        patient_id: '1',
        appointment_time: "09:00:00",
        date: "2021-07-14"
    },
    {
        caregiver_id: '4',
        patient_id: '2',
        appointment_time: "09:00:00",
        date: "2021-07-14"
    },
    {
        caregiver_id: '4',
        patient_id: '3',
        appointment_time: "09:00:00",
        date: "2021-07-14"
    },
    {
        caregiver_id: '4',
        patient_id: '4',
        appointment_time: "09:00:00",
        date: "2021-07-14"
    },
    {
        caregiver_id: '4',
        patient_id: '5',
        appointment_time: "09:00:00",
        date: "2021-07-14"
    },
    {
        caregiver_id: '4',
        patient_id: '1',
        appointment_time: "09:00:00",
        date: "2021-07-14"
    },
    {
        caregiver_id: '4',
        patient_id: '2',
        appointment_time: "09:00:00",
        date: "2021-07-14"
    },
    {
        caregiver_id: '4',
        patient_id: '3',
        appointment_time: "09:00:00",
        date: "2021-07-14"
    },
    {
        caregiver_id: '4',
        patient_id: '4',
        appointment_time: "09:00:00",
        date: "2021-07-14"
    },
    {
        caregiver_id: '4',
        patient_id: '5',
        appointment_time: "09:00:00",
        date: "2021-07-14"
    },
    {
        caregiver_id: '5',
        patient_id: '1',
        appointment_time: "09:00:00",
        date: "2021-07-14"
    },
    {
        caregiver_id: '5',
        patient_id: '2',
        appointment_time: "09:00:00",
        date: "2021-07-14"
    },
    {
        caregiver_id: '5',
        patient_id: '3',
        appointment_time: "09:00:00",
        date: "2021-07-14"
    },
    {
        caregiver_id: '5',
        patient_id: '5',
        appointment_time: "09:00:00",
        date: "2021-07-14"
    },
    {
        caregiver_id: '5',
        patient_id: '5',
        appointment_time: "09:00:00",
        date: "2021-07-14"
    }
];


const seedAppointments = () => Appointments.bulkCreate(appointmentData);

module.exports = seedAppointments;