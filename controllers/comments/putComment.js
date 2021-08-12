// get modal
const Commentaire = require("../../models/Commentaire/commentaire.model");

exports.updateComment = async (req, res) => {
  try {
    const updatedComment = await Commentaire.updateOne(
      { _id: req.params.id },
      {
        contenue: req.body.contenue,
      }
    );

    res.send(updatedComment);
  } catch (error) {
    res.send(error.message);
  }
};
