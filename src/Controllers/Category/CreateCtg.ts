import { Category } from "../../db";

export default async function createCtg(name: string) {
  try {
    const createCtg = await Category.create(name.toLowerCase());

    return createCtg;
  } catch (error: any) {
    return error.message;
  }
}
