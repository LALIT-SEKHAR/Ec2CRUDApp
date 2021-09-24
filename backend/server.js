require("dotenv").config();
const app = require("express")();
const cors = require("cors");

//DB CONNECTION
const mongoose = require("mongoose");
mongoose
  .connect("mongodb://localhost:27017/testform")
  .then(() => {
    console.log("BD CONNECTED");
  })
  .catch((err) => console.log(`DATABASE ERROR ${err}`));

app.use(cors());

app.get("/test", (req, res) => {
  res.send("<H1>👋😀 Hello.</H1>");
});

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Listening at port ${PORT}`);
});
