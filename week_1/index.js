const fs = require("fs");
const path = require("path");

//Sync
const data = fs.readFileSync(path.resolve("./week_1/test/text1.txt"), {
  encoding: "utf-8",
});

//Async
const filePath1 = path.join(__dirname, "week_1", "test", "text1.txt");
const filePath2 = path.join(__dirname, "week_1", "test", "text2c.txt");

// Async CallBack
// const data2 = fs.readFile(filePath, { encoding: "utf-8" }, (err, result) => {
//   if (err) {
//     throw new Error("Ups, shit happen!" + err);
//   }
//   console.log(result);
// });

// Read files with Promise => release since Node v.12
const read = async () => {
  try {
    const result = await fs.promises.readFile(filePath1, "utf-8");
    console.log(result);
  } catch (error) {
    throw new Error(error);
  }
};

const append = async (action, path, text) => {
  try {
    switch (action) {
      case "GET":
        const data = await fs.promises.readFile(path, "utf-8");
        console.log(data);
        break;
      case "PUT":
        await fs.promises.appendFile(path, text);
        break;
      case "POST":
        await fs.promises.writeFile(path, text);
        break;
      case "DELETE":
        await fs.promises.unlink(path);
        break;
      default:
        console.log(`Not action handler as ${action}`);
        break;
    }
  } catch (error) {
    console.log(Error);
  }
};

// append("GET", filePath1);
// append("PUT", filePath1, " Add new text from write function");
// append("POST", filePath1, "Rewrite file number 1");
// append("DELETE", filePath1);
