// get modal
const Product = require("../../models/Produits/produits.model");

//update a product
exports.updateProduct = async (req, res) => {
  try {
    const updatedProduct = await Product.updateOne(
      { _id: req.params.ID },
      {
        intitule: req.body.intitule,
        breve_intitule: req.body.breve_intitule,
        description: req.body.description,
        breve_description: req.body.breve_description,
        prix: req.body.prix,
        remise: req.body.intitule,
        en_stock: req.body.en_stock,
        tendence: req.body.tendence,
        quantite: req.body.quantite,
        nouveaute: req.body.nouveaute,
        type: req.body.type,
        taille: req.body.taille,
        categorie: req.body.categorie,
      }
    );

    res.send(updatedProduct);
  } catch (err) {
    res.status(401).send({error: err.message});
  }
};
