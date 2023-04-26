"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const PORT = process.env.PORT;
const app = (0, express_1.default)();
console.log(PORT);
app.use(express_1.default.json());
app.listen(PORT, () => {
    console.log("Server running" + " " + "\x1b[32m%s\x1b[0m", `${12345}`);
});
