const { Product } = require("../models/product");

const getAll = async () => {
  return Product.find();
};

const getById = async (id) => {
  return Product.findById(id);
};

const create = async (product) => {
  return Product.create(product);
};

const updateById = async (id, product) => {
  return Product.findByIdAndUpdate(id, product, { new: true });
};

const deleteProduct = async (id) => {
  return Product.findByIdAndDelete(id);
};

module.exports = {
  deleteProduct,
  updateById,
  create,
  getById,
  getAll,
};
