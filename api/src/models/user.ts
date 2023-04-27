import mongoose from "mongoose";
const userColecctions = "User";

const userSchema = new mongoose.Schema({
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
export const userModel = mongoose.model(userColecctions, userSchema);
