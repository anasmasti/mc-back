//get model 
const Categorie = require('../../models/Categorie/categorie.model');

//post New categorie 
exports.addCategorie = async (req,res) => {
    try {
        const newCategorie = new Categorie({
          intitule: req.body.intitule,
        });
        const addedCategorie = await newCategorie.save();
        res.send(addedCategorie);
      } catch (err) {
        res.send(err.message);
      }
}