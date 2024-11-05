var express = require('express');
var router = express.Router();
const Trip = require ('../models/trips')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.get('/trips',(rep, res) =>{
  Trip.find().then (data => {
    res.json({trips: data})
  })
})



module.exports = router;
