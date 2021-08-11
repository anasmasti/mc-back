// get modal
const Commande = require("../../models/Commande/Commande.model");

exports.setDetails = async (req, res) => {
  try {
    const updatedCommande = await Commande.updateOne(
      { _id: req.params.ID },
      {
        details_commande: req.body.details_commande,
      }
    );
    res.send(updatedCommande);
  } catch (error) {
    res.send(error.message);
  }
};
