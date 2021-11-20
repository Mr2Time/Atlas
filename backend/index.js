const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");
const app = express();

const userRouter = require("./routers/users");
const auth = require("./routers/auth.js");

// middleware
dotenv.config();
app.use(express.json());
app.use(helmet());
app.use(morgan("combined"));

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Database connected!"))
  .catch((err) => console.log(err));

app.use("/api/users", userRouter);

app.use("/api/auth", auth);

app.listen(5000, () => {
  console.log("Done");
});
