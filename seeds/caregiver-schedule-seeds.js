const { CaregiverSchedule } = require('../models');

const caregiverScheduleData = [
    {
        caregiver_id: '1',
        date: '2021-07-01',
        start_time: '08:00:00',
        end_time: '13:00:00'
    },
    {
        caregiver_id: '1',
        date: '2021-07-02',
        start_time: '09:00:00',
        end_time: '15:00:00'
    }
];


const seedCaregiverSchedule = () => CaregiverSchedule.bulkCreate(caregiverScheduleData);

module.exports = seedCaregiverSchedule;