const fs = require("fs").promises;
const path = require("path");
const uuid = require("uuid");

const productPath = path.join(__dirname, "product.json");

const getAll = async () => {
  const response = await fs.readFile(productPath, "utf-8");
  const data = await JSON.parse(response);
  return data;
};
// getAll(productPath).then((d) => console.log(d));

const getById = async (id) => {
  const allProducts = await getAll(productPath);
  const product = allProducts.find((prod) => prod.id === id);
  return product || null;
};
// getById(3).then((p) => console.log(p));

const create = async (price, name, pathToProd) => {
  const newProduct = {
    id: uuid.v4(),
    name: name,
    price: price,
  };

  try {
    const products = await getAll(pathToProd);
    products.push(newProduct);
    await fs.writeFile(pathToProd, JSON.stringify(products));
  } catch (error) {
    console.log(error);
  }
};
// create(1000, "apple", productPath);

const updateById = async (id, price, name, pathToFile) => {
  const allProducts = await getAll(pathToFile);
  const prodIndex = await allProducts.findIndex((prod) => prod.id === id);

  if (prodIndex !== -1) {
    (allProducts[prodIndex].price = price),
      (allProducts[prodIndex].name = name),
      await fs.writeFile(pathToFile, JSON.stringify(allProducts));
  }
};
// updateById("dbe45d9e-970c-4f2f-b58b-e769f649636d", 99999, "Apple", productPath);

const deleteProduct = async (id, pathToFile) => {
  const allProducts = await getAll(pathToFile);
  const newAllProducts = allProducts.filter((prod) => prod.id !== id);
  await fs.writeFile(pathToFile, JSON.stringify(newAllProducts));
};
// deleteProduct("dbe45d9e-970c-4f2f-b58b-e769f649636d", productPath);

module.exports = {
  deleteProduct,
  updateById,
  create,
  getById,
  getAll,
};
