const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PanierSchema = new Schema({
 
  produits: [{
     quantite: {
        type: Number,
      },
      produit:{
        type: Schema.Types.ObjectId,
        ref: 'Product'
      }
  }],
  utilisateur: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  deleted:{
    type: Boolean,
    default:false
  }
});


const Panier = mongoose.model('Panier',PanierSchema);
module.exports= Panier;
