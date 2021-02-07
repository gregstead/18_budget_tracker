const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const compression = require("compression");

// express configurations
const PORT = process.env.PORT || 3000;

const app = express();

app.use(logger("dev"));

app.use(compression());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

// mongoose connection
mongoose.connect("mongodb://localhost/budget", {
  userNewUrlParser: true,
  userFindAndModify: false,
  useUnifiedTopology: true,
});

//routes
app.use(require("./routes/api"));

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
