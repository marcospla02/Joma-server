import { Router } from "express";

import {
  Products,
  Users,
  Image,
  RouteCreateUser,
  RouteCreateP,
  PostImage,
  deleteUser,
  DeletePrd,
  deleteImage,
  Category,
  RouteDltCtg,
  RoutePostCtg,
  Detail,
} from ".";

const router = Router();

router.use("/users", Users);
router.use("/createUser", RouteCreateUser);
router.use("/deleteUser", deleteUser);

router.use("/products", Products);
router.use("/detail", Detail);
router.use("/postPt", RouteCreateP);
router.use("/deletePt", DeletePrd);

router.use("/images", Image);
router.use("/imgPost", PostImage);
router.use("/dltImg", deleteImage);

router.use("/category", Category);
router.use("/dltCategory", RouteDltCtg);
router.use("/createCategory", RoutePostCtg);

export default router;
