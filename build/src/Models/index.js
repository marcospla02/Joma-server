"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = exports.Products = exports.Image = exports.Category = void 0;
var Category_1 = require("./Category/Category");
Object.defineProperty(exports, "Category", { enumerable: true, get: function () { return __importDefault(Category_1).default; } });
var Image_1 = require("./Image/Image");
Object.defineProperty(exports, "Image", { enumerable: true, get: function () { return __importDefault(Image_1).default; } });
var Products_1 = require("./Products/Products");
Object.defineProperty(exports, "Products", { enumerable: true, get: function () { return __importDefault(Products_1).default; } });
var User_1 = require("./User/User");
Object.defineProperty(exports, "User", { enumerable: true, get: function () { return __importDefault(User_1).default; } });
