const mongoose = require('mongoose');

const connection = mongoose.connect('mongodb://172.17.0.2:27017', { useNewUrlParser: true, useUnifiedTopology: true });

mongoose.connection.on('error', (error) => {
  console.error(error);
});

mongoose.connection.once('open', () => {
  console.log('database connection is open');
});

module.exports = {
  connection,
};
