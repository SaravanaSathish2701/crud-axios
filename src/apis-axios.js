
import axios from "axios";

const baseUrl = "https://6612336695fdb62f24ee370d.mockapi.io/api/v1/endpint/Product";

const prodInstance = axios.create({
  baseURL: baseUrl,
  timeOut: 1000,
  headers: { "X-Custom-Header": "foobar", batch: "FSD56WE-T" },
});
// Getting all the Products from the url
const getAllItems = async () => {
  const response = await prodInstance.get("");
  return response.data;
};

// Getting a single Product from the url
const getProduct = async (itemId) => {
  return (await prodInstance.get(`${itemId}`)).data;
};

// Create a new Product
const createProduct = async (pdData) => {
  const response = await prodInstance.post("", pdData);
  return response.data;
};

// updating a new product
const updateProduct = async (pdData, itemId) => {
  return (await prodInstance.put(`${itemId}`, pdData)).data;
};

// deleting the product
const deleteProduct = async (itemId) => {
  const response = await prodInstance.delete(`${itemId}`);
  return response.data;
};

export { getAllItems, deleteProduct, getProduct, updateProduct, createProduct };