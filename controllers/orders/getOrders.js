// get modal
const Commande = require("../../models/Commande/Commande.model");

exports.getAllOrders = async (req, res) => {
  try {
    const allCommande = Commande.find();
    res.send(allCommande);
  } catch (error) {
    res.send(error.message);
  }
};

exports.getOrder = async (req, res) => {
  try {
    const oneOrder = await Commande.find({ _id: req.params.id }).populate(
      "client details_commande"
    );
    res.send(oneOrder);
  } catch (error) {
    res.send(error.message);
  }
};
