const { Product } = require("../models/product");

const getAll = async (query) => {
  const { page, limit } = query;
  const skipped = (page - 1) * limit;
  const skip = skipped < 0 ? 0 : skipped;

  // console.log(+limit); === NaN

  return Product.find({}, {}, { skip, limit: +limit }).populate(
    "createdBy",
    "name, role"
  );
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
