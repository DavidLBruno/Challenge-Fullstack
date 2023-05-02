import express from "express";
import morgan from "morgan";
import router from "./controllers";
import cors from "cors";
const server = express();

const corsOptions = {
  origin: "http://localhost:4200",
  optionsSuccessStatus: 200,
};

//Middlewares
server.use(morgan("dev"));
server.use(express.json());
server.use(cors(corsOptions)); // Agrega el middleware cors a todas las rutas
server.use(express.urlencoded({ extended: false }));
server.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Credentials", "true");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept,Authorization, document"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});

server.use("/", router);
export default server;
