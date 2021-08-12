// get modal 
const Panier = require('../../models/Panier/panier.model');


exports.deletePanier = async (req,res)=>{
    const produits = req.body.produits;
    const utilisateur = req.body.utilisateur;
    try {
        const updatedPanier =await Panier.updateOne(
            {_id: req.params.Id},
            {
            deleted: true
        });
        res.send(updatedPanier);
    } catch (error) {
        res.send(error.message);
    }
}