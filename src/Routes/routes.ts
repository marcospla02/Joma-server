import { Router } from "express";

import {
  Products,
  Users,
  Image,
  RouteCreateUser,
  RouteCreateP,
  PostImage,
} from ".";

const router = Router();

router.use("/users", Users);
router.use("/createUser", RouteCreateUser);

router.use("/products", Products);
router.use("/postPt", RouteCreateP);

router.use("/images", Image);
router.use("/imgPost", PostImage);

export default router;
