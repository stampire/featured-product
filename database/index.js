const mongoose = require('mongoose');

const connection = mongoose.connect('mongodb://localhost:27017/fec', { useNewUrlParser: true, useUnifiedTopology: true });

mongoose.connection.on('error', (error) => {
  console.error(error);
});

mongoose.connection.once('open', () => {
  console.log('database connection is open');
});

module.exports = {
  connection,
};
