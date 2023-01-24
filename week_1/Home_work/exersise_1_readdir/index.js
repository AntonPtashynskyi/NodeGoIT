const fs = require("fs").promises;
const path = require("path");

//! const pathToDir = path.resolve(__dirname, "files"); with this setting doesn't work

fs.readdir(__dirname)
  .then((files) => {
    console.log(files);
    return Promise.all(
      files.map(async (filename) => {
        const stats = await fs.stat(filename);
        return {
          Name: filename,
          Size: stats.size,
          Data: stats.mtime,
        };
      })
    );
  })
  .then((elem) => console.table(elem))
  .catch((err) => console.log(err));
