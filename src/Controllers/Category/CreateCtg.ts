import { Category } from "../../db";

interface Body {
  name: string;
}

export default async function CreateCtg(body: Body) {
  try {
    let { name } = body;
    if (name) name = name.toLowerCase();

    const createCtg = await Category.create({ name: name });

    return createCtg;
  } catch (error: any) {
    return error.message;
  }
}
