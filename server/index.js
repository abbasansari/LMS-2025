import express from "express";
import colors from "colors";
import dotenv from "dotenv";
import connectDB from "./config/dbConnect.js";
import userRouter from "./routes/user.route.js";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import cors from "cors";

dotenv.config({});
const app = express();
const port = process.env.PORT || 3000;
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:5000",
    credentials: true,
  })
);

connectDB();

//apis
app.use("/api/v1/user", userRouter);

app.get("/", (_, res) => {
  res.send("Hello World");
});
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`.bgMagenta);
});
