const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CategorieSchema = new Schema({
  prix: {
    type: Number,
  },
  etat:{
      type: String
  },
  details_commande:{
    type: Schema.Types.ObjectId,
    ref: 'Details'
  },
  deleted:{
    type: Boolean,
    default:false
  }
});


const Categorie = mongoose.model('Categorie',CategorieSchema);
module.exports= Categorie;
