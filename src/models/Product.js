const { Model, DataTypes } = require('sequelize');
const sequelize = require('../database/index');
const Category = require('./Category');

class Product extends Model {}
Product.init(
   {
      name: DataTypes.STRING,
      description: DataTypes.STRING,
      quantity: DataTypes.INTEGER,
      price: DataTypes.FLOAT,
      categoryId: {
         type: DataTypes.INTEGER,
         allowNull: false,
         references: {
            model: 'categories',
            key: 'id',
         },
      },
   },
   {
      sequelize,
      modelName: 'products',
   }
);

Product.belongsTo(Category, {
   foreignKey: 'categoryId',
   as: 'categories',
});

module.exports = Product;
