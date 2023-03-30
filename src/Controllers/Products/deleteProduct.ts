import { Products } from "../../db";
import { IntProducts } from "../../Interface/interfaces";

const deleteProducts = async (_id: string) => {
  try {
    const findPrduct = await Products.findById({ _id: _id });

    if (findPrduct) {
      await Products.deleteOne({ _id: _id });
      return { deletedId: _id };
    } else {
      return `The product with id: '${_id}' was not found`;
    }
  } catch (error: any) {
    return error.message;
  }
};

export default deleteProducts;
