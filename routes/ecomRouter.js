const express = require("express");
const router = express.Router();
const verify = require("../verifyToken");
//---------products Controller
const getProduct = require("../controllers/products/getProducts");
const postProduct = require("../controllers/products/postProduct");
const putProduct = require("../controllers/products/putProducts");
const deleteProduct = require("../controllers/products/deleteProducts");
//------------------------------------------------------------------------------//
//---------Users Controller
const getUser = require("../controllers/users/getUser");
const postUser = require("../controllers/users/postUser");
const putUser = require("../controllers/users/putUser");
const deleteUser = require("../controllers/users/deleteUser");
//------------------------------------------------------------------------------//
//---------Categorie Controller
const postCategorie = require("../controllers/categories/postCategorie");
const deleteCategorie = require("../controllers/categories/deleteCategorie");
const getCategories = require("../controllers/categories/getCategorie");
//------------------------------------------------------------------------------//
//---------orderDetails Controller
const postDetails = require("../controllers/ordersDetails/postDetails");
const getDetails = require("../controllers/ordersDetails/getDetails");
const putDetails = require("../controllers/ordersDetails/putDetails");
//------------------------------------------------------------------------------//
//---------Orders Controller
const postOrders = require("../controllers/orders/postOrder");
const getOrders = require("../controllers/orders/getOrders");
const putOrders = require("../controllers/orders/putOrder");
const deleteOrders = require("../controllers/orders/deleteOrders");
//------------------------------------------------------------------------------//
//---------Panier Controller
const postPanier = require("../controllers/paniers/postPanier");
const getPanier = require("../controllers/paniers/getPanier");
const putPanier = require("../controllers/paniers/putPanier");
const deletePanier = require("../controllers/paniers/deletePanier");
// file upload
const upload = require("../middleware/upload");
//products routes
router.get("/products/getProducts", getProduct.allProducts);
router.get("/products/getProducts/:id", getProduct.getProduct);
router.post("/products/newProduct", upload.array('images[]') , postProduct.addProduct);
router.put("/products/updateProduct/:id", verify, putProduct.updateProduct);
router.put("/products/deleteProduct/:id", verify, deleteProduct.deleteProduct);
//------------------------------------------------------------------------------//
//Users routes
router.post("/users/newUser", postUser.register);
router.get("/users/getUsers", getUser.allUsers);
router.get("/users/getUser/:id", getUser.getUser);
router.post("/users/loggin", postUser.loggin);
router.put("/users/updateUser/:id", putUser.putUser);
router.put("/users/deleteUser/:id", deleteUser.deleteUser);
router.post("/users/sendMail", postUser.forgotPassword);
router.post("/users/newPassword/:id", postUser.newPassword);
//------------------------------------------------------------------------------//
//Categories routes
router.post("/Categories/newCategories", postCategorie.addCategorie);
router.put("/Categories/deleteCategorie/:id", deleteCategorie.deleteCategorie);
router.get("/Categories/getCategories", getCategories.getAllCategories);
//------------------------------------------------------------------------------//
//orderDetails routes
router.post("/orderDetails/newDetail", verify, postDetails.newDetails);
router.put("/orderDetails/updateDetail/:id", verify, putDetails.updateDetail);
router.get("/orderDetails/allDetails", getDetails.getAllDetails);
router.get("/orderDetails/oneDetail/:id", getDetails.getDetail);
//------------------------------------------------------------------------------//
//commandes routes
router.post("/commandes/newCommande", verify, postOrders.newOrder);
router.put("/commandes/updateCommande/:id", verify, putOrders.setDetails);
router.get("/commandes/allDCommande", verify, getOrders.getAllOrders);
router.get("/commandes/oneDCommande/:id", getOrders.getOrder);
router.put("/commandes/deleteCommande/:id", verify, deleteOrders.deleteOrder);
//------------------------------------------------------------------------------//
//panier routes
router.post("/panier/newPanier", postPanier.addNewPanier);
router.put("/panier/updatePanier/:id", putPanier.updatePanier);
router.get("/panier/getPanier/:id", getPanier.getPanier);
router.put("/panier/deletePanier/:id", deletePanier.deletePanier);

module.exports = router;
