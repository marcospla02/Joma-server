import { Router } from "express";
import { getCategory, UpdateCtg } from "../../Controllers";

const router = Router();

router.get("/", async (req, res) => {
  try {
    const result = await getCategory();
    res.send(result);
  } catch (error: any) {
    res.send(error.message);
  }
});

router.put("/:_id", async (req, res) => {
  try {
    const { _id } = req.params;
    const { name } = req.body;

    const result = await UpdateCtg(_id, name);

    res.send(result);
  } catch (error: any) {
    res.send(error.message);
  }
});

export default router;
