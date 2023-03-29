import { Router } from "express";
import { deleteUser } from "../../Controllers";

const router = Router();

router.delete("/:_id", async (req, res) => {
  try {
    const { _id } = req.params;

    const remove = await deleteUser(_id);
    res.send(remove);
  } catch (error: any) {
    res.send(error.message);
  }
});

export default router;
