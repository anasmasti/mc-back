// get modal
const User = require("../../models/Utilisateur/utilisateur.model");

//get all Users
exports.allUsers = async (req, res) => {
  try {
    const allUsers = await User.find();
    res.send(allUsers);
  } catch (err) {
    res.json({ message: err.message });
  }
};

exports.getUser = async (req, res) => {
  try {
    const getUser = await User.find({ _id: req.params.id });
    res.send(getUser);
  } catch (err) {
    res.json({ message: err.message });
  }
};
