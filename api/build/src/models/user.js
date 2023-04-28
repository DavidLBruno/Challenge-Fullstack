"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userModel = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const userColecctions = "User";
const userSchema = new mongoose_1.default.Schema({
    name: {
        type: String,
        require: true,
    },
    password: {
        type: String,
        require: true,
    },
    document: {
        type: Number,
        require: true,
    },
    mail: {
        type: String,
        require: true,
    },
    type: {
        type: String,
        require: true,
    },
});
exports.userModel = mongoose_1.default.model(userColecctions, userSchema);
