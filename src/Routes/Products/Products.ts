import { Router } from "express";
import { getProducts, updateProduct } from "../../Controllers";

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

router.put("/:_id", async (req, res) => {
  try {
    const { _id } = req.params;
    const body = req.body;

    const updatePrt = await updateProduct(_id, body);

    console.log("soy update:", updatePrt);
    res.send(updatePrt);
  } catch (error: any) {
    res.send(error.message);
  }
});

export default router;
