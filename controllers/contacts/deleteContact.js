// get modal
const Contact = require("../../models/Contact/contact.model");

exports.updateContact = async (req, res) => {
  try {
    const updatedContact = await Contact.updateOne(
      { _id: req.params.ID },
      {
        deleted: true 
      }
    );
    res.send(updatedContact);
  } catch (error) {
    res.send(error.message);
  }
};
