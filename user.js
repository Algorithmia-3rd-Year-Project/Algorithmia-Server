const express = require("express");
const { loginUser } = require("./login_logic");
const { saveProgress } = require("./PlayerProgress");

const router = express.Router();

//Homepage
router.get("/", (req, res) => {
  res.json({ msg: "Home Page" });
});

router.post("/login", loginUser);

router.post("/playersave", saveProgress);

module.exports = router;
