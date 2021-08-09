const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const DetailsSchema = new Schema({
 
  produits: [{
     quantite: {
        type: Number,
      },
      produit:{
        type: Schema.Types.ObjectId,
        ref: 'Product'
      }
  }],
  deleted:{
    type: Boolean,
    default:false
  }

});


const Details = mongoose.model('Details',DetailsSchema);
module.exports= Details;
