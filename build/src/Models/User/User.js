"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const userSchema = new mongoose_1.default.Schema({
    _id: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        require: true,
    },
    favorites: [{ type: mongoose_1.default.Schema.Types.ObjectId, ref: "Product" }],
    cart: [
        {
            _id: { type: mongoose_1.default.Schema.Types.ObjectId /* ref: "Product" */ },
            quantity: Number,
        },
    ],
    admin: { type: Boolean, default: false },
    picture: { type: String, default: "" },
});
exports.default = mongoose_1.default.model("User", userSchema);
