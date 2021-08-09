const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CategorieSchema = new Schema({
  intitule: {
    type: String,
  },
  deleted:{
    type: Boolean,
    default:false
  }
});


const Categorie = mongoose.model('Categorie',CategorieSchema);
module.exports= Categorie;
