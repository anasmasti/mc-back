// get modal
const Commentaire = require("../../models/Commentaire/commentaire.model");

exports.allComments = async (req, res) => {
  try {
    const allComment = await Commentaire.find({
      _id: req.params.ID,
      deleted: false,
    });
    res.send(allComment);
  } catch (error) {
    res.status(401).send({error: err.message});
  }
};
