import { Image } from "../../db";
import { IntImage } from "../../Interface/interfaces";

const postImage = async (porps: IntImage) => {
  try {
    const newImage = await Image.create({
      url: porps.url,
      name: porps.name,
    });

    return newImage;
  } catch (error: any) {
    return error.message;
  }
};

export default postImage;
