import { Router } from "express";
import { DeleteCtg } from "../../Controllers";

const router = Router();

router.delete("/:_id", async (req, res) => {
  try {
    const { _id } = req.params;

    const result = await DeleteCtg(_id);

    res.send(result);
  } catch (error: any) {
    res.send(error.message);
  }
});

export default router;
