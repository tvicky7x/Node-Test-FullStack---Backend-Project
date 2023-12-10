const bodyParser = require("body-parser");
const cors = require("cors");
const express = require("express");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

app.get("/api", (req, res) => {
  res.send("hello from backend");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`server is running in port ${PORT}`));
