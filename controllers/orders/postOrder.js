// get modal
const Commande = require("../../models/Commande/Commande.model");

exports.newOrder = async (req, res) => {
  try {
    const newCommande = new Commande({
      prix: req.body.prix,
      etat: req.body.etat,
      details_commande: req.body.details_commande,
      client: req.body.client,
    });
    newCommande.save();
    res.send(newCommande);
  } catch (error) {
    res.status(401).send({error: err.message});
  }
};
