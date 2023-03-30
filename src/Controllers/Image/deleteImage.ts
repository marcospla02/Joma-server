import { Image } from "../../db";

export default async function deleteImage(_id: string) {
  try {
    const findImg = await Image.findById({ _id }); // object literal

    if (findImg) {
      await Image.deleteOne({ _id }); // object literal
      return { deletedId: _id };
    } else {
      return `The image with id: '${_id}' was not found`;
    }
  } catch (error: any) {
    return error.message;
  }
}
