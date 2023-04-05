import { ObjectId } from "mongodb";
import { IntImage } from "../../Interface/interfaces";
import { Image } from "../../db";

export default async function updateImage(_id: string, body: IntImage) {
  const { url } = body;
  let { name } = body;

  if (!ObjectId.isValid(_id)) throw new Error("invalid image id");

  if (name) {
    if (typeof name !== "string")
      throw new Error("name cannot be empty and must be a text type");
    name = name.toLowerCase();
  }

  if (url && typeof url !== "string")
    throw new Error("url cannot be empty and must be a type text type");

  try {
    const update = {
      name,
      url,
    };

    const findImg = await Image.findById({ _id }); // object literal

    if (findImg) {
      const imgUpd = Image.findByIdAndUpdate({ _id }, update, { new: true });
      return imgUpd;
    } else {
      return `The image with id: '${_id}'  was not found`;
    }
  } catch (error: any) {
    return error.message;
  }
}
