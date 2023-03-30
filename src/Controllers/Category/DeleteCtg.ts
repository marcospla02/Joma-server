import { Category } from "../../db";
import { ObjectId } from "mongodb";

export default async function deleteCtg(_id: string) {
  if (!ObjectId.isValid(_id)) throw new Error("Invalid Category ID");

  try {
    const findCtg = await Category.findById({ _id }); // object literal

    if (findCtg) {
      await Category.deleteOne({ _id }); // object literal
      return { deletedId: _id };
    } else {
      return `The category with id: "${_id}" does not exist`;
    }
  } catch (error: any) {
    return error.message;
  }
}
