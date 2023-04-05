import { Products } from "../../db";

export default function getProductById(productId: string) {
  try {
    const findById = Products.findById({ _id: productId }).populate("image");

    if (!findById)
      return "The product with id " + productId + " does not exist";

    return findById;
  } catch (error: any) {
    return error.message;
  }
}
