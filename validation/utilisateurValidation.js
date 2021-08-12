const Joi = require("@hapi/joi");

const registerValidation = (data) => {
  const schema = Joi.object({
    email: Joi.string().min(6).required().email(),
    password: Joi.string().min(6).required(),
    nom: Joi.string().required(),
    prenom: Joi.string().required(),
    sexe: Joi.string(),
    ville: Joi.string(),
    type: Joi.string().required(),
    code_postal: Joi.string(),
    adresse_livraison: Joi.string(),
    telephone: Joi.number().min(10)
  });

  const validation = schema.validate(data);
  return validation;
};

const loginValidation = (data) => {
  const schema = Joi.object({
    email: Joi.string().min(6).required().email(),
    password: Joi.string().min(6).required(),
  });

  const validation = schema.validate(data);
  return validation;
};

module.exports.registerValidation = registerValidation;
module.exports.loginValidation = loginValidation;
