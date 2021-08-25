// get modal 
const Panier = require('../../models/Panier/panier.model');


exports.addNewPanier = async (req,res)=>{

    try {
        const newPanier = new Panier({
            produits : req.body.produits,
            utilisateur : req.body.utilisateur
        });
        await newPanier.save();
        res.send(newPanier);
    } catch (error) {
        res.status(401).send({error: err.message});
    }
}