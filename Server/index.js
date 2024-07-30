import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
dotenv.config();
import authRouter from "./routes/auth.routes.js";
const app = express();

const PORT = process.env.PORT || 3000;

// middleware
app.use(express.json());

// calling routes
app.use("/api/auth", authRouter);
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
  console.log(`Server listening to Port:${PORT}`);
});
