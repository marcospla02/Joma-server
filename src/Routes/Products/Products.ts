import { Router } from "express";
import { getProducts } from "../../Controllers";

const router = Router();

router.get("/", async (req, res) => {
  try {
    const products = await getProducts();

    if (products === "Product not found")
      res.status(404).send("Product not found");
    else res.send(products);
  } catch (error: any) {
    res.send(error.message);
  }
});

export default router;
