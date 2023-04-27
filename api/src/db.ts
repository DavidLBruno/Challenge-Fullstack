const { MongoClient } = require("mongodb");
const dotenv = require("dotenv");
const mongoose = require("mongoose");

const { PASSWORD, USERNAME } = process.env;

const uri = `mongodb+srv://bruno:${PASSWORD}@cluster0.bgvhzmc.mongodb.net/?retryWrites=true&w=majority`;

const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

async function connect() {
  try {
    await client.connect();
    console.log("");
    console.log("\x1b[35m%s\x1b[0m", "Connected to MongoDB!");
    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } catch (err) {
    console.error(err);
  }
}

export { connect };
