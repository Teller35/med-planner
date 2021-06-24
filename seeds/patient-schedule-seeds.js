const { PatientSchedule } = require('../models');

const patientScheduleData = [
    {
        patient_id: '1',
        date: '2021-06-28',
        start: '15:00:00',
        end: '17:00:00'
    },
    {
        patient_id: '1',
        date: '2021-06-29',
        start: '15:00:00',
        end: '17:00:00'
    },
    {
        patient_id: '1',
        date: '2021-06-30',
        start: '15:00:00',
        end: '17:00:00'
    },
    {
        patient_id: '1',
        date: '2021-07-01',
        start: '15:00:00',
        end: '17:00:00'
    },
    {
        patient_id: '1',
        date: '2021-07-02',
        start: '15:00:00',
        end: '17:00:00'
    },
    {
        patient_id: '1',
        date: '2021-07-06',
        start: '15:00:00',
        end: '17:00:00'
    },
    {
        patient_id: '1',
        date: '2021-07-07',
        start: '15:00:00',
        end: '17:00:00'
    },
    {
        patient_id: '1',
        date: '2021-07-08',
        start: '15:00:00',
        end: '17:00:00'
    },
    {
        patient_id: '1',
        date: '2021-07-09',
        start: '15:00:00',
        end: '17:00:00'
    },
    {
        patient_id: '2',
        date: '2021-06-28',
        start: '08:00:00',
        end: '14:00:00'
    },
    {
        patient_id: '2',
        date: '2021-06-30',
        start: '07:00:00',
        end: '09:00:00'
    },
    {
        patient_id: '2',
        date: '2021-07-01',
        start: '08:00:00',
        end: '14:00:00'
    },
    {
        patient_id: '2',
        date: '2021-07-02',
        start: '07:00:00',
        end: '09:00:00'
    },
    {
        patient_id: '2',
        date: '2021-07-07',
        start: '08:00:00',
        end: '14:00:00'
    },
    {
        patient_id: '2',
        date: '2021-07-08',
        start: '13:00:00',
        end: '17:00:00'
    },
    {
        patient_id: '3',
        date: '2021-06-28',
        start: '11:00:00',
        end: '17:00:00'
    },
    {
        patient_id: '3',
        date: '2021-07-06',
        start: '09:00:00',
        end: '17:00:00'
    },
    {
        patient_id: '3',
        date: '2021-07-07',
        start: '15:00:00',
        end: '17:00:00'
    },
    {
        patient_id: '3',
        date: '2021-07-08',
        start: '07:00:00',
        end: '14:00:00'
    },
    {
        patient_id: '3',
        date: '2021-07-09',
        start: '09:00:00',
        end: '17:00:00'
    },
    {
        patient_id: '4',
        date: '2021-06-28',
        start: '11:00:00',
        end: '14:00:00'
    },
    {
        patient_id: '4',
        date: '2021-06-29',
        start: '11:00:00',
        end: '14:00:00'
    },
    {
        patient_id: '4',
        date: '2021-06-30',
        start: '11:00:00',
        end: '14:00:00'
    },
    {
        patient_id: '4',
        date: '2021-07-01',
        start: '10:00:00',
        end: '17:00:00'
    },
    {
        patient_id: '4',
        date: '2021-07-02',
        start: '11:00:00',
        end: '14:00:00'
    },
    {
        patient_id: '4',
        date: '2021-07-06',
        start: '11:00:00',
        end: '14:00:00'
    },
    {
        patient_id: '4',
        date: '2021-07-07',
        start: '11:00:00',
        end: '14:00:00'
    },
    {
        patient_id: '4',
        date: '2021-07-08',
        start: '10:00:00',
        end: '14:00:00'
    },
    {
        patient_id: '4',
        date: '2021-07-09',
        start: '10:00:00',
        end: '17:00:00'
    },
    {
        patient_id: '5',
        date: '2021-06-29',
        start: '12:00:00',
        end: '17:00:00'
    },
    {
        patient_id: '5',
        date: '2021-06-30',
        start: '12:00:00',
        end: '17:00:00'
    },
    {
        patient_id: '5',
        date: '2021-07-02',
        start: '12:00:00',
        end: '17:00:00'
    },
    {
        patient_id: '5',
        date: '2021-07-06',
        start: '12:00:00',
        end: '17:00:00'
    },
    {
        patient_id: '5',
        date: '2021-07-08',
        start: '12:00:00',
        end: '17:00:00'
    }
];


const seedPatientSchedule = () => PatientSchedule.bulkCreate(patientScheduleData);

module.exports = seedPatientSchedule;