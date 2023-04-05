import { Products } from "../../db";
import { IntProducts } from "../../Interface/interfaces";

const createProduct = async (props: IntProducts) => {
  try {
    const newProduct = await Products.create({
      name: props.name.toLowerCase(),
      description: props.description,
      price: props.price,
      stock: props.stock,
      enabled: props.enabled,
      image: props.image,
      category: props.category,
    });

    return newProduct;
  } catch (error: any) {
    return error.message;
  }
};

export default createProduct;
