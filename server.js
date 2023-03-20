const express = require("express");
const dotenv = require("dotenv");
const colors = require("colors");
const multer = require("multer");
dotenv.config();
const upload = multer({});
const PORT = process.env.PORT;
const connectDB = require("./config/mongoDB.js");
const logger = require("./logger/logger");

const userRoutes = require("./Routes/userRoutes");
const categoryRoutes = require("./Routes/categoryRoutes");

// const DATABASE_URI = process.env.DATABASE_URI;

//instance of express
const app = express();

//middlewares
app.use(express.json());
app.use(logger);

app.use("/users", userRoutes);
app.use("/categories", categoryRoutes);
app.post("/upload", (req, res) => {
  res.status(200).json({ message: "successful azure!" });
});
app.get("/", async (req, res) => {
  res.json({ message: "hello" });
});

console.log(`.............`.yellow);

connectDB();

app.listen(PORT, () => {
  console.log(`Server is running ${PORT} `.blue);
});
