import express from "express";
import { config } from "dotenv";
config();

import cors from "cors";
import bodyParser from "body-parser";
import productRouter from "./products/products.routes.js";

//port binding
const PORT = process.env.PORT || 8080;
const app = express();

// db connection
import dbConnection from "./config/db.js";
dbConnection()
  .then((data) => {
    app.listen(PORT, () =>
      console.log(`app is running on the port no: ${PORT}`)
    );
  })
  .catch((err) => console.log(err));

//middleware
app.use(
  cors({
    domain: "*",
  })
);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//routes
app.use("/api/v1/products", productRouter);
