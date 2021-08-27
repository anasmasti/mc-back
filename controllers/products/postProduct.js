// get modal
const Product = require("../../models/Produits/produits.model");
//post new product
exports.addProduct = async (req, res) => {
  try {
    const newProduct = new Product({
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
    });
 
    if (req.files) {
      req.files.forEach(file => {
        newProduct.images.push(file.path);
      });
      
    }
    const addedProduct = await newProduct.save();
    res.send(addedProduct);
  } catch (err) {
    res.status(401).send({ error: err.message });
  }
};
