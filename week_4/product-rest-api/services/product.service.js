const { Product } = require("../models/product");

const getAll = async () => {
  return Product.find({}, {}, {}).populate("createdBy", "name, role");
};

const getById = async (id) => {
  return Product.findById(id);
};

const create = async (product, id) => {
  return Product.create({ ...product, createdBy: id });
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
