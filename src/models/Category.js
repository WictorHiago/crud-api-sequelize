const { Model, DataTypes } = require('sequelize');

class Category extends Model {
   static init(sequelize) {
      super.init(
         {
            title: DataTypes.STRING,
            description: DataTypes.TEXT,
         },
         {
            sequelize,
         }
      );
   }
}
module.exports = Category;
