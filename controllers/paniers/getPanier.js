// get modal 
const Panier = require('../../models/Panier/panier.model');


exports.getPanier = async (req,res)=>{

    try {
        const newPanier = await Panier.find({
            _id: req.params.id
        }).populate("utilisateur produit");
        await newPanier.save();
        res.send(newPanier);
    } catch (error) {
        res.send(error.message);
    }
}