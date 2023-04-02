import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
const bodyParser = require("body-parser");
const appRoutes = require("./Routes");

dotenv.config();

require("./Database");
const app = express();
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());
const port = process.env.PORT;

app.use("/api", appRoutes);

app.get("/", (req, res) => {
  res.send("Express + Typescript Server");
});

app.listen(port, () => {
  console.log(`Server : running at http://localhost:${port}`);
});
