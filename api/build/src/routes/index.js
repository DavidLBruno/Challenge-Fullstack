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
exports.getTransaction = exports.getCard = exports.getBalance = exports.getMenu = void 0;
const menu_1 = require("../models/menu");
const transactions_1 = require("../models/transactions");
const getMenu = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield menu_1.menuModel.create({});
        const response = yield menu_1.menuModel.find();
        return res.status(200).json({
            response,
        });
    }
    catch (error) {
        console.error(error);
        return res.status(400).json({
            error: "no funciono",
        });
    }
});
exports.getMenu = getMenu;
const getCard = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return res.status(200).json({
            "Todo ok": "Ajam",
        });
    }
    catch (error) {
        console.error(error);
        return res.status(400).json({
            error: "no funciono",
        });
    }
});
exports.getCard = getCard;
const getTransaction = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = transactions_1.transactionModel.find();
        return res.status(200).json({
            response,
        });
    }
    catch (error) {
        console.error(error);
        return res.status(400).json({
            error: "no funciono",
        });
    }
});
exports.getTransaction = getTransaction;
const getBalance = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return res.status(200).json({
            "Todo ok": "Ajam",
        });
    }
    catch (error) {
        console.error(error);
        return res.status(400).json({
            error: "no funciono",
        });
    }
});
exports.getBalance = getBalance;
