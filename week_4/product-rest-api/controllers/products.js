const { emailsService, productsService } = require("../services/index");
const { createError } = require("../../errors");

const getAll = async (req, res, next) => {
  try {
    const all = await productsService.getAll();
    emailsService.sendEmail();
    res.json(all);
  } catch (error) {
    next(error);
  }
};

const getById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const prod = await productsService.getById(id);
    if (!prod) {
      res.status(404).json({ message: "Not found" });
    } else {
      res.json(prod);
    }
  } catch (error) {
    next(error);
  }
};

const create = async (req, res, next) => {
  try {
    // const { error } = scheme.validate(req.body);
    // if (error) {
    //   throw createError(400, error.message);
    // }
    // const { price, name } = req.body;
    console.log(req.body);
    const product = await productsService.create(req.body);
    res.status(201).json(product);
  } catch (error) {
    next(error);
  }
};

const updateById = async (req, res, next) => {
  try {
    // const { error } = scheme.validate(req.body);
    // if (error) {
    //   res.status(400).json({ message: error });
    // }
    const { id } = req.params;
    // const { price, name } = req.body;
    const updatedProd = await productsService.updateById(id, req.body);
    if (!updatedProd) {
      res.status(404).json({ message: "Not found" });
    }
    res.json(updatedProd);
  } catch (error) {
    next(error);
    // res.status(500).json({ message: "Internal server Error" });
  }
};

const updateAvailability = async (req, res, next) => {
  try {
    const { available } = req.body;

    if (available === undefined) {
      throw createError(400, "Missing field available");
    }

    const { id } = req.params;
    const product = await productsService.updateById(id, req.body);

    if (!product) {
      throw createError(404, "Not found");
    }

    res.json(product);
  } catch (error) {
    next();
  }
};

const deleteById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const deletedProd = await productsService.deleteProduct(id);

    if (deletedProd) {
      res.json(`{"message": "contact with id ${id} deleted"}`);
    } else {
      res.status(404).json({ message: "Not found" });
    }
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAll,
  getById,
  create,
  updateById,
  updateAvailability,
  deleteById,
};
