import { Router } from "express";
import { deleteProduct } from "../../Controllers";

const router = Router();

router.delete("/:_id", async (req, res) => {
  try {
    const { _id } = req.params;

    const removePrd = await deleteProduct(_id);

    res.send(removePrd);
  } catch (error: any) {
    res.send(error.message);
  }
});

export default router;
