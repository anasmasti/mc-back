//get model
const Categorie = require("../../models/Categorie/categorie.model");

exports.getAllCategories = async (req, res) => {
  try {
    const allCategories = await Categorie.find({ deleted: false });
    res.send(allCategories);
  } catch (error) {
    res.status(401).send({error: err.message});
  }
};

exports.getCategorie = async (req, res) => {
  try {
    const categorie = await find({ _id: req.params.ID, deleted: false });
    res.send(categorie);
  } catch (error) {
    res.status(401).send({error: err.message});
  }
};
