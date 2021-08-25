// get modal
const Product = require("../../models/Produits/produits.model");

//delete a product
exports.deleteProduct = async (req, res) => {
  try {
    const deletedProduct = await Product.updateOne(
      { _id: req.params.ID },
      {
        deleted: true,
      }
    );

    res.send(deletedProduct);
  } catch (err) {
    res.status(401).send({error: err.message});
  }
};
