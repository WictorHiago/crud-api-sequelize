const { Model, DataTypes } = require('sequelize');
const sequelize = require('../database/index');

class Category extends Model {}
Category.init(
   {
      name: DataTypes.STRING,
      description: DataTypes.STRING,
   },
   {
      sequelize,
      modelName: 'categories',
   }
);

module.exports = Category;
