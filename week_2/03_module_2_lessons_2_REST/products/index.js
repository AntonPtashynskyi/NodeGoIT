const fs = require("fs").promises;
const path = require("path");
const uuid = require("uuid");

// const productPath = path.join(__dirname, "product.json");
const productPath = path.join(__dirname, "product.json");

const getAll = async () => {
  const response = await fs.readFile(productPath, "utf-8");
  const data = await JSON.parse(response);
  return data;
};
// getAll(productPath).then((d) => console.log(d));

const getById = async (id) => {
  const allProducts = await getAll();
  const product = allProducts.find((prod) => prod.id === id);
  return product || null;
};
// getById(3).then((p) => console.log(p));

const create = async (price, name) => {
  const newProduct = {
    id: uuid.v4(),
    name: name,
    price: price,
  };

  try {
    const products = await getAll();
    products.push(newProduct);
    await fs.writeFile(productPath, JSON.stringify(products));
    return newProduct;
  } catch (error) {
    console.log(error);
  }
};
// create(1000, "apple", productPath);

const updateById = async (id, price, name) => {
  const allProducts = await getAll();
  const prodIndex = await allProducts.findIndex((prod) => prod.id === id);

  if (prodIndex !== -1) {
    (allProducts[prodIndex].price = price),
      (allProducts[prodIndex].name = name),
      await fs.writeFile(pathToFile, JSON.stringify(allProducts, null, 2));
    return allProducts[prodIndex];
  } else {
    return null;
  }
};
// updateById("dbe45d9e-970c-4f2f-b58b-e769f649636d", 99999, "Apple", productPath);

const deleteProduct = async (id) => {
  const allProducts = await getAll();
  const index = allProducts.findIndex((prod) => prod.id === id);

  const deleteProduct = allProducts[index];
  if (index !== -1) {
    allProducts.splice(index, 1);
    await fs.writeFile(productPath, JSON.stringify(allProducts, null, 2));
  }
  return deleteProduct ? deleteProduct : null;
};
// deleteProduct("dbe45d9e-970c-4f2f-b58b-e769f649636d", productPath);

module.exports = {
  deleteProduct,
  updateById,
  create,
  getById,
  getAll,
};
