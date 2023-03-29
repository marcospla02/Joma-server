import dotenv from "dotenv";
dotenv.config();
import mongoose from "mongoose";
import { User, Products, Image } from "./Models";

mongoose
  .connect(
    "mongodb+srv://marcospla413:2018River@cluster0.t3zf1hr.mongodb.net/joma"
  )
  .then(() => console.log("se conecto a la BBDD"))
  .catch((err) => console.log(err));

export { User, Products, Image };
