// get modal
const Contact = require("../../models/Contact/contact.model");

exports.updateContact = async (req, res) => {
  try {
    const updatedContact = await Contact.updateOne(
      { _id: req.params.ID },
      {
        message: req.body.message,
        utilisateur: req.body.utilisateur,
      }
    );
    res.send(updatedContact);
  } catch (error) {
    res.status(401).send({error: err.message});
  }
};
