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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.connect = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const data_json_1 = require("./data/data.json");
const user_1 = require("./models/user");
const transactions_1 = require("./models/transactions");
const menu_1 = require("./models/menu");
const { PASSWORD, STATE, DBNAME } = process.env;
const uri = STATE == "dev"
    ? `mongodb://localhost:27017/${DBNAME}`
    : `mongodb+srv://brunodavid9914:${PASSWORD}@cluster0.zatdwyn.mongodb.net/?retryWrites=true&w=majority`;
const connect = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield mongoose_1.default.connect(uri);
        console.log("\n\n" + "\x1b[35m%s\x1b[0m", "Connected to MongoDB!");
    }
    catch (err) {
        console.error(err);
    }
});
exports.connect = connect;
const db = mongoose_1.default.connection;
db.once("open", () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // Borrar todos los datos de la base de datos existente
        yield menu_1.menuModel.deleteMany({});
        yield transactions_1.transactionModel.deleteMany({});
        yield user_1.userModel.deleteMany({});
        // Cargar los nuevos datos
        yield menu_1.menuModel.insertMany(data_json_1.menu);
        yield transactions_1.transactionModel.insertMany(data_json_1.transaction);
        yield user_1.userModel.insertMany(data_json_1.user);
        console.log("\n\n" + "\x1b[33m%s\x1b[0m", "Los datos se han cargado correctamente");
    }
    catch (err) {
        console.error(err);
    }
}));
