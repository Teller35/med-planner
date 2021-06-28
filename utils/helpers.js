const { DateTime } = require("luxon");


module.exports = {
    format_date: date => {
        return `${DateTime.fromISO(date).toFormat('LLL dd, yy')}`  
    },
    format_time: time => {
        return `${DateTime.fromISO(time).toFormat('h:mm a')}`
    },
};
