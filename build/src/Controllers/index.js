"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUsers = exports.CreateUser = exports.getProducts = exports.CreateProduct = exports.postImage = exports.getImage = void 0;
var getImage_1 = require("./Image/getImage");
Object.defineProperty(exports, "getImage", { enumerable: true, get: function () { return __importDefault(getImage_1).default; } });
var postImage_1 = require("./Image/postImage");
Object.defineProperty(exports, "postImage", { enumerable: true, get: function () { return __importDefault(postImage_1).default; } });
var CreateProduct_1 = require("./Products/CreateProduct");
Object.defineProperty(exports, "CreateProduct", { enumerable: true, get: function () { return __importDefault(CreateProduct_1).default; } });
var getProducts_1 = require("./Products/getProducts");
Object.defineProperty(exports, "getProducts", { enumerable: true, get: function () { return __importDefault(getProducts_1).default; } });
var CreateUser_1 = require("./User/CreateUser");
Object.defineProperty(exports, "CreateUser", { enumerable: true, get: function () { return __importDefault(CreateUser_1).default; } });
var getUsers_1 = require("./User/getUsers");
Object.defineProperty(exports, "getUsers", { enumerable: true, get: function () { return __importDefault(getUsers_1).default; } });
