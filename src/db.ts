import dotenv from "dotenv";
dotenv.config();
import { Mongoose } from "mongoose";

const mongoose = new Mongoose();

mongoose
  .connect(
    "mongodb+srv://marcospla413:2018River@cluster0.t3zf1hr.mongodb.net/test"
  )
  .then((result) => console.log("Conexion exitosa a la BBDD"))
  .catch((err) => console.log(err));
