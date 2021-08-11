const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CommandeSchema = new Schema(
  {
    prix: {
      type: Number,
    },
    etat: {
      type: String,
    },
    details_commande: {
      type: Schema.Types.ObjectId,
      ref: "Details",
    },
    client: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    deleted: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

const Commande = mongoose.model("Commande", CommandeSchema);
module.exports = Commande;
