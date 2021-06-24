const { Appointments } = require('../models');

const appointmentData = [
    {
        caregiver_id: '1',
        patient_id: '1',
        appointment_time: "09:00:00",
        date: "2021-07-14"
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