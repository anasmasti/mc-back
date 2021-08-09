const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ContactSchema = new Schema({
  message: {
    type: String,
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


const Contact = mongoose.model('Contact',ContactSchema);
module.exports= Contact;
