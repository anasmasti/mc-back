// get modal 
const Panier = require('../../models/Panier/panier.model');


exports.updatePanier = async (req,res)=>{
    const produits = req.body.produits;
    const utilisateur = req.body.utilisateur;
    try {
        const updatedPanier =await Panier.updateOne(
            {_id: req.params.Id},
            {
            produits : produits,
            utilisateur : utilisateur
        });
        res.send(updatedPanier);
    } catch (error) {
        res.status(401).send({error: err.message});
    }
}