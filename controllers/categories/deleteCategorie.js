// get modal 
const Categorie = require('../../models/Categorie/categorie.model');


exports.deleteCategorie = async (req,res) => {
    try {
        const deletedCategorie = await Categorie.updateOne(
            { _id: req.params.ID },
            {
              deleted: true,
            }
          );
          res.send(deletedCategorie);
    } catch (error) {
      res.status(401).send({error: err.message});
    }
}