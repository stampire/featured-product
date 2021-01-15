/* eslint-disable no-unused-vars */
const mongoose = require('mongoose');
const faker = require('faker');
const Product = require('./schema.js');
const connection = require('./index.js');

const deleteAll = async () => { await Product.deleteMany(); };
const seedProducts = () => {
  const products = [];
  for (let i = 0; i < 100; i += 1) {
    // eslint-disable-next-line prefer-const
    let fakeProduct = {
      photoGallery: [faker.image.imageUrl(), faker.image.imageUrl(), faker.image.imageUrl(),
        faker.image.imageUrl()],
      productNumber: faker.random.number({ min: 100000, max: 999999 }),
      name: faker.commerce.productName(),
      rating: faker.random.number({ min: 1, max: 5, precision: 0.01 }),
      ratingCount: faker.random.number({ min: 1, max: 100 }),
      price: faker.random.number({ mind: 1, max: 3000, precision: 0.01 }),
      color: faker.commerce.color(),
      description: faker.commerce.productDescription(),
      features: [faker.random.words(5),
        faker.random.words(4),
        faker.random.words(6),
        faker.random.words(5)],
      technicalSpecs: {
        bestUse: faker.random.word(),
        materials: faker.commerce.productMaterial(),
        dimensions: [faker.random.number(15), faker.random.number(15), faker.random.number(15)],
        weight: [faker.random.number(100), faker.random.number(15)],
      },
    };
    products.push(fakeProduct);
  }
  return products;
};

const insertProducts = async () => {
  const products = seedProducts();
  await Product.insertMany(products);
};

const seed = async () => {
  await deleteAll();
  await insertProducts();
  process.exit(0);
};

seed();
