
import express from "express"
import type { Application, Request, Response, NextFunction } from "express";
import cors from "cors";
import morgan from "morgan";

const app: Application = express();

// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));



// Health check
app.get("/", (req: Request, res: Response) => {
  res.status(200).json({
    success: true,
    message: "Server is running 🚀",
  });
});

export default app;