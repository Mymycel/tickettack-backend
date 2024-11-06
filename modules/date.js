
const moment = require('moment')

function displayDate(date){
  /*  myDate.find({
        date: {
            $gte: today.toDate(),
            $lte: moment(today).endOf('day').toDate()
           }
    })*/

    const today = moment(date).startOf('day').toDate()
    console.log(date, today)
}

module.exports = {displayDate};
