import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";

dotenv.config();

require("./Database");
const app = express();
const port = process.env.PORT;

app.get("/", (req, res) => {
  res.send("Express + Typescript Server");
});

app.listen(port, () => {
  console.log(`Server : running at http://localhost:${port}`);
});
