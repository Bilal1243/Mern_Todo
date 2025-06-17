import express from "express";
import connectDb from "./config/db.js";
import todoRoute from "./routes/todoRoutes.js";
import cors from "cors";
import cookieParser from "cookie-parser";
import userRoute from "./routes/userRoutes.js";
import { notFound, errorHandler } from "./middlewares/errorMiddleware.js";
import dotenv from 'dotenv'

dotenv.config()

const app = express();

connectDb();

let port = process.env.PORT;

app.use(cookieParser())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());

// app.get(route , handler)

app.use("/api/todo", todoRoute);
app.use("/api/user", userRoute);

app.use(notFound)
app.use(errorHandler)

app.listen(port, () => console.log("server started successfully"));
