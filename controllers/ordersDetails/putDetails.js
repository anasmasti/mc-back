// get modal
const Details = require("../../models/DetailsCommande/details.model");

exports.updateDetail = async (req, res) => {
  try {
    const updatedDetails = await Details.updateOne(
      { _id: req.params.ID },
      {
        produits: req.body.produits,
      }
    );
    res.send(updatedDetails);
  } catch (error) {
    res.status(401).send({error: err.message});
  }
};
