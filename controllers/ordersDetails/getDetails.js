// get modal
const Details = require("../../models/DetailsCommande/details.model");

exports.getAllDetails = async (req, res) => {
  try {
    const allDetails = await Details.find({ deleted: false });
    res.send(allDetails);
  } catch (error) {
    res.send(error.message);
  }
};

exports.getDetail = async (req, res) => {
  try {
    const Detail = await Details.find({ _id: req.params.ID });
    res.send(Detail);
  } catch (error) {
    res.send(error.message);
  }
};
