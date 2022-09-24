// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Product.belongsTo(Category, {foreignKey: 'category_id'});
// Categories have many Products
Product.hasMany(Category, {foreignKey: 'category_id'});
// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Category, {foreignKey: 'category_id'});
// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Category, {foreignKey: 'category_id'});

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
