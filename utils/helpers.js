const luxon = require("../build/node/luxon");

import { DateTime } from "luxon";

global.DateTime = luxon.DateTime;

DateTime.now().toFormat('LLL dd YY ');
DateTime.now().toFormat('h mm');


  
module.exports = {
    format_date: (date) => {
      return `${new Date(date).getMonth() + 1}/${new Date(
        date
      ).getDate()}/${new Date(date).getFullYear()}`;
    },
    format_time: (time) => {
        return `${new Time(time).getHour() +1}/${new Hour(
            hour
        ).getHour()}/${new Hour(hour).getDate()}`
    },
};