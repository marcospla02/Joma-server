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
const db_1 = require("../../db");
function deleteImage(_id) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const findImg = yield db_1.Image.findById({ _id }); // object literal
            if (findImg) {
                yield db_1.Image.deleteOne({ _id }); // object literal
                return { deletedId: _id };
            }
            else {
                return `The image with id: '${_id}' was not found`;
            }
        }
        catch (error) {
            return error.message;
        }
    });
}
exports.default = deleteImage;
