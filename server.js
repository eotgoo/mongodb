const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const colors = require("colors");
const cors = require("cors");

const PORT = process.env.PORT;
const dbUrl = process.env.DATABASE_URI;
const connectDB = require("./config/mongoDB.js");
const logger = require("./logger/logger");
const upload = require("./logger/upload");
const error = require("./logger/error");
const cloudinary = require("./utils/cloudinary");
const userRoutes = require("./Routes/userRoutes");
const categoryRoutes = require("./Routes/categoryRoutes");
const travelRoutes = require("./Routes/travelRoutes");

// const DATABASE_URI = process.env.DATABASE_URI;

//instance of express
const app = express();

//middlewares
app.use(cors());
app.use(express.json());
app.use(logger);

app.use("/uploads", express.static("uploads"));
app.use("/users", userRoutes);
app.use("/categories", categoryRoutes);
app.use("/travel", travelRoutes);

app.get("/", async (req, res) => {
  res.json({ message: "hello" });
});

app.post("/upload", upload.single("image"), async (req, res) => {
  console.log("REQ:", req.file);

  const result = await cloudinary.uploader.upload(req.file.path);
  res.status(200).json({
    message: "Амжилттай хадгаллаа.",
    imgUrl: result.secure_url,
  });
});

console.log(`.............`.yellow);

app.use(error);
connectDB(dbUrl);

app.listen(PORT, () => {
  console.log(`Server is running ${PORT} `.blue);
});
