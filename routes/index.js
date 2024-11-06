var express = require('express');
var router = express.Router();
const mongoose =  require('mongoose');
const Trip = require('../models/trips')
const Bucket = require('../models/buckets')

const { displayDate } = require('../modules/date');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/trips',(req, res) =>{
  Trip.find().then (data => {
    res.json({trips: data})
  })
});

router.get('/trips/:departure/:arrival/:date',(req, res) =>{
  const { departure, arrival, date } = req.params
  Trip.find({
    departure: { $regex: new RegExp(departure, "i") }, 
    arrival: { $regex: new RegExp(arrival, "i") },
    date: { $gte: new Date(date), $lt: new Date(new Date(date).setDate(new Date(date).getDate() + 1)) }
    })
      .then(data => {
        if (data) {
          res.json({ result: true, trips: data });
          } else {
          res.json({ result: false, error: 'Trip not found' });
          }
    })
  })
    
  router.post('/buckets', (req, res) =>{
    const { departure, arrival, date } = req.body

    if(departure && arrival && date){
      const newBucket = new Bucket({departure, arrival, date})
      newBucket.save()
    .then(data =>{
      res.json({ result: true, buckets: data });
    })
  } else {
  res.json({ result: false, error: 'Missing data' });
  }
})
  
             

module.exports = router;
