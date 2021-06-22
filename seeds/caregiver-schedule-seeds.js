const { CaregiverSchedule } = require('../models');

const caregiverScheduleData = [
    {
        caregiver_id: '1',
        date: '2021-06-28',
        start: '09:00:00',
        end: '15:00:00'
    },
    {
        caregiver_id: '1',
        date: '2021-06-29',
        start: '10:00:00',
        end: '15:00:00'
    },
    {
        caregiver_id: '1',
        date: '2021-06-30',
        start: '09:00:00',
        end: '15:00:00'
    },
    {
        caregiver_id: '1',
        date: '2021-07-01',
        start: '08:00:00',
        end: '13:00:00'
    },
    {
        caregiver_id: '1',
        date: '2021-07-02',
        start: '09:00:00',
        end: '15:00:00'
    },
    {
        caregiver_id: '1',
        date: '2021-07-06',
        start: '08:00:00',
        end: '17:00:00'
    },
    {
        caregiver_id: '1',
        date: '2021-07-07',
        start: '09:00:00',
        end: '11:00:00'
    },
    {
        caregiver_id: '1',
        date: '2021-07-08',
        start: '09:00:00',
        end: '15:00:00'
    },
    {
        caregiver_id: '1',
        date: '2021-07-09',
        start: '09:00:00',
        end: '15:00:00'
    },
    {
        caregiver_id: '2',
        date: '2021-06-28',
        start: '07:00:00',
        end: '14:00:00'
    },
    {
        caregiver_id: '2',
        date: '2021-06-29',
        start: '08:00:00',
        end: '15:00:00'
    },
    {
        caregiver_id: '2',
        date: '2021-06-30',
        start: '07:00:00',
        end: '14:00:00'
    },
    {
        caregiver_id: '2',
        date: '2021-07-02',
        start: '08:00:00',
        end: '15:00:00'
    },
    {
        caregiver_id: '2',
        date: '2021-07-06',
        start: '07:00:00',
        end: '14:00:00'
    },
    {
        caregiver_id: '2',
        date: '2021-07-07',
        start: '08:00:00',
        end: '15:00:00'
    },
    {
        caregiver_id: '2',
        date: '2021-07-09',
        start: '07:00:00',
        end: '14:00:00'
    },
    {
        caregiver_id: '3',
        date: '2021-06-28',
        start: '07:00:00',
        end: '11:00:00'
    },
    {
        caregiver_id: '3',
        date: '2021-06-28',
        start: '14:00:00',
        end: '17:00:00'
    },
    {
        caregiver_id: '3',
        date: '2021-06-30',
        start: '07:00:00',
        end: '11:00:00'
    },
    {
        caregiver_id: '3',
        date: '2021-06-30',
        start: '14:00:00',
        end: '17:00:00'
    },
    {
        caregiver_id: '3',
        date: '2021-07-02',
        start: '07:00:00',
        end: '11:00:00'
    },
    {
        caregiver_id: '3',
        date: '2021-07-02',
        start: '14:00:00',
        end: '17:00:00'
    },
    {
        caregiver_id: '3',
        date: '2021-07-06',
        start: '07:00:00',
        end: '11:00:00'
    },
    {
        caregiver_id: '3',
        date: '2021-07-06',
        start: '14:00:00',
        end: '17:00:00'
    },
    {
        caregiver_id: '3',
        date: '2021-07-08',
        start: '07:00:00',
        end: '11:00:00'
    },
    {
        caregiver_id: '3',
        date: '2021-07-08',
        start: '14:00:00',
        end: '17:00:00'
    },
    {
        caregiver_id: '4',
        date: '2021-06-28',
        start: '11:00:00',
        end: '16:00:00'
    },
    {
        caregiver_id: '4',
        date: '2021-06-29',
        start: '11:00:00',
        end: '16:00:00'
    },
    {
        caregiver_id: '4',
        date: '2021-06-30',
        start: '11:00:00',
        end: '16:00:00'
    },
    {
        caregiver_id: '4',
        date: '2021-07-01',
        start: '11:00:00',
        end: '16:00:00'
    },
    {
        caregiver_id: '4',
        date: '2021-07-02',
        start: '11:00:00',
        end: '16:00:00'
    },
    {
        caregiver_id: '4',
        date: '2021-07-06',
        start: '11:00:00',
        end: '16:00:00'
    },
    {
        caregiver_id: '4',
        date: '2021-07-07',
        start: '11:00:00',
        end: '16:00:00'
    },
    {
        caregiver_id: '4',
        date: '2021-07-08',
        start: '11:00:00',
        end: '16:00:00'
    },
    {
        caregiver_id: '4',
        date: '2021-07-09',
        start: '11:00:00',
        end: '16:00:00'
    },
    {
        caregiver_id: '5',
        date: '2021-06-28',
        start: '12:00:00',
        end: '18:00:00'
    },
    {
        caregiver_id: '5',
        date: '2021-06-29',
        start: '12:00:00',
        end: '18:00:00'
    },
    {
        caregiver_id: '5',
        date: '2021-06-30',
        start: '12:00:00',
        end: '18:00:00'
    },
    {
        caregiver_id: '5',
        date: '2021-07-01',
        start: '12:00:00',
        end: '18:00:00'
    },
    {
        caregiver_id: '5',
        date: '2021-07-02',
        start: '12:00:00',
        end: '18:00:00'
    },
    {
        caregiver_id: '5',
        date: '2021-07-06',
        start: '12:00:00',
        end: '18:00:00'
    },
    {
        caregiver_id: '5',
        date: '2021-07-07',
        start: '12:00:00',
        end: '18:00:00'
    },
    {
        caregiver_id: '5',
        date: '2021-07-08',
        start: '12:00:00',
        end: '18:00:00'
    },
    {
        caregiver_id: '5',
        date: '2021-07-09',
        start: '12:00:00',
        end: '18:00:00'
    }
];


const seedCaregiverSchedule = () => CaregiverSchedule.bulkCreate(caregiverScheduleData);

module.exports = seedCaregiverSchedule;