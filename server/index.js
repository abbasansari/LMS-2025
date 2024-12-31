import express from "express";
import colors from "colors";
import dotenv from "dotenv";
import connectDB from "./config/dbConnect.js";

dotenv.config({});
const app = express();
const port = process.env.PORT || 3000;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

connectDB();
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`.bgMagenta);
});
