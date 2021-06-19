const { Hour } = require('../models');

const hourData = [
    {
        hour: '09:00:00',
        date: '2021-06-21'
    },
    {
        hour: '10:00:00',
        date: '2021-06-21'
    },
    {
        hour: '11:00:00',
        date: '2021-06-21'
    },
    {
        hour: '12:00:00',
        date: '2021-06-21'
    },
    {
        hour: '13:00:00',
        date: '2021-06-21'
    },
    {
        hour: '14:00:00',
        date: '2021-06-21'
    },
    {
        hour: '15:00:00',
        date: '2021-06-21'
    },
    {
        hour: '16:00:00',
        date: '2021-06-21'
    },
    {
        hour: '17:00:00',
        date: '2021-06-21'
    },
];

const seedHours = () => Hour.bulkCreate(hourData);

module.exports = seedHours;