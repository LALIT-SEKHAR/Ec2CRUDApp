require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const User = require("./routes/User");

//DB CONNECTION
const mongoose = require("mongoose");
mongoose
  .connect("mongodb://localhost:27017/testform")
  .then(() => {
    console.log("BD CONNECTED");
  })
  .catch((err) => console.log(`DATABASE ERROR ${err}`));

app.use(cors());
app.use(express.json());

app.use("/api", User);

app.get("/test", (req, res) => {
  res.send("<H1>👋😀 Hello.</H1>");
});

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Listening at port ${PORT}`);
});
