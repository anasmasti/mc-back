// get modal 
const Panier = require('../../models/Panier/panier.model');


exports.addNewPanier = async (req,res)=>{
    const produits = req.body.Panier.produits;
    const utilisateur = req.body.Panier.utilisateur;
    try {
        const newPanier = new Panier({
            produits = produits,
            utilisateur = utilisateur
        });
        await newPanier.save();
        res.send(newPanier);
    } catch (error) {
        res.send(error.message);
    }
}