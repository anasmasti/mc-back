// get modal
const Commentaire = require("../../models/Commentaire/commentaire.model");

exports.deleteComment = async (req, res) => {
  try {
    const updatedComment = await Commentaire.updateOne(
      { _id: req.params.id },
      {
        deleted: true,
      }
    );

    res.send(updatedComment);
  } catch (error) {
    res.send(error.message);
  }
};
