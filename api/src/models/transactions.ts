import mongoose from "mongoose";
const userColecctions = "user";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  password: {
    type: String,
    require: true,
  },
  dni: {
    type: Number,
    require: true,
  },
  mail: {
    type: String,
    require: true,
  },
});
export const userModel = mongoose.model(userColecctions, userSchema);
