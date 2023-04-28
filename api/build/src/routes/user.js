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
exports.loginUser = void 0;
const user_1 = require("../models/user");
const loginUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { type, document, password } = req.headers;
        const response = yield user_1.userModel.find({ type, document, password });
        console.log({ response, type, document, password });
        return res.status(200).json({
            response,
        });
    }
    catch (error) {
        console.error(error);
        return res.status(500).json({ mensaje: "Error to login User" });
    }
});
exports.loginUser = loginUser;
