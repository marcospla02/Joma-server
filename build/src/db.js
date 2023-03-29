"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Image = exports.Products = exports.User = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const mongoose_1 = __importDefault(require("mongoose"));
const Models_1 = require("./Models");
Object.defineProperty(exports, "User", { enumerable: true, get: function () { return Models_1.User; } });
Object.defineProperty(exports, "Products", { enumerable: true, get: function () { return Models_1.Products; } });
Object.defineProperty(exports, "Image", { enumerable: true, get: function () { return Models_1.Image; } });
const { USER, PASS } = process.env;
mongoose_1.default
    .connect(`mongodb+srv://${USER}:${PASS}@cluster0.t3zf1hr.mongodb.net/joma?retryWrites=true&w=majority`)
    .then(() => console.log("se conecto a la BBDD"))
    .catch((err) => console.log(err));
