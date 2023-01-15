const operation = require("./products");
const path = require("path");
// {
//     deleteProduct: [AsyncFunction: deleteProduct],
//     updateById: [AsyncFunction: updateById],
//     create: [AsyncFunction: create],
//     getById: [AsyncFunction: getById],
//     getAll: [AsyncFunction: getAll]
//   }
const invoke = async ({ action, path, id, price, name }) => {
  try {
    switch (action) {
      case "getAll":
        const data = await operation.getAll(path);
        console.log(data);
        break;
      case "getById":
        const product = await operation.getById(id);
        console.log("Get by id", product);
        break;
      case "updateById":
        await operation.updateById(id, price, name, path);
        break;
      case "create":
        await operation.create(price, name, path);
        break;
      case "delete":
        await operation.deleteProduct(id, path);
        break;
      default:
        console.log(`Not action handler as ${action}`);
        break;
    }
  } catch (error) {
    console.log(Error);
  }
};

// invoke({
//   action: "getAll",
//   path: path.join(__dirname, "products", "product.json"),
// });

// invoke({
//   action: "getById",
//   path: path.join(__dirname, "products", "product.json"),
//   id: 2,
// });

// invoke({
//   action: "create",
//   path: path.join(__dirname, "products", "product.json"),
//   name: "Borshch",
//   price: 200,
// });
//7fca27c7-78fd-4281-80a9-dcd05b0ef7f2

// invoke({
//   action: "updateById",
//   path: path.join(__dirname, "products", "product.json"),
//   id: "7fca27c7-78fd-4281-80a9-dcd05b0ef7f2",
//   name: "Borshch-Ukraine",
//   price: 2000,
// });
