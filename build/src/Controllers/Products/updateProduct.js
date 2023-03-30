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
const updateProduct = (_id, body) => __awaiter(void 0, void 0, void 0, function* () {
    const { description, price, stock, enabled, image } = body;
    let { name } = body;
    if (!mongodb_1.ObjectId.isValid(_id))
        throw new Error("No valid _id type provided for product!");
    if (name) {
        if (typeof name !== "string")
            throw new Error("The name must be a text type");
        else {
            name = name.toLowerCase();
        }
    }
    if (description && typeof description !== "string")
        throw new Error("The description cannot be empty and must be a text type");
    if (price && typeof price !== "number")
        throw new Error("The price cannot be empty and must be a number");
    if (stock && typeof stock !== "number")
        throw new Error("The stock cannot be empty and must be a number");
    if (enabled && typeof enabled !== "boolean")
        throw new Error("The enabled cannot be empty and must be a true or false value");
    if (image && typeof image !== "string")
        throw new Error("The image cannot be empty and must be a text type");
    try {
        const findPrduct = yield db_1.Products.findById({ _id }); // use object literal
        const update = {
            name,
            description,
            price,
            stock,
            image,
            enabled,
        };
        if (findPrduct) {
            const prdUpdate = yield db_1.Products.findByIdAndUpdate({ _id: _id }, update, {
                new: true,
                // upsert: true,
            });
            return prdUpdate;
        }
        else {
            return `The product with id: '${_id}' was not found`;
        }
    }
    catch (error) {
        return error.message;
    }
});
exports.default = updateProduct;
