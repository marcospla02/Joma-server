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
const createProduct = (props) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const newProduct = yield db_1.Products.create({
            name: props.name.toLowerCase(),
            description: props.description,
            price: props.price,
            stock: props.stock,
            enabled: props.enabled,
            image: props.image,
            category: props.category,
        });
        return newProduct;
    }
    catch (error) {
        return error.message;
    }
});
exports.default = createProduct;
