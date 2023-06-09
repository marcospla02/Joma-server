import { Router } from "express";
import { getImage, updateImage } from "../../Controllers";

const router = Router();

router.get("/", async (req, res) => {
  try {
    const allImages = await getImage();

    if (allImages === "No images found")
      res.status(404).send("No images found");
    else res.send(allImages);
  } catch (error: any) {
    res.send(error.message);
  }
});

router.put("/:_id", async (req, res) => {
  try {
    const { _id } = req.params;

    const result = await updateImage(_id, req.body);
    res.send(result);
  } catch (error: any) {
    res.send(error.message);
  }
});

export default router;
