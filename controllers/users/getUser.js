// get modal
const User = require("../../models/Utilisateur/utilisateur.model");
const bcrypt = require("bcrypt");
//get all Users
exports.allUsers = async (req, res) => {
  try {
    const allUsers = await User.find({ deleted: false });
    res.send(allUsers);
  } catch (err) {
    res.json({ message: err.message });
  }
};

exports.getUser = async (req, res) => {
  try {
    const getUser = await User.find({ _id: req.params.id, deleted: false });
    res.send(getUser);
  } catch (err) {
    res.json({ message: err.message });
  }
};

exports.loggin = async (req, res) => {
  try {
    const checkUserEmail = await User.findOne({
      deleted: false,
      email: req.body.email,
    });
    if (!checkUserEmail) res.send("email introuvable");
    const pw = await bcrypt.compare(req.body.password, checkUserEmail.password);
    if (!pw) res.send("mot de passe incorrect");
    res.send("logged in");
  } catch (error) {
    res.send(error.message);
  }
};
