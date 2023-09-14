const User = require("./models/User_Model");

const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const response = await User.login(email, password);

    //const user = response.user;

    res.status(200).json(response);
    //res.status(200).json({ email });
  } catch (error) {
    res.status(400).json(error.message);
  }
};

module.exports = {
  loginUser,
};
