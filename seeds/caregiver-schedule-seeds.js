const { CaregiverSchedule } = require('../models');

const caregiverScheduleData = [
    {
        caregiver_id: '1',
        date: '2021-07-01',
        start: '08:00:00',
        end: '14:00:00'
    },
    {
        caregiver_id: '1',
        date: '2021-07-02',
        start: '08:00:00',
        end: '14:00:00'
    }
];


const seedCaregiverSchedule = () => CaregiverSchedule.bulkCreate(caregiverScheduleData);

module.exports = seedCaregiverSchedule;