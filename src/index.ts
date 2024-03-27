import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import apiRouter from "./routes/api/api.routes";

dotenv.config();

const app = express();

app.get("/", (req, res) => {
  res.send("Hello, TypeScript with Express!");
});

app.use(express.json());

app.use("/api", apiRouter);

//connect to DB
const mongoDbUrl = process.env.MONGO_DB_URL || "";
const port = process.env.PORT || 3002;
mongoose
  .connect(mongoDbUrl)
  .then(() => {
    console.log("DB is Connected!");
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
