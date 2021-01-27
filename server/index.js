const express = require('express');
const path = require('path');
const cors = require('cors');
// eslint-disable-next-line no-unused-vars
const connection = require('../database/index.js');
const Product = require('../database/schema.js');

const app = express();

app.use('/product/:productId', express.static(path.join(__dirname, '../dist')));
app.use('/', express.static(path.join(__dirname, '../dist')));
app.use(cors());

app.get('/api/product/:productId', (req, res) => {
  const productNum = req.params.productId;
  Product.findOne({ productNumber: productNum }).exec((err, data) => {
    if (err) {
      res.status(404).send(err);
    } else {
      res.status(200).send(data);
    }
  });
});

app.listen(3001, () => {
  console.log('listening at port 3001');
});

module.exports = app;
