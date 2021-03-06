// get modal
const Contact = require("../../models/Contact/contact.model");

exports.getContacts = async (req, res) => {
  try {
    const allContacts = await Contact.find({ deleted: false });

    res.send(allContacts);
  } catch (error) {
    res.status(401).send({error: err.message});
  }
};
