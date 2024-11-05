const mongoose = require('mongoose');

const connectionString = 'mongodb+srv://chancelmy:ioETMnYnBWi9FCvY@cluster0.5dqsc.mongodb.net/tickethack';

mongoose.connect(connectionString, { connectTimeoutMS: 2000 })
 .then(() => console.log('Database connected'))

  .catch(error => console.error(error));