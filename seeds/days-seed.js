const { Day } = require('../models');

const dayData = [
    {
        date: '2021-06-21',
        day_of_week: 'Monday'
    },
    {
        date: '2021-06-22',
        day_of_week: 'Tuesday'
    },
    {
        date: '2021-06-23',
        day_of_week: 'Wednesday'
    },
    {
        date: '2021-06-24',
        day_of_week: 'Thursday'
    },
    {
        date: '2021-06-25',
        day_of_week: 'Friday'
    },
    {
        date: '2021-06-28',
        day_of_week: 'Monday'
    },
    {
        date: '2021-06-29',
        day_of_week: 'Tuesday'
    },
    {
        date: '2021-06-30',
        day_of_week: 'Wednesday'
    },
    {
        date: '2021-01-01',
        day_of_week: 'Thursday'
    },
    {
        date: '2021-07-02',
        day_of_week: 'Friday'
    },
    {
        date: '2021-07-06',
        day_of_week: 'Wednesday'
    },
    {
        date: '2021-01-08',
        day_of_week: 'Thursday'
    },
    {
        date: '2021-07-09',
        day_of_week: 'Friday'
    },
];

const seedDays = () => Day.bulkCreate(dayData);

module.exports = seedDays;