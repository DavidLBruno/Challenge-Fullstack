"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./src/app"));
require("dotenv").config();
const db_1 = require("./src/db");
const PORT = process.env.PORT;
(0, db_1.connect)();
app_1.default.listen(PORT, () => {
    setTimeout(() => {
        console.log("\n\n" +
            "\u001b[34m" +
            "Server running on port" +
            "\u001b[0m" +
            " " +
            "\x1b[32m%s\x1b[0m", `${PORT}`);
    }, 4000);
});
