const { PatientSchedule } = require('../models');

const patientScheduleData = [
    {
        patient_id: '2',
        date: '2021-07-01',
        start_time: '08:00:00',
        end_time: '14:00:00'
    },
    {
        patient_id: '2',
        date: '2021-07-02',
        start_time: '08:00:00',
        end_time: '14:00:00'
    },
];


const seedPatientSchedule = () => PatientSchedule.bulkCreate(patientScheduleData);

module.exports = seedPatientSchedule;