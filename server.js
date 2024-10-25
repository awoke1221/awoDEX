const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const morgan = require("morgan");
const userRouter = require("./routes/userRoute");

require("dotenv").config();
const app = express();
const port = process.env.PORT || 5000;

// parsing data middlewares
app.use(bodyParser.json()); // parsing the json data
app.use(bodyParser.urlencoded({ extended: true })); // for url encoded data

app.use(express.json());
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}
app.use(cors());

app.get("/", (req, res) => {
  res.json("the server works perfectly!!!");
});

app.use("/api/v1/user/", userRouter);

app.listen(port, () => {
  console.log(`the Server run on the Port: ${port}`);
});
