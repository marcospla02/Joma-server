import { Category } from "../../db";

export default async function getCtg() {
  try {
    const result = await Category.find({});

    return result;
  } catch (error: any) {
    return error.message;
  }
}
