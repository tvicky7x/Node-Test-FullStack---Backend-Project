const bodyParser = require("body-parser");
const cors = require("cors");
const express = require("express");
const playerRouter = require("./Controller/player");
const sequelize = require("./util/database");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

app.use(playerRouter);

const PORT = process.env.PORT || 5000;

sequelize
  .sync()
  .then(() => {
    app.listen(PORT, () => console.log(`server is running in port ${PORT}`));
  })
  .catch((err) => console.log(err));
