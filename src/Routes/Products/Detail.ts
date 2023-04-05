import { Router } from "express";
import { getProductById } from "../../Controllers";

const router = Router();

router.get("/:_id", async (req, res) => {
  try {
    const { _id } = req.params;
    const products = await getProductById(_id);
    res.send(products);
  } catch (error: any) {
    res.send(error.message);
  }
});

export default router;
