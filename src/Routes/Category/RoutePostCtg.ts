import { Router } from "express";
import { CreateCtg } from "../../Controllers";

const router = Router();

router.post("/", async (req, res) => {
  try {
    const result = await CreateCtg(req.body);
    res.send(result);
  } catch (error: any) {
    res.send(error.message);
  }
});

export default router;
