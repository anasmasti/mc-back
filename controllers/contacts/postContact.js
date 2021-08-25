// get modal
const Contact = require("../../models/Contact/contact.model");

exports.newContact = async (req, res) => {
  try {
    const newContact = new Contact({
      message: req.body.message,
      utilisateur: req.body.utilisateur,
    });
    await newContact.save();
    res.send(newContact);
  } catch (error) {
    res.status(401).send({error: err.message});
  }
};
