import app from "./src/app";
require("dotenv").config();
import { connect } from "./src/db";

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log("");
  setTimeout(function () {
    console.log(
      "\u001b[34m" +
        "Server running on port" +
        "\u001b[0m" +
        " " +
        "\x1b[32m%s\x1b[0m",
      `${PORT}`
    );
  }, 1000);
  connect();
});
