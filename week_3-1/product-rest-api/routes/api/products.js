const express = require("express");
const { schemeCreate, schemePathAvailable } = require("../../models/product");
const { validateRequest } = require("../../middlewares/validator");
const {
  getAll,
  getById,
  create,
  updateById,
  updateAvailability,
  deleteById,
} = require("../../controllers/products");

const router = express.Router();

router.get("/", getAll);
router.get("/:id", getById);
router.post("/", validateRequest(schemeCreate), create);
router.put("/:id", updateById);
router.patch("/:id", validateRequest(schemePathAvailable), updateAvailability);
router.delete("/:id", deleteById);

module.exports = router;
