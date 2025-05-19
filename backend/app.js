import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import dbconnection from "./database/dbconnection.js";
import { errorMiddleware } from "./error/error.js";
import router from "./routes/reservationRouter.js";

const app = express();
dotenv.config({ path: "./config/config.env" });

// ✅ Allow CORS from your frontend
app.use(
  cors({
    origin: process.env.FRONTEND_URL,
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  })
);

// ✅ Handle JSON and form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ✅ Routes
app.use("/api/reservation", router);

// ✅ DB connection
dbconnection();

// ✅ Error handler
app.use(errorMiddleware);

export default app;
