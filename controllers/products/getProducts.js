// get modal
const Product = require("../../models/Produits/produits.model");

//get all products
exports.allProducts = async (req, res) => {
  try {
    const allProducts = await Product.find({ deleted: false });
    res.send(allProducts);
  } catch (err) {
    res.json({ message: err.message });
  }
};

exports.getProduct = async (req, res) => {
  try {
    const getProduct = await Product.find({
      _id: req.params.id,
      deleted: false,
    });
    res.send(getProduct);
  } catch (err) {
    res.json({ message: err.message });
  }
};
