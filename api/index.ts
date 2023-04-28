import app from "./src/app";
require("dotenv").config();
import { connect } from "./src/db";

const PORT = process.env.PORT;
connect();

app.listen(PORT, () => {
  setTimeout(() => {
    console.log(
      "\n\n" +
        "\u001b[34m" +
        "Server running on port" +
        "\u001b[0m" +
        " " +
        "\x1b[32m%s\x1b[0m",
      `${PORT}`
    );
  }, 4000);
});
