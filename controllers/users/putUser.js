// get modal
const User = require("../../models/Utilisateur/utilisateur.model");
const bcrypt = require("bcrypt");

//post new User
exports.putUser = async (req, res) => {
  const checkUser = await User.find({ _id: req.params.id });
  if (!checkUser) {
    res.send("erreur ! user introuvable");
  }
  try {
    const salt = await bcrypt.genSalt(10);
    const hashedPW = await bcrypt.hash(req.body.password, salt);
    const updatedUser = await User.updateOne(
      { _id: req.params.id },
      {
        nom: req.body.nom,
        prenom: req.body.prenom,
        telephone: req.body.telephone,
        type: req.body.type,
        date_creation: req.body.date_creation,
        email: req.body.email,
        password: hashedPW,
        sexe: req.body.sexe,
        ville: req.body.ville,
        code_postal: req.body.code_postal,
        adresse_livraison: req.body.adresse_livraison,
      }
    );
   
    res.send(updatedUser);
  } catch (err) {
    res.send(err.message);
  }
};
