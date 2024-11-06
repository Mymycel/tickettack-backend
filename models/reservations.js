const mongoose =  require('mongoose');
const reservationSchema = mongoose.Schema({
    departure : String,
    arrival : String,
    date : Date,
    price : Number, 
})

const Reservation = mongoose.model('reservations', reservationSchema);

module.exports = Reservation;