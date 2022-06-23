'use strict';
const productDB = require('../../data/productsDataBase.json')
const products = productDB.map(product => {
  return {
    ...product,
    createdAt : new Date(),
    updatedAt : new Date(),
    deletedAt : new Date()
  }
})
module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.bulkInsert('Products', products, {});
   
  },

  async down (queryInterface, Sequelize) {
   
     await queryInterface.bulkDelete('Products', null, {});
  
  }
};
