const mongoose =  require('mongoose');
const bucketSchema = mongoose.Schema({
    departure : String,
    arrival : String,
    date : Date,
    price : Number, 
})

const Bucket = mongoose.model('buckets', bucketSchema);

module.exports = Bucket;