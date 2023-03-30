import { isValidObjectId } from "mongoose";
import { Category } from "../../db";

export default async function updateCtg(_id: string, name: string) {
  if (!isValidObjectId(_id)) throw new Error("Invalid category id");

  if (name && typeof name !== "string")
    throw new Error("The category name must be a string");

  try {
    const findCtg = await Category.findById({ _id }); // object literal

    if (findCtg) {
      const updCtg = await Category.findByIdAndUpdate(
        { _id: _id },
        { name: name.toLowerCase() },
        { new: true }
      );
      return updCtg;
    } else {
      return `The category with id: "${_id}"  does not exist`;
    }
  } catch (error: any) {
    return error.message;
  }
}
