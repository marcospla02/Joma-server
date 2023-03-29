import { Router } from "express";
import { CreateProduct } from "../../Controllers";

const router = Router();

router.post("/", async (req, res) => {
  try {
    const body = req.body;

    const newProduct = await CreateProduct(body);

    if (!newProduct) throw new Error("failed to create product");

    res.send(newProduct);
  } catch (error: any) {
    res.send(error.message);
  }
});

export default router;
