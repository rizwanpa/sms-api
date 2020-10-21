'use strict';
let dataJson = require('./../data.json');
const utf8 = require('utf8');
let dataJsonModified = dataJson.map((obj)=> {
  console.log('*************',new Date(obj.start_date).getTime() / 1000)
  return {
    ...obj,
    //city : utf8.encode(obj.city),
    start_date : new Date(obj.start_date).getTime() / 1000,
    end_date : new Date(obj.end_date).getTime() / 1000,
    createdAt : new Date(),
    updatedAt : new Date(),
  }
})
console.log('dataJsonModified _______________>>>>>>>>',dataJsonModified);
module.exports = {
  up: async (queryInterface, Sequelize) => {
    console.log('inside ((((((((((((((((');
    /**
     * Add seed commands here.
     *
     */
    await queryInterface.bulkInsert('data', dataJsonModified, {});
    
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
    */
    await queryInterface.bulkDelete('data', null, {});
     
  }
};
