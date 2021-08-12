// get modal
const User = require("../../models/Utilisateur/utilisateur.model");
const bcrypt = require('bcrypt');
const registerValidation = require('../../validation/utilisateurValidation');

//post new User
exports.register = async (req, res) => {
  try {
    const validation = registerValidation.registerValidation(req.body);
    if(validation.error) return res.send(validation.error.details[0].message);
    const salt = await bcrypt.genSalt(10);
    const hashedPW = await bcrypt.hash(req.body.password , salt);
    const newUser = new User({
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
      adresse_livraison: req.body.adresse_livraison
    });
    const addedUser = await newUser.save();
    res.send(addedUser);
  } catch (err) {
    res.send(err.message);
  }
};




