import { Router } from "express";
import { CreateUser } from "../../Controllers";

const router = Router();

router.post("/", async (req, res) => {
  try {
    const body = req.body;
    const userCreated = await CreateUser(body);

    if (!userCreated) throw new Error("failed to create user");

    res.send(userCreated);
  } catch (error: any) {
    res.send(error.message);
  }
});

export default router;
