const { Sequelize } = require('sequelize');
const { Model, DataTypes } = require('sequelize');
// const configDB = require('../config/database'); // remover

const User = require('../models/User.js');

// const sequelize = new Sequelize(configDB);// remover
const sequelize = new Sequelize('api_crud_sequelize', 'root', '@Dev2023', {
   host: 'localhost',
   dialect: 'mysql',
});

// User.init(sequelize);

module.exports = sequelize;
