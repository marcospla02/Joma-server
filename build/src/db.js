"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const mongoose_1 = require("mongoose");
const mongoose = new mongoose_1.Mongoose();
mongoose
    .connect("mongodb+srv://marcospla413:2018River@cluster0.t3zf1hr.mongodb.net/test")
    .then((result) => console.log("Conexion exitosa a la BBDD"))
    .catch((err) => console.log(err));
