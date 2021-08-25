// get modal
const Details = require("../../models/DetailsCommande/details.model");

exports.deleteDetail = async (req, res) => {
  try {
    const updatedDetails = await Details.updateOne(
      { _id: req.params.ID },
      {
        deleted: true,
      }
    );
    res.send(updatedDetails);
  } catch (error) {
    res.status(401).send({error: err.message});
  }
};
