"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongodb_1 = require("mongodb");
const db_1 = require("../../db");
function updateImage(_id, body) {
    return __awaiter(this, void 0, void 0, function* () {
        const { url } = body;
        let { name } = body;
        if (!mongodb_1.ObjectId.isValid(_id))
            throw new Error("invalid image id");
        if (name) {
            if (typeof name !== "string")
                throw new Error("name cannot be empty and must be a text type");
            name = name.toLowerCase();
        }
        if (url && typeof url !== "string")
            throw new Error("url cannot be empty and must be a type text type");
        try {
            const update = {
                name,
                url,
            };
            const findImg = yield db_1.Image.findById({ _id }); // object literal
            if (findImg) {
                const imgUpd = db_1.Image.findByIdAndUpdate({ _id }, update, { new: true });
                return imgUpd;
            }
            else {
                return `The image with id: '${_id}'  was not found`;
            }
        }
        catch (error) {
            return error.message;
        }
    });
}
exports.default = updateImage;
