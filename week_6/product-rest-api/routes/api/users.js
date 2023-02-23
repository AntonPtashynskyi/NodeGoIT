const express = require("express");
const router = express.Router();
const { auth } = require("../../middlewares/auth");
const upload = require("../../middlewares/upload");
const { uploadImage } = require("../../services/image.service");
const { updateUser } = require("../../services/user.service");

router.use(auth);
router.patch("/avatars", upload.single("avatar"), async (req, res, next) => {
  const { _id: id } = req.user;
  const avatarUrl = await uploadImage(id, req.file);
  const user = await updateUser(id, { avatarUrl });

  res.json(user);
});

module.exports = router;
