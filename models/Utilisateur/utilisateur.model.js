const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  nom: {
    type: String,
  },
  prenom: {
    type: String,
  },
  telephone: {
    type: Number,
  },
  type: {
    type: String,
  },
  email: {
    type: String,
  },
  password: {
    type: String,
  },
  sexe: {
    type: String,
  },
  ville: {
    type: String,
  },
  code_postal: {
    type: Number,
  },
  adresse_livraison: {
    type: String,
  },
  deleted:{
    type: Boolean,
    default:false
  }

});


const User = mongoose.model('User',UserSchema);
module.exports= User;
