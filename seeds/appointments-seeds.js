const { Appointments } = require('../models');

const appointmentData = [
    {
        caregiver_id: '1',
        patient_id: '1',
        appointment_time: "09:00:00",
        caregiver_sched_id: '9',
        patient_sched_id: '2'
    },
    {
        caregiver_id: '1',
        patient_id: '2',
        appointment_time: "09:00:00",
        caregiver_sched_id: '6',
        patient_sched_id: '1'
    },
    {
        caregiver_id: '1',
        patient_id: '3',
        appointment_time: "09:00:00",
        caregiver_sched_id: '3',
        patient_sched_id: '4'
    },
    {
        caregiver_id: '1',
        patient_id: '4',
        appointment_time: "09:00:00",
        caregiver_sched_id: '5',
        patient_sched_id: '1'
    },
    {
        caregiver_id: '1',
        patient_id: '5',
        appointment_time: "09:00:00",
        caregiver_sched_id: '2',
        patient_sched_id: '7'
    },
    {
        caregiver_id: '1',
        patient_id: '5',
        appointment_time: "09:00:00",
        caregiver_sched_id: '3',
        patient_sched_id: '8'
    },
    {
        caregiver_id: '1',
        patient_id: '2',
        appointment_time: '10:00:00',
        caregiver_sched_id: '1',
        patient_sched_id: '1'
    },
    {
        caregiver_id: '2',
        patient_id: '4',
        appointment_time: "09:00:00",
        caregiver_sched_id: '6',
        patient_sched_id: '2'
    },
    {
        caregiver_id: '2',
        patient_id: '5',
        appointment_time: "09:00:00",
        caregiver_sched_id: '2',
        patient_sched_id: '8'
    },
    {
        caregiver_id: '2',
        patient_id: '4',
        appointment_time: "09:00:00",
        caregiver_sched_id: '9',
        patient_sched_id: '1'
    },
    {
        caregiver_id: '2',
        patient_id: '5',
        appointment_time: "09:00:00",
        caregiver_sched_id: '4',
        patient_sched_id: '3'
    },
    {
        caregiver_id: '2',
        patient_id: '4',
        appointment_time: "09:00:00",
        caregiver_sched_id: '6',
        patient_sched_id: '7'
    },
    {
        caregiver_id: '2',
        patient_id: '5',
        appointment_time: "09:00:00",
        caregiver_sched_id: '3',
        patient_sched_id: '8'
    },
    {
        caregiver_id: '3',
        patient_id: '2',
        appointment_time: "09:00:00",
        caregiver_sched_id: '1',
        patient_sched_id: '6'
    },
    {
        caregiver_id: '3',
        patient_id: '4',
        appointment_time: "09:00:00",
        caregiver_sched_id: '3',
        patient_sched_id: '8'
    },
    {
        caregiver_id: '3',
        patient_id: '5',
        appointment_time: "09:00:00",
        caregiver_sched_id: '9',
        patient_sched_id: '4'
    },
    {
        caregiver_id: '3',
        patient_id: '2',
        appointment_time: "09:00:00",
        caregiver_sched_id: '4',
        patient_sched_id: '9'
    },
    {
        caregiver_id: '3',
        patient_id: '4',
        appointment_time: "09:00:00",
        caregiver_sched_id: '2',
        patient_sched_id: '7'
    },
    {
        caregiver_id: '3',
        patient_id: '5',
        appointment_time: "09:00:00",
        caregiver_sched_id: '4',
        patient_sched_id: '4'
    },
    {
        caregiver_id: '3',
        patient_id: '2',
        appointment_time: "09:00:00",
        caregiver_sched_id: '5',
        patient_sched_id: '7'
    },
    {
        caregiver_id: '3',
        patient_id: '4',
        appointment_time: "09:00:00",
        caregiver_sched_id: '1',
        patient_sched_id: '8'
    },
    {
        caregiver_id: '3',
        patient_id: '5',
        appointment_time: "09:00:00",
        caregiver_sched_id: '2',
        patient_sched_id: '2'
    },
    {
        caregiver_id: '4',
        patient_id: '1',
        appointment_time: "09:00:00",
        caregiver_sched_id: '1',
        patient_sched_id: '9'
    },
    {
        caregiver_id: '4',
        patient_id: '2',
        appointment_time: "09:00:00",
        caregiver_sched_id: '2',
        patient_sched_id: '8'
    },
    {
        caregiver_id: '4',
        patient_id: '3',
        appointment_time: "09:00:00",
        caregiver_sched_id: '3',
        patient_sched_id: '7'
    },
    {
        caregiver_id: '4',
        patient_id: '4',
        appointment_time: "09:00:00",
        caregiver_sched_id: '4',
        patient_sched_id: '6'
    },
    {
        caregiver_id: '4',
        patient_id: '5',
        appointment_time: "09:00:00",
        caregiver_sched_id: '5',
        patient_sched_id: '6'
    },
    {
        caregiver_id: '4',
        patient_id: '1',
        appointment_time: "09:00:00",
        caregiver_sched_id: '6',
        patient_sched_id: '7'
    },
    {
        caregiver_id: '4',
        patient_id: '2',
        appointment_time: "09:00:00",
        caregiver_sched_id: '7',
        patient_sched_id: '8'
    },
    {
        caregiver_id: '4',
        patient_id: '3',
        appointment_time: "09:00:00",
        caregiver_sched_id: '8',
        patient_sched_id: '9'
    },
    {
        caregiver_id: '4',
        patient_id: '4',
        appointment_time: "09:00:00",
        caregiver_sched_id: '9',
        patient_sched_id: '1'
    },
    {
        caregiver_id: '4',
        patient_id: '5',
        appointment_time: "09:00:00",
        caregiver_sched_id: '2',
        patient_sched_id: '2'
    },
    {
        caregiver_id: '5',
        patient_id: '1',
        appointment_time: "09:00:00",
        caregiver_sched_id: '3',
        patient_sched_id: '9'
    },
    {
        caregiver_id: '5',
        patient_id: '2',
        appointment_time: "09:00:00",
        caregiver_sched_id: '1',
        patient_sched_id: '4'
    },
    {
        caregiver_id: '5',
        patient_id: '3',
        appointment_time: "09:00:00",
        caregiver_sched_id: '9',
        patient_sched_id: '4'
    },
    {
        caregiver_id: '5',
        patient_id: '5',
        appointment_time: "09:00:00",
        caregiver_sched_id: '5',
        patient_sched_id: '2'
    },
    {
        caregiver_id: '5',
        patient_id: '5',
        appointment_time: "09:00:00",
        caregiver_sched_id: '8',
        patient_sched_id: '6'
    }
];


const seedAppointments = () => Appointments.bulkCreate(appointmentData);

module.exports = seedAppointments;