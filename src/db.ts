import dotenv from "dotenv";
dotenv.config();
import mongoose from "mongoose";
import { User, Products, Image, Category } from "./Models";
const { USER, PASS } = process.env;

mongoose
  .connect(
    `mongodb+srv://${USER}:${PASS}@cluster0.t3zf1hr.mongodb.net/joma?retryWrites=true&w=majority`
  )
  .then(() => console.log("se conecto a la BBDD"))
  .catch((err) => console.log(err));

export { User, Products, Image, Category };
