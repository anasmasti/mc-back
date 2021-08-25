// get modal
const Details = require("../../models/DetailsCommande/details.model");


exports.newDetails = async (req, res) => {
  try {
    const newDetails = new Details({
      produits: req.body.produits,
    });
    await newDetails.save();
    res.send(newDetails);
  } catch (error) {
    res.status(401).send({error: err.message});
  }
};
