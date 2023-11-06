const express = require("express");
const app = express();
const cors = require("cors");
const sequelize = require("./util/database");
const bodyParser = require("body-parser");
const User = require("./models/User");
const userRoutes = require("./routes/user");
app.use(cors());
app.use(bodyParser.json({ extended: false }));

app.use("/user", userRoutes);
sequelize
  .sync()
  .then(() => {
    app.listen(4000);
  })
  .catch((err) => {
    console.log(err);
  });
