const express = require("express");
const { schemeCreate, schemePathAvailable } = require("../../models/product");
const { validateRequest } = require("../../middlewares/validator");
const { auth, author } = require("../../middlewares/auth");
const {
  getAll,
  getById,
  create,
  updateById,
  updateAvailability,
  deleteById,
} = require("../../controllers");

const router = express.Router();

router.get("/", auth, getAll);
router.get("/:id", getById);
router.post("/", validateRequest(schemeCreate), auth, create);
router.put("/:id", updateById);
router.patch("/:id", validateRequest(schemePathAvailable), updateAvailability);
router.delete("/:id", auth, author("admin"), deleteById);

module.exports = router;
