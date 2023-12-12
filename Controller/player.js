const express = require("express");
const player = require("../Model/player");

const router = express();

router.post("/add-player", (req, res, next) => {
  player.create(req.body);
  res.redirect("/");
});

router.post("/search-player", async (req, res, next) => {
  let playerInfo = await player.findOne({ where: { name: req.body.search } });
  if (!playerInfo) {
    res.send("Player not found!!!");
  } else {
    res.send(playerInfo.toJSON());
  }
});

router.post("/edit-player", (req, res, next) => {
  player.update(req.body, { where: { id: req.body.id } });
  res.redirect("/");
});

router.delete("/delete-player", (req, res, next) => {
  player.destroy({ where: { id: req.body.id } });
  res.send("delete done");
});

module.exports = router;
