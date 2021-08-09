// get modal
const User = require("../../models/Utilisateur/utilisateur.model");

//delete a User
exports.deleteUser = async (req, res) => {
  try {
    const deletedUser = await User.updateOne(
      { _id: req.params.ID },
      {
        deleted: true,
      }
    );

    res.send(deletedUser);
  } catch (err) {
    res.send(err.message);
  }
};
