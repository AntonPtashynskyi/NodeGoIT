const sharp = require("sharp");
const path = require("path");
const fs = require("fs").promises;
const { PUBLIC_DIR, AVATARS } = require("../helpers/consts");

const uploadImage = async (id, file) => {
  const avatarUrl = path.join(
    AVATARS,
    `${id}${path.extname(file.originalname)}`
  );

  try {
    await sharp(file.path)
      .resize(250, 250)
      .toFile(path.join(PUBLIC_DIR, avatarUrl));
    return avatarUrl;
  } catch (error) {
    throw error;
  } finally {
    await fs.unlink(file.path);
  }
};

module.exports = {
  uploadImage,
};
