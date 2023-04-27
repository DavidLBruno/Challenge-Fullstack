import mongoose, { Schema } from "mongoose";
const menuColecctions = "Menu";

const menuSchema = new Schema({
  name: {
    type: String,
    require: true,
  },
  icon: {
    type: String,
    require: true,
  },
});
export const menuModel = mongoose.model(menuColecctions, menuSchema);
