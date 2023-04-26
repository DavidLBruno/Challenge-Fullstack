import app from "./src/app";
require("dotenv").config();

const PORT = process.env.PORT;

require("dotenv").config();

app.listen(PORT, () => {
  console.log(
    "\u001b[34m" +
      "Server running on port" +
      "\u001b[0m" +
      " " +
      "\x1b[32m%s\x1b[0m",
    `${PORT}`
  );
});
