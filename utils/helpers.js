const luxon = require("../build/node/luxon");

import { DateTime } from "luxon";

global.DateTime = luxon.DateTime;

DateTime.now().toFormat('LLL dd YY ')
DateTime.now().toFormat('')


  
module.exports = {
    format_date: (date) => {
      return `${new Date(date).getMonth() + 1}/${new Date(
        date
      ).getDate()}/${new Date(date).getFullYear()}`;
    },
};