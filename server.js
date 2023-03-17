const express = require("express");
const dotenv = require("dotenv");
const colors = require("colors");
dotenv.config();
const PORT = process.env.PORT;
const connectDB = require("./config/mongoDB.js");
const logger = require("./logger/logger");

const userRoutes = require("./Routes/userRoutes");

// const DATABASE_URI = process.env.DATABASE_URI;

//instance of express
const app = express();

//middlewares
app.use(express.json());
app.use(logger);

app.use("/users", userRoutes);

app.get("/", async (req, res) => {
  res.json({ message: "hello" });
});

console.log(`.............`.yellow);

connectDB();

app.listen(PORT, () => {
  console.log(`Server is running ${PORT} `.blue);
});
