import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
dotenv.config();

const app = express();

const PORT = process.env.PORT || 3000;

// Databse
mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("connection success");
  })
  .catch((err) => {
    console.error(err);
  });

// Server
app.listen(PORT, () => {
  console.log("Server");
});
