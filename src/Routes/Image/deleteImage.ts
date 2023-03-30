import { Router } from "express";
import { deleteImage } from "../../Controllers";

const router = Router();

router.delete("/:_id", async (req, res) => {
  try {
    const { _id } = req.params;

    const result = await deleteImage(_id);

    res.send(result);
  } catch (error: any) {
    res.send(error.message);
  }
});

export default router;
