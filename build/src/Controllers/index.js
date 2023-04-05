"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateUser = exports.getUsers = exports.deleteUser = exports.CreateUser = exports.updateProduct = exports.getProducts = exports.getProductById = exports.deleteProduct = exports.CreateProduct = exports.updateImage = exports.postImage = exports.getImage = exports.deleteImage = exports.getCategory = exports.UpdateCtg = exports.DeleteCtg = exports.CreateCtg = void 0;
var CreateCtg_1 = require("./Category/CreateCtg");
Object.defineProperty(exports, "CreateCtg", { enumerable: true, get: function () { return __importDefault(CreateCtg_1).default; } });
var DeleteCtg_1 = require("./Category/DeleteCtg");
Object.defineProperty(exports, "DeleteCtg", { enumerable: true, get: function () { return __importDefault(DeleteCtg_1).default; } });
var UpdateCtg_1 = require("./Category/UpdateCtg");
Object.defineProperty(exports, "UpdateCtg", { enumerable: true, get: function () { return __importDefault(UpdateCtg_1).default; } });
var getCategory_1 = require("./Category/getCategory");
Object.defineProperty(exports, "getCategory", { enumerable: true, get: function () { return __importDefault(getCategory_1).default; } });
var deleteImage_1 = require("./Image/deleteImage");
Object.defineProperty(exports, "deleteImage", { enumerable: true, get: function () { return __importDefault(deleteImage_1).default; } });
var getImage_1 = require("./Image/getImage");
Object.defineProperty(exports, "getImage", { enumerable: true, get: function () { return __importDefault(getImage_1).default; } });
var postImage_1 = require("./Image/postImage");
Object.defineProperty(exports, "postImage", { enumerable: true, get: function () { return __importDefault(postImage_1).default; } });
var updateImage_1 = require("./Image/updateImage");
Object.defineProperty(exports, "updateImage", { enumerable: true, get: function () { return __importDefault(updateImage_1).default; } });
var CreateProduct_1 = require("./Products/CreateProduct");
Object.defineProperty(exports, "CreateProduct", { enumerable: true, get: function () { return __importDefault(CreateProduct_1).default; } });
var deleteProduct_1 = require("./Products/deleteProduct");
Object.defineProperty(exports, "deleteProduct", { enumerable: true, get: function () { return __importDefault(deleteProduct_1).default; } });
var getProductById_1 = require("./Products/getProductById");
Object.defineProperty(exports, "getProductById", { enumerable: true, get: function () { return __importDefault(getProductById_1).default; } });
var getProducts_1 = require("./Products/getProducts");
Object.defineProperty(exports, "getProducts", { enumerable: true, get: function () { return __importDefault(getProducts_1).default; } });
var updateProduct_1 = require("./Products/updateProduct");
Object.defineProperty(exports, "updateProduct", { enumerable: true, get: function () { return __importDefault(updateProduct_1).default; } });
var CreateUser_1 = require("./User/CreateUser");
Object.defineProperty(exports, "CreateUser", { enumerable: true, get: function () { return __importDefault(CreateUser_1).default; } });
var deleteUser_1 = require("./User/deleteUser");
Object.defineProperty(exports, "deleteUser", { enumerable: true, get: function () { return __importDefault(deleteUser_1).default; } });
var getUsers_1 = require("./User/getUsers");
Object.defineProperty(exports, "getUsers", { enumerable: true, get: function () { return __importDefault(getUsers_1).default; } });
var updateUser_1 = require("./User/updateUser");
Object.defineProperty(exports, "updateUser", { enumerable: true, get: function () { return __importDefault(updateUser_1).default; } });
