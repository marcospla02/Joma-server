import { Router } from "express";
import { getUsers } from "../../Controllers";

const router = Router();

router.get("/", async (req, res) => {
  try {
    const findUsers = await getUsers();
    if (findUsers) res.send(findUsers);
  } catch (error: any) {
    res.send(error.message);
  }
});

export default router;
