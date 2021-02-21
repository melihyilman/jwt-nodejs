const express = require("express");
const app = express();
const authRoute = require("./routes/auth");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const postRoute = require("./routes/post");
dotenv.config();
mongoose.connect(process.env.DB_CONNECT, { useNewUrlParser: true }, () =>
  console.log("db connected")
);

//middleware
app.use(express.json());
app.use("/api/posts", postRoute);

//route.middleware
app.use("/api/user", authRoute);

app.listen(3000, () => console.log("server is running"));
