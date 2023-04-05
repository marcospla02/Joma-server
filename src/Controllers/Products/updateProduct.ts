import { ObjectId } from "mongodb";
import { Products } from "../../db";
import { IntProducts } from "../../Interface/interfaces";

const updateProduct = async (_id: string, body: IntProducts) => {
  const { description, price, stock, enabled, image, category } = body;
  let { name } = body;

  if (!ObjectId.isValid(_id))
    throw new Error("No valid _id type provided for product!");

  if (name) {
    if (typeof name !== "string")
      throw new Error("The name must be a text type");
    else {
      name = name.toLowerCase();
    }
  }

  if (description && typeof description !== "string")
    throw new Error("The description cannot be empty and must be a text type");

  if (price && typeof price !== "number")
    throw new Error("The price cannot be empty and must be a number");

  if (stock && typeof stock !== "number")
    throw new Error("The stock cannot be empty and must be a number");

  if (enabled && typeof enabled !== "boolean")
    throw new Error(
      "The enabled cannot be empty and must be a true or false value"
    );

  if (image && typeof image !== "string")
    throw new Error("The image cannot be empty and must be a text type");

  if (category && typeof category !== "string")
    throw new Error("The category cannot be empty and must be a text type");

  try {
    const findPrduct = await Products.findById({ _id }); // use object literal

    const update = {
      name,
      description,
      price,
      stock,
      image,
      enabled,
      category,
    };

    if (findPrduct) {
      const prdUpdate = await Products.findByIdAndUpdate({ _id: _id }, update, {
        new: true,
        // upsert: true,
      });
      return prdUpdate;
    } else {
      return `The product with id: '${_id}' was not found`;
    }
  } catch (error: any) {
    return error.message;
  }
};

export default updateProduct;
