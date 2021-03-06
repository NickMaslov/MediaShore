require("dotenv").config();
const PORT = process.env.PORT || 5000;

const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes");

const app = express();

const mongoURI = process.env.MONGO_URI_ || process.env.MONGO_HOST;

// Data parsing
app.use(express.json());

//  Connect all our routes to our application
app.use("/api", router);

// DB and server connection
async function start() {
  try {
    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true
    });

    app.listen(PORT, () =>
      console.log("App server has been started on port: %s.", PORT)
    );
  } catch (err) {
    console.log("Server Error:", err.message);
    process.exit(1);
  }
}
start();
