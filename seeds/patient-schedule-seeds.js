const { PatientSchedule } = require('../models');

const patientScheduleData = [
    {
        patient_id: '2',
        date: '2021-07-01',
        start: '08:00:00',
        end: '14:00:00'
    },
    {
        patient_id: '2',
        date: '2021-07-02',
        start: '08:00:00',
        end: '14:00:00'
    },
];


const seedPatientSchedule = () => PatientSchedule.bulkCreate(patientScheduleData);

module.exports = seedPatientSchedule;