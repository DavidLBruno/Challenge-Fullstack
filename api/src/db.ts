const { MongoClient } = require("mongodb");
const dotenv = require("dotenv");

const { PASSWORD, DBNAME } = process.env;

const uri = `mongodb+srv://${DBNAME}:${PASSWORD}@cluster0.bgvhzmc.mongodb.net/?retryWrites=true&w=majority`;

const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

async function connect() {
  try {
    await client.connect();
    console.log("");
    console.log("\x1b[35m%s\x1b[0m", "Connected to MongoDB!");
  } catch (err) {
    console.error(err);
  }
}

export { connect };
