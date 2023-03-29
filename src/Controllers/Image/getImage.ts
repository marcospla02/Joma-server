import { Image } from "../../db";

export default async function getImages() {
  try {
    const findAll = await Image.find({});

    if (!findAll.length) throw new Error("No images found");

    return findAll;
  } catch (error: any) {
    return error.message;
  }
}
