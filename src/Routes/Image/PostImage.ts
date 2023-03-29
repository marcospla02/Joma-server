import { Router } from "express";
import { postImage } from "../../Controllers";

const router = Router();

router.post("/", async (req, res) => {
  try {
    const body = req.body;

    const newImage = await postImage(body);

    if (!newImage) throw new Error("failed to create new image");

    res.send(newImage);
  } catch (error: any) {
    res.send(error.message);
  }
});

export default router;
