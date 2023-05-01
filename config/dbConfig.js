const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(
        "mongodb+srv://test:test@finalproject.3sqdycf.mongodb.net/test",
      {
        useUnifiedTopology: true,
        useNewUrlParser: true,
      }
    );
  } catch (error) {
    console.log(error);
  }
};

module.exports = connectDB;