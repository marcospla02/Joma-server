import { Products } from "../../db";

export default async function getProducts() {
  try {
    const findAllProducts = await Products.find({});

    if (!findAllProducts.length) throw new Error("Product not found");

    return findAllProducts;
  } catch (error: any) {
    return error.message;
  }
}
