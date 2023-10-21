const PlayerProgress = require("./models/PlayerProgress_Model.js");
const mongoose = require("mongoose");
const fs = require("fs");

//Create a new devlog
const saveProgress = async (req, res) => {
  //const { title, type, content } = req.body;

  const jsonFilePath =
    "C:/Users/CHAMA COMPUTERS/AppData/LocalLow/DefaultCompany/Algorithmia/data.game";
  const JSONContent = JSON.parse(fs.readFileSync(jsonFilePath, "utf-8"));
  const content = JSON.stringify(JSONContent);

  try {
    const playerProgress = await PlayerProgress.create({
      content,
    });
    res.status(200).json(content);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  saveProgress,
};
