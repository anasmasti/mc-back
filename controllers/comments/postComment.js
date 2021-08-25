// get modal
const Commentaire = require("../../models/Commentaire/commentaire.model");

exports.newComment = async (req, res) => {
  try {
    const newComment = new Commentaire({
      contenue: req.body.contenue,
      produit: req.body.produit,
      utilisateur: req.body.utilisateur,
    });
    await newComment.save();
    res.send(newComment);
  } catch (error) {
    res.status(401).send({error: err.message});
  }
};


