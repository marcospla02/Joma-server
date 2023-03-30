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
const mongodb_1 = require("mongodb");
function deleteCtg(_id) {
    return __awaiter(this, void 0, void 0, function* () {
        if (!mongodb_1.ObjectId.isValid(_id))
            throw new Error("Invalid Category ID");
        try {
            const findCtg = yield db_1.Category.findById({ _id }); // object literal
            if (findCtg) {
                yield db_1.Category.deleteOne({ _id }); // object literal
                return { deletedId: _id };
            }
            else {
                return `The category with id: "${_id}" does not exist`;
            }
        }
        catch (error) {
            return error.message;
        }
    });
}
exports.default = deleteCtg;
