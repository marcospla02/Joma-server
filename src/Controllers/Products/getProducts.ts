import { Products } from "../../db";

export default async function getProducts(options: any) {
  const { name, enabled } = options;

  const findOptions: any = {};

  if (name) findOptions.name = new RegExp(name, "i");

  if (enabled) findOptions.enabled = enabled;

  try {
    const findAllProducts = await Products.find(findOptions)
      .populate("image")
      .populate("category");

    if (!findAllProducts.length) throw new Error("Product not found");

    return findAllProducts;
  } catch (error: any) {
    return error.message;
  }
}
