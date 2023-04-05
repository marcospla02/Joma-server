import { Category, Products } from "../../db";

export default async function getProducts(options: any) {
  const { name, enabled, category } = options;

  const findOptions: any = {};

  if (name) findOptions.name = new RegExp(name, "i");

  if (enabled) findOptions.enabled = enabled;

  if (category) {
    try {
      const categoryFind = await Category.findOne({ name: category });

      if (categoryFind) findOptions.category = categoryFind._id;
    } catch (error: any) {
      return error.message;
    }
  }

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
