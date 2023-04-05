"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const db_1 = require("../../db");
function getProductById(productId) {
    try {
        const findById = db_1.Products.findById({ _id: productId }).populate("image");
        if (!findById)
            return "The product with id " + productId + " does not exist";
        return findById;
    }
    catch (error) {
        return error.message;
    }
}
exports.default = getProductById;
