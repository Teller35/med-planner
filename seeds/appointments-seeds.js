const { Appointments } = require('../models');

const appointmentData = [
    {
        caregiver_id: '1',
        patient_id: '1',
        appointment_time: '16:00:00',
        date: '2021-07-06'
    },
    {
        caregiver_id: '1',
        patient_id: '2',
        appointment_time: '10:00:00',
        date: '2021-06-28'
    },
    {
        caregiver_id: '1',
        patient_id: '3',
        appointment_time: '14:00:00',
        date: '2021-06-28'
    },
    {
        caregiver_id: '1',
        patient_id: '4',
        appointment_time: '13:00:00',
        date: '2021-06-29'
    },
    {
        caregiver_id: '1',
        patient_id: '5',
        appointment_time: '4:00:00',
        date: '2021-06-30'
    },
    {
        caregiver_id: '1',
        patient_id: '5',
        appointment_time: '14:00:00',
        date: '2021-07-08'
    },
    {
        caregiver_id: '1',
        patient_id: '2',
        appointment_time: '08:00:00',
        date: '2021-07-01'
    },
    {
        caregiver_id: '2',
        patient_id: '4',
        appointment_time: '08:00:00',
        date: '2021-06-28'
    },
    {
        caregiver_id: '2',
        patient_id: '5',
        appointment_time: '12:00:00',
        date: '2021-07-06'
    },
    {
        caregiver_id: '2',
        patient_id: '4',
        appointment_time: '13:00:00',
        date: '2021-07-09'
    },
    {
        caregiver_id: '3',
        patient_id: '2',
        appointment_time: '11:00:00',
        date: '2021-06-28'
    },
    {
        caregiver_id: '3',
        patient_id: '4',
        appointment_time: '10:00:00',
        date: '2021-07-08'
    },
    {
        caregiver_id: '3',
        patient_id: '5',
        appointment_time: '17:00:00',
        date: '2021-07-02'
    },
    {
        caregiver_id: '4',
        patient_id: '1',
        appointment_time: '17:00:00',
        date: '2021-06-28'
    },
    {
        caregiver_id: '4',
        patient_id: '2',
        appointment_time: '11:00:00',
        date: '2021-07-07'
    },
    {
        caregiver_id: '4',
        patient_id: '3',
        appointment_time: '15:00:00',
        date: '2021-07-09'
    },
    {
        caregiver_id: '4',
        patient_id: '4',
        appointment_time: '11:00:00',
        date: '2021-06-29'
    },
    {
        caregiver_id: '4',
        patient_id: '5',
        appointment_time: '16:00:00',
        date: '2021-07-08'
    },
    {
        caregiver_id: '5',
        patient_id: '1',
        appointment_time: '16:00:00',
        date: '2021-07-01'
    },
    {
        caregiver_id: '5',
        patient_id: '2',
        appointment_time: '13:00:00',
        date: '2021-07-07'
    },
    {
        caregiver_id: '5',
        patient_id: '3',
        appointment_time: '14:00:00',
        date: '2021-07-09'
    },
    {
        caregiver_id: '5',
        patient_id: '5',
        appointment_time: "09:00:00",
        date: '2021-07-08'
    }
];


const seedAppointments = () => Appointments.bulkCreate(appointmentData);

module.exports = seedAppointments;