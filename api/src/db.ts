import mongoose from "mongoose";
import { user, transaction, menu } from "./data/data.json";
import { userModel } from "./models/user";
import { transactionModel } from "./models/transactions";
import { menuModel } from "./models/menu";
const { PASSWORD, STATE, DBNAME } = process.env;

const uri =
  STATE == "dev"
    ? `mongodb://localhost:27017/${DBNAME}`
    : `mongodb+srv://brunodavid9914:${PASSWORD}@cluster0.zatdwyn.mongodb.net/?retryWrites=true&w=majority`;

const connect = async () => {
  try {
    await mongoose.connect(uri);
    console.log("\n\n" + "\x1b[35m%s\x1b[0m", "Connected to MongoDB!");
  } catch (err) {
    console.error(err);
  }
};

const db = mongoose.connection;

db.once("open", async () => {
  try {
    // Borrar todos los datos de la base de datos existente
    await menuModel.deleteMany({});
    await transactionModel.deleteMany({});
    await userModel.deleteMany({});

    // Cargar los nuevos datos
    await menuModel.insertMany(menu);
    await transactionModel.insertMany(transaction);
    await userModel.insertMany(user);
    console.log(
      "\n\n" + "\x1b[33m%s\x1b[0m",
      "Los datos se han cargado correctamente"
    );
  } catch (err) {
    console.error(err);
  }
});

export { connect };
