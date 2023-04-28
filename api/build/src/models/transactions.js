"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.transactionModel = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const transactionColecctions = "Transactions";
const transactionSchema = new mongoose_1.default.Schema({
    type: {
        type: String,
        require: true,
    },
    name: {
        type: String,
        require: true,
    },
    import: {
        type: String,
        require: true,
    },
    date: {
        type: String,
        require: true,
    },
    status: {
        type: String,
        require: true,
    },
    origin: {
        type: String,
        require: true,
    },
});
exports.transactionModel = mongoose_1.default.model(transactionColecctions, transactionSchema);
