import express from "express";
import colors from "colors";
import dotenv from "dotenv";
import connectDB from "./config/dbConnect.js";
import userRouter from "./routes/user.route.js";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import cors from "cors";

dotenv.config();
const app = express();
const port = process.env.PORT || 3000;

// Middlewares
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use(
  cors({
    origin: "http://localhost:5173", // Replace with your frontend's URL
    credentials: true,
  })
);

// Connect to database
connectDB();

// Routes
app.use("/api/v1/user", userRouter);

app.get("/", (_, res) => {
  res.send("Hello World");
});

// Error handling
app.use((req, res, next) => {
  res.status(404).json({ success: false, message: "Route not found" });
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ success: false, message: "Internal Server Error" });
});

// Start server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`.bgMagenta);
});
