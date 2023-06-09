"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const controllers_1 = __importDefault(require("./controllers"));
const server = (0, express_1.default)();
//Middlewares
server.use((0, morgan_1.default)("dev"));
server.use(express_1.default.json());
server.use(express_1.default.urlencoded({ extended: false }));
server.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Credentials", "true");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
    next();
});
server.use("/", controllers_1.default);
exports.default = server;
