const mongoose = require("mongoose");

const connectDB = async (dbUrl) => {
  try {
    const db = await mongoose.connect(dbUrl);
    console.log(`MongoDB connected ${db.connection.host}`.magenta);
  } catch (err) {
    console.log("mongoDB failed", err);
  }
};
module.exports = connectDB;
