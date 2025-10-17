import express from "express";
import taskRoute from "./router/taskRouter.js";
import { connectDB } from "./config/db.js";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

const PORT = process.env.PORT || 8080;

const app = express();

//middlewares
app.use(cors({ origin: "http://localhost:5173" }));
app.use(express.json());

app.use("/api/task", taskRoute);

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log("server bắt đầu trên cổng ${PORT}");
  });
});
