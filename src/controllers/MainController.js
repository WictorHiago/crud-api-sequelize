const User = require('../models/User');
const Category = require('../models/Category');
const Product = require('../models/Product');

module.exports = class MainController {
   static async index(req, res) {
      res.status(200).json({ 200: 'ok' });
   }
   //create
   static async userSave(req, res) {
      try {
         const { name, email } = req.body;
         // const user = await User.create({name: name, email: email})// not validate
         const userEmail = await User.findOne({ where: { email } }); // on validate
         if (userEmail) {
            return res.status(401).json({
               200: 'This email has already been, try again with another email',
            });
         }
         const user = await User.create({ name: name, email: email });
         console.log(user.dataValues);
         res.status(201).json({ 201: user });
      } catch (error) {
         console.log('🔥 ' + error);
         res.status(500).json({ error: error });
      }
   }
   //findAll
   static async users(req, res) {
      try {
         const users = await User.findAll();
         const allUsers = users.map((item) => item.dataValues);
         console.log(allUsers);
         res.status(200).json({ 200: users });
      } catch (error) {
         res.status(500).json({ error: error.message });
      }
   }
   //findOne
   static async user(req, res) {
      try {
         const user = await User.findOne({ where: { id: req.params.id } });
         console.log(user.dataValues);
         res.status(200).json({ 200: user });
      } catch (error) {
         res.status(500).json({ error: error.message });
      }
   }
   //update user
   static async updateUser(req, res) {
      const { id } = req.params;
      const { name, email } = req.body;

      try {
         const user = await User.findOne({ where: { id } });
         if (!user) {
            res.status(401).json({ message: 'User not found' });
         } else {
            const user = await User.update({ name, email }, { where: { id } });
            res.status(201).json({ message: 'User updated' });
         }
      } catch (error) {}
   }
   //remove user
   static async removeUser(req, res) {
      try {
         const { id } = req.params;
         const user = await User.findOne({ where: { id } });
         if (!user) {
            res.status(401).json({ message: 'User not found' });
         } else {
            const user = await User.destroy({ where: { id } });
            res.status(200).json({ 200: 'ok' });
         }
      } catch (error) {
         res.status(401).json({ error: error });
      }
   }
   //login
   static async login(req, res) {
      res.status(201).json({ 200: 'login ok' });
   }
   // create product
   static async createProduct(req, res) {
      const { name, description, quantity, price, category_name } = req.body;
      try {
         const category = await Category.findOne({
            where: { name: category_name },
         });
         if (!category) {
            return res.status(400).json({ error: 'Category not found' });
         }
         const product = await Product.create({
            name,
            description,
            quantity,
            price,
            categoryId: category.id,
         });
         console.log(product.dataValues);
         res.status(201).json({ 201: product });
      } catch (error) {
         console.log(error.message);
         res.status(400).json({ 400: error.message });
      }
   }
   // create category
   static async createCategory(req, res) {
      const { name, description } = req.body;
      try {
         const category = await Category.create({
            name: name,
            description: description,
         });
         console.log(category.dataValues);
         res.status(201).json({ 201: category });
      } catch (error) {
         console.log(error.message);
      }
   }
   //find all products includes category
   static async getProductsDetails(req, res) {
      try {
         const products = await Product.findAll({
            include: [
               {
                  model: Category,
                  as: 'categories',
               },
            ],
         });
         res.status(200).json({ 200: products });
      } catch (error) {
         console.log(error.message);
         res.status(400).json({ 400: { message: error.message } });
      }
   }
};
