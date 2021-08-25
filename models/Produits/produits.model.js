const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const imageSchema = require('./image_produits.model');

const ProduitSchema = new Schema({
  intitule: {
    type: String,
  },
  breve_intitule: {
    type: String,
  },
  prix: {
    type: Number,
  },
  remise: {
    type: String,
  },
  description: {
    type: String,
  },
  breve_description: {
    type: String,
  },
  en_stock: {
    type: Boolean,
  },
  tendence: {
    type: String,
  },
  quantite: {
    type: Number,
  },
  nouveaute: {
    type: String,
    required: false
  },
  type: {
    type: String,
  },
  taille:{
      type: String
  },
  categorie: {
    type: Schema.Types.ObjectId,
    ref: 'Categorie'
  },
  images: [{
    type:String,
    required: false
  }],
  deleted:{
    type: Boolean,
    default:false
  }
});


const Produit = mongoose.model('Produit',ProduitSchema);
module.exports= Produit;
