// get modal
const Commande = require("../../models/Commande/Commande.model");

exports.deleteOrder = async (req, res) => {
  try {
    const updatedCommande = await Commande.updateOne(
      { _id: req.params.ID },
      {
       deleted: true
      }
    );
    res.send(updatedCommande);
  } catch (error) {
    res.send(error.message);
  }
};
