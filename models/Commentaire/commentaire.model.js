const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CommentaireSchema = new Schema({
  contenue: {
    type: String,
  },
  produit: {
    type: Schema.Types.ObjectId,
    ref: 'Produit'
  },
  utilisateur: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  deleted:{
    type: Boolean,
    default:false
  }
});


const Commentaire = mongoose.model('Commentaire',CommentaireSchema);
module.exports= Commentaire;
