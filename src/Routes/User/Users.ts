import { Router } from "express";
import { getUsers, updateUser } from "../../Controllers";

const router = Router();

router.get("/", async (req, res) => {
  try {
    const findUsers = await getUsers();
    if (findUsers) res.send(findUsers);
  } catch (error: any) {
    res.send(error.message);
  }
});

router.put("/:_id", async (req, res) => {
  try {
    const { _id } = req.params;
    const body = req.body;

    const updUser = await updateUser(_id, body);

    res.send(updUser);
  } catch (error: any) {
    res.status(404).send(error.message);
  }
});

export default router;
