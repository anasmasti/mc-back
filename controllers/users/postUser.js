// get modal
const User = require("../../models/Utilisateur/utilisateur.model");

const bcrypt = require("bcrypt");
const registerValidation = require("../../validation/utilisateurValidation");
const jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");
let transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "MC.Coutton@gmail.com",
    pass: "medi2019",
  },
});

//post new User
exports.register = async (req, res) => {
  try {
    const validation = registerValidation.registerValidation(req.body);
    if (validation.error)
      return res.send({ message: validation.error.details[0].message });
    const salt = await bcrypt.genSalt(10);
    const hashedPW = await bcrypt.hash(req.body.password, salt);
    const newUser = new User({
      nom: req.body.nom,
      prenom: req.body.prenom,
      telephone: req.body.telephone,
      type: req.body.type,
      date_creation: req.body.date_creation,
      email: req.body.email,
      password: hashedPW,
      sexe: req.body.sexe,
      ville: req.body.ville,
      code_postal: req.body.code_postal,
      adresse_livraison: req.body.adresse_livraison,
    });
    await newUser.save();

  } catch (err) {
    res.status(401).send({ message: err.message });
  }
};

//---------------------------------- reset password -----------------------------------------------

exports.forgotPassword = async (req, res) => {
  const user = await User.findOne({ email: req.body.email });
  if (!user) res.status(404).send({ error: "user not found" });
  let message2 = {
    from: "MC.Coutton@gmail.com",
    to: req.body.email,
    subject: "Récupération de mot de passe / MC-Coutton ",
    text: "Salut " + user.nom,
    html:
      `
        
    <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional //EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
                <html xmlns="http://www.w3.org/1999/xhtml" xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:v="urn:schemas-microsoft-com:vml">
                <head>
                <meta content="text/html; charset=utf-8" http-equiv="Content-Type"/>
                <meta content="width=device-width" name="viewport"/>
                <meta content="IE=edge" http-equiv="X-UA-Compatible"/>
                <title>MC-Coutton</title>
                <link href="https://fonts.googleapis.com/css?family=Ubuntu" rel="stylesheet" type="text/css"/>
                <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" crossorigin="anonymous"/>
                <style type="text/css">body {	margin: 0;	padding: 0;table,td,tr {	vertical-align: top;	border-collapse: collapse;* {	line-height: inherit;a[x-apple-data-detectors=true] {	color: inherit !important;	text-decoration: none !important;}</style>
                <style id="media-query" type="text/css">@media (max-width: 540px) .block-grid,.col {	min-width: 320px !important;	max-width: 100% !important;	display: block !important;.block-grid {	width: 100% !important;.col {	width: 100% !important;.col>div {	margin: 0 auto;img.fullwidth,img.fullwidthOnMobile {	max-width: 100% !important;.no-stack .col {	min-width: 0 !important;	display: table-cell !important;.no-stack.two-up .col {	width: 50% !important;.no-stack .col.num4 {	width: 33% !important;.no-stack .col.num8 {	width: 66% !important;.no-stack .col.num4 {	width: 33% !important;.no-stack .col.num3 {	width: 25% !important;.no-stack .col.num6 {	width: 50% !important;.no-stack .col.num9 {	width: 75% !important;.video-block {	max-width: none !important;.mobile_hide {	min-height: 0px;	max-height: 0px;	max-width: 0px;	display: none;	overflow: hidden;	font-size: 0px;.desktop_hide {	display: block !important;	max-height: none !important;}}</style>
                </head>
                <body class="clean-body" style="margin: 0; padding: 0; -webkit-text-size-adjust: 100%; background-color: #FFFFFF;">
                <table bgcolor="#FFFFFF" cellpadding="0" cellspacing="0" class="nl-container" role="presentation" style="table-layout: fixed; vertical-align: top; min-width: 320px; Margin: 0 auto; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #FFFFFF; width: 100%;" valign="top" width="100%">
                <tbody>
                <tr style="vertical-align: top;" valign="top">
                <td style="word-break: break-word; vertical-align: top;" valign="top">
                <div style="background-color:transparent;">
                <div class="block-grid" style="Margin: 0 auto; min-width: 320px; max-width: 520px; overflow-wrap: break-word; word-wrap: break-word; word-break: break-word; background-color: transparent;">
                <div style="border-collapse: collapse;display: table;width: 100%;background-color:transparent;">
                <div class="col num12" style="min-width: 320px; max-width: 520px; display: table-cell; vertical-align: top; width: 520px;">
                <div style="width:100% !important;">
                <div style="border-top:0px solid transparent; border-left:0px solid transparent; border-bottom:0px solid transparent; border-right:0px solid transparent; padding-top:20px; padding-bottom:15px; padding-right: 0px; padding-left: 0px;">
                <div align="center" class="img-container center fixedwidth" style="padding-right: 0px;padding-left: 0px;">
                <img align="center"  border="0" class="center fixedwidth" src="../../assets/logo_mc_2.jpg" style="text-decoration: none; -ms-interpolation-mode: bicubic; height: auto; border: 0; width: 100%; max-width: 182px; display: block;"  width="182"/></div></div></div></div></div></div></div>
                <div style="background-color: whitesmoke;">
                <div class="block-grid" style="Margin: 0 auto; min-width: 320px; max-width: 520px; overflow-wrap: break-word; word-wrap: break-word; word-break: break-word; background-color: transparent;">
                <div style="border-collapse: collapse;display: table;width: 100%;background-color:transparent;">
                <div class="col num12" style="min-width: 320px; max-width: 520px; display: table-cell; vertical-align: top; width: 520px;">
                <div style="width:100% !important;">
                <div style="border-top:0px solid transparent; border-left:0px solid transparent; border-bottom:0px solid transparent; border-right:0px solid transparent; padding-top:30px; padding-bottom:30px; padding-right: 0px; padding-left: 0px;">
                <div style="color:#555555;font-family:Tahoma, Verdana, Segoe, sans-serif;line-height:1.2;padding-top:0px;padding-right:0px;padding-bottom:0px;padding-left:0px;">
                <div style="line-height: 1.2; font-size: 12px; font-family: Tahoma, Verdana, Segoe, sans-serif; color: #555555; mso-line-height-alt: 14px;">
                <p style="font-size: 26px; line-height: 1.2; word-break: break-word; text-align: center; font-family: Tahoma, Verdana, Segoe, sans-serif; mso-line-height-alt: 31px; margin: 0;"><span style="font-size: 26px; color: #000000;"><strong>salut ` +
      user.prenom +
      `, récupérer ton mot de passe </strong></span></p></div></div></div></div></div></div></div></div>
                <div style="background-color:transparent;">
                <div class="block-grid" style="Margin: 0 auto; min-width: 320px; max-width: 520px; overflow-wrap: break-word; word-wrap: break-word; word-break: break-word; background-color: transparent;">
                <div style="border-collapse: collapse;display: table;width: 100%;background-color:transparent;">
                <div class="col num12" style="min-width: 320px; max-width: 520px; display: table-cell; vertical-align: top; width: 520px;">
                <div style="width:100% !important;">
                <div style="border-top:0px solid transparent; border-left:0px solid transparent; border-bottom:0px solid transparent; border-right:0px solid transparent; padding-top:45px; padding-bottom:0px; padding-right: 25px; padding-left: 25px;">
                <div style="color:#555555;font-family:Tahoma, Verdana, Segoe, sans-serif;line-height:1.2;padding-top:0px;padding-right:0px;padding-bottom:5px;padding-left:0px;">
                <div style="line-height: 1.2; font-size: 12px; font-family: Tahoma, Verdana, Segoe, sans-serif; color: #555555; mso-line-height-alt: 14px;">
                <p style="font-size: 18px; line-height: 1.2; word-break: break-word; text-align: center; font-family: Tahoma, Verdana, Segoe, sans-serif; mso-line-height-alt: 22px; margin: 0;"><span style="font-size: 18px;"><strong>Cliquer sur le button au-dessous pour récupérer ton mot de passe</strong></span></p></div></div>
                <div style="color:#555555;font-family:Tahoma, Verdana, Segoe, sans-serif;line-height:1.2;padding-top:0px;padding-right:0px;padding-bottom:0px;padding-left:0px;">
                <div style="line-height: 1.2; font-size: 12px; font-family: Tahoma, Verdana, Segoe, sans-serif; color: #555555; mso-line-height-alt: 14px;">
                <p style="font-size: 13px; line-height: 1.2; text-align: center; font-family: Tahoma, Verdana, Segoe, sans-serif; word-break: break-word; mso-line-height-alt: 16px; mso-ansi-font-size: 14px; margin: 0;"><span style="color: #808080; font-size: 13px; mso-ansi-font-size: 14px;">Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500,</span></p></div></div></div></div></div></div></div></div>
                <div style="background-color:transparent;">
                <div class="block-grid" style="Margin: 0 auto; min-width: 320px; max-width: 520px; overflow-wrap: break-word; word-wrap: break-word; word-break: break-word; background-color: transparent;">
                <div style="border-collapse: collapse;display: table;width: 100%;background-color:transparent;">
                <div class="col num12" style="min-width: 320px; max-width: 520px; display: table-cell; vertical-align: top; width: 520px;">
                <div style="width:100% !important;">
                <div style="border-top:0px solid transparent; border-left:0px solid transparent; border-bottom:0px solid transparent; border-right:0px solid transparent; padding-top:10px; padding-bottom:35px; padding-right: 35px; padding-left: 35px;">
                <div align="center" class="button-container" style="padding-top:0px;padding-right:0px;padding-bottom:0px;padding-left:0px;">
                <a href="http://localhost:3000/forgotPassword?title=${user._id}" style="-webkit-text-size-adjust: none; text-decoration: none; display: inline-block; color: #000000; background-color: #e4ff69; border-radius: 23px; -webkit-border-radius: 23px; -moz-border-radius: 23px; width: auto; width: auto; border-top: 1px solid #e4ff69; border-right: 1px solid #e4ff69; border-bottom: 1px solid #e4ff69; border-left: 1px solid #e4ff69; padding-top: 3px; padding-bottom: 3px; font-family: Tahoma, Verdana, Segoe, sans-serif; text-align: center; mso-border-alt: none; word-break: keep-all;" target="_blank"><span style="padding-left:35px;padding-right:35px;font-size:14px;display:inline-block;"><span style="font-size: 16px; line-height: 1.5; word-break: break-word; mso-line-height-alt: 24px;"><span data-mce-style="font-size: 14px; line-height: 21px;" style="font-size: 14px; line-height: 21px;"><strong>Récupérer mon mot de passe</strong></span></span></span></a></div></div></div></div></div></div></div>
                <div style="background-color:#f4f4ff;">
                <div class="block-grid" style="Margin: 0 auto; min-width: 320px; max-width: 520px; overflow-wrap: break-word; word-wrap: break-word; word-break: break-word; background-color: transparent;">
                <div style="border-collapse: collapse;display: table;width: 100%;background-color:transparent;">
                <div class="col num12" style="min-width: 320px; max-width: 520px; display: table-cell; vertical-align: top; width: 520px;">
                <div style="width:100% !important;">
                <div style="border-top:0px solid transparent; border-left:0px solid transparent; border-bottom:0px solid transparent; border-right:0px solid transparent; padding-top:20px; padding-bottom:20px; padding-right: 0px; padding-left: 0px;">
                <div style="color:#555555;font-family:Tahoma, Verdana, Segoe, sans-serif;line-height:1.2;padding-top:0px;padding-right:0px;padding-bottom:0px;padding-left:0px;">
                <div style="line-height: 1.2; font-size: 12px; font-family: Tahoma, Verdana, Segoe, sans-serif; color: #555555; mso-line-height-alt: 14px;">
                <p style="font-size: 12px; line-height: 1.2; word-break: break-word; text-align: center; font-family: Tahoma, Verdana, Segoe, sans-serif; mso-line-height-alt: 14px; margin: 0;"><span style="font-size: 12px;"><em>reconnaissance pour l'ensemble de nos équipes,</em> <strong>Merci de nous avoir fait confiance !</strong></span></p></div></div></div></div></div></div></div></div>
                <div style="background-color:transparent;">
                <div class="block-grid mixed-two-up" style="Margin: 0 auto; min-width: 320px; max-width: 520px; overflow-wrap: break-word; word-wrap: break-word; word-break: break-word; background-color: transparent;">
                <div style="border-collapse: collapse;display: table;width: 100%;background-color:transparent;">
                <div class="col num8" style="display: table-cell; vertical-align: top; min-width: 320px; max-width: 344px; width: 346px;">
                <div style="width:100% !important;">
                <div style="border-top:0px solid transparent; border-left:0px solid transparent; border-bottom:0px solid transparent; border-right:0px solid transparent; padding-top:20px; padding-bottom:30px; padding-right: 15px; padding-left: 15px;">
                <div style="color:#555555;font-family:Tahoma, Verdana, Segoe, sans-serif;line-height:1.2;padding-top:10px;padding-right:10px;padding-bottom:10px;padding-left:10px;">
                <div style="line-height: 1.2; font-size: 12px; font-family: Tahoma, Verdana, Segoe, sans-serif; color: #555555; mso-line-height-alt: 14px;">
                <p style="font-size: 9px; line-height: 1.2; font-family: Tahoma, Verdana, Segoe, sans-serif; word-break: break-word; mso-line-height-alt: 11px; margin: 0;"><span style="font-size: 9px;">MC-Coutton copyright © 2020</span><br/><span style="font-size: 9px;">e-mail: MC.Coutton@gmail.com | téléphone: 0690430158</span></p></div></div></div></div></div>
                <div class="col num4" style="display: table-cell; vertical-align: top; max-width: 320px; min-width: 172px; width: 173px;">
                <div style="width:100% !important;">
                <div style="border-top:0px solid transparent; border-left:0px solid transparent; border-bottom:0px solid transparent; border-right:0px solid transparent; padding-top:5px; padding-bottom:5px; padding-right: 0px; padding-left: 0px;">
                <table cellpadding="0" cellspacing="0" class="social_icons" role="presentation" style="table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt;" valign="top" width="100%">
                <tbody>
                <tr style="vertical-align: top;" valign="top">
                <td style="word-break: break-word; vertical-align: top; padding-top: 25px; padding-right: 0px; padding-bottom: 0px; padding-left: 0px;" valign="top">
                <table align="center" cellpadding="0" cellspacing="0" class="social_table" role="presentation" style="table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-tspace: 0; mso-table-rspace: 0; mso-table-bspace: 0; mso-table-lspace: 0;" valign="top">
                <tbody>
                <tr align="center" style="vertical-align: top; display: inline-block; text-align: center;" valign="top">
                <td style="word-break: break-word; vertical-align: top; padding-bottom: 0; padding-right: 2.5px; padding-left: 2.5px;" valign="top"><a href="https://www.facebook.com/" style="color: #000000;" target="_blank"><i class="fab fa-facebook-f"></i></a></td>
                <td style="word-break: break-word; vertical-align: top; padding-bottom: 0; padding-right: 2.5px; padding-left: 2.5px;" valign="top"><a href="https://twitter.com/" style="color: #000000;" target="_blank"><i class="fab fa-twitter"></i></a></td>
                <td style="word-break: break-word; vertical-align: top; padding-bottom: 0; padding-right: 2.5px; padding-left: 2.5px;" valign="top"><a href="https://instagram.com/" style="color: #000000;" target="_blank"><i class="fab fa-instagram"></i></a></td>
                <td style="word-break: break-word; vertical-align: top; padding-bottom: 0; padding-right: 2.5px; padding-left: 2.5px;" valign="top"><a href="https://www.pinterest.com/" style="color: #000000;" target="_blank"><i class="fab fa-pinterest-p"></i></a></td></tr></tbody></table></td></tr></tbody></table></div></div></div></div></div></div></td></tr></tbody></table></body></html>
             
  
    
    
    `,
  };
  transporter.sendMail(message2, (error, info) => {
    if (error) {
      res.status(401).send({ error: err.message });
    } else {
      res.send({message : "email envoyé" + info.response});
    }
  });
};
exports.newPassword = async (req, res) => {
  const nvMP = req.body.nouveauMotDePasse;
  const cnfrmMP = req.body.confirmerMotDePasse;
  const checkUserExistings = await User.findById({ _id: req.params.id });
  if (!checkUserExistings) {
    res.status(404).send({ error: "user not found" });
  }
  if (nvMP === cnfrmMP) {
    const salt = await bcrypt.genSalt(10);
    const nouveauMotDePasse = await bcrypt.hash(
      req.body.confirmerMotDePasse,
      salt
    );
    await User.findByIdAndUpdate(req.params.id, {
      password: nouveauMotDePasse,
    })
      .then(() => {
        res.send({ message: "updated successfuly" });
      })
      .catch((err) => {
        res.status(401).send({ error: err.message });
      });
  } else {
    res.status(401).send({ error: "confirmation failed" });
  }
};



exports.loggin = async (req, res) => {
  try {
    const checkUserEmail = await User.findOne({
      deleted: false,
      email: req.body.email,
    });
  
  
    if (!checkUserEmail) res.status(404).send({error: "email introuvable"});

    const pw = await bcrypt.compare(req.body.password, checkUserEmail.password);
    if (!pw) res.status(404).send({error: "mot de passe incorrect"});

    const token = jwt.sign({ _id: checkUserEmail._id },process.env.TOKEN_SECRET);
    await res.header('auth-token',token).send({token: token, user: checkUserEmail});

    // res.send("logged in");
  } catch (error) {
    res.status(404).json({message: error.message});
  }
};




