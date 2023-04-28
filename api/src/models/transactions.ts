import mongoose from "mongoose";
const transactionColecctions = "Transactions";

const transactionSchema = new mongoose.Schema({
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
export const transactionModel = mongoose.model(
  transactionColecctions,
  transactionSchema
);
