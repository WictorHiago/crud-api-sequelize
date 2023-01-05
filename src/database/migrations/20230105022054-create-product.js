'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
   async up(queryInterface, Sequelize) {
      return queryInterface.createTable('product', {
         id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
         },
         name: {
            type: Sequelize.STRING,
            allowNull: false,
         },
         description: {
            type: Sequelize.STRING,
            allowNull: false,
         },
         quantity: {
            type: Sequelize.INTEGER,
            allowNull: false,
         },
         price: {
            type: Sequelize.FLOAT,
            allowNull: false,
         },
         createdAt: {
            allowNull: false,
            type: Sequelize.DATE,
         },
         updatedAt: {
            allowNull: false,
            type: Sequelize.DATE,
         },
      });
   },

   down(queryInterface, Sequelize) {
      return queryInterface.dropTable('product');
   },
};
