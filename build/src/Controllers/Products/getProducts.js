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
function getProducts(options) {
    return __awaiter(this, void 0, void 0, function* () {
        const { name, enabled, category } = options;
        const findOptions = {};
        if (name)
            findOptions.name = new RegExp(name, "i");
        if (enabled)
            findOptions.enabled = enabled;
        if (category) {
            try {
                const categoryFind = yield db_1.Category.findOne({ name: category });
                if (categoryFind)
                    findOptions.category = categoryFind._id;
            }
            catch (error) {
                return error.message;
            }
        }
        try {
            const findAllProducts = yield db_1.Products.find(findOptions)
                .populate("image")
                .populate("category");
            if (!findAllProducts.length)
                throw new Error("Product not found");
            return findAllProducts;
        }
        catch (error) {
            return error.message;
        }
    });
}
exports.default = getProducts;
