// // index.js
// require("dotenv").config();
// const express = require("express");
// const mongoose = require("mongoose");

// const app = express();
// app.use(express.json());

// app.get("/", (req, res) => res.send("API is running"));

// const PORT = process.env.PORT || 3000;
// mongoose
//   .connect(process.env.MONGO_URI || "mongodb://127.0.0.1:27017/test")
//   .then(() => {
//     console.log("MongoDB connected");
//     app.listen(PORT, () => console.log("Server running on port " + PORT));
//   })
//   .catch((err) => console.error("Mongo error:", err));

require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("Mongo connected"))
  .catch((err) => console.log(err));

app.get("/", (req, res) => {
  res.send("API is running...");
});

app.listen(process.env.PORT, () => {
  console.log("Server running on port " + process.env.PORT);
});
