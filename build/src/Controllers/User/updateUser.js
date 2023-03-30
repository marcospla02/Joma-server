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
const updateUser = (_id, props) => __awaiter(void 0, void 0, void 0, function* () {
    const { favorites, cart, admin, picture } = props;
    let { name } = props;
    if (_id && typeof _id !== "string")
        throw new Error("Invalid id must be a text type");
    if (name) {
        if (typeof name !== "string")
            throw new Error("The name must be a text type");
        else {
            name = name.toLowerCase();
        }
    }
    if (admin && typeof admin !== "boolean")
        throw new Error("Admin must be a true or false value");
    if (picture && typeof picture !== "string")
        throw new Error("Picture must be a text type");
    if (favorites && !Array.isArray(favorites))
        throw new Error("The favorites  must be an array");
    if (cart && !Array.isArray(cart))
        throw new Error("The cart must be an array");
    try {
        const newUpdate = {
            name,
            favorites,
            cart,
            admin,
            picture,
        };
        const update = yield db_1.User.findOneAndUpdate({ _id: _id }, newUpdate, {
            new: true,
            // upsert: true,
        });
        if (update === null || !update) {
            throw new Error(`User ${_id} not found`);
        }
        else {
            return update;
        }
    }
    catch (err) {
        return err.message;
    }
});
exports.default = updateUser;
