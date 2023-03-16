const express = require("express");
const dotenv = require("dotenv");
const colors = require("colors");
dotenv.config();

const connectDB = require("./config/mongoDb.js");
const app = express();
const PORT = process.env.PORT;
// const DATABASE_URI = process.env.DATABASE_URI;
app.get("/", (req, res) => {
  res.json({ message: "Hello Pinecone" });
});

connectDB();
app.listen(PORT, () => {
  console.log(`Server ${PORT} aslaa`.blue);
});
