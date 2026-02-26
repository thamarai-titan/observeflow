
import express from "express"
import type { Application, Request, Response, NextFunction } from "express";
import cors from "cors";
import morgan from "morgan";
import authRoute from "./modules/auth/auth.route"
import projectRoute from "./modules/project/project.route"

const app: Application = express();

// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));

app.use("/api", authRoute)
app.use("/api", projectRoute)



// Health check
app.get("/", (req: Request, res: Response) => {
  res.status(200).json({
    success: true,
    message: "Server is running 🚀",
  });
});

export default app;