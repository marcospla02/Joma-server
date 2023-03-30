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
const mongoose_1 = require("mongoose");
const db_1 = require("../../db");
function updateCtg(_id, name) {
    return __awaiter(this, void 0, void 0, function* () {
        if (!(0, mongoose_1.isValidObjectId)(_id))
            throw new Error("Invalid category id");
        if (name && typeof name !== "string")
            throw new Error("The category name must be a string");
        try {
            const findCtg = yield db_1.Category.findById({ _id }); // object literal
            if (findCtg) {
                const updCtg = yield db_1.Category.findByIdAndUpdate({ _id: _id }, { name: name.toLowerCase() }, { new: true });
                return updCtg;
            }
            else {
                return `The category with id: "${_id}"  does not exist`;
            }
        }
        catch (error) {
            return error.message;
        }
    });
}
exports.default = updateCtg;
