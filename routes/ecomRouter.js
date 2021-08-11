const express = require("express");
const router = express.Router();

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





//products routes
router.get("/products/getProducts", getProduct.allProducts);
router.get("/products/getProducts/:id", getProduct.getProduct);
router.post("/products/newProduct", postProduct.addProduct);
router.put("/products/updateProduct/:id", putProduct.updateProduct);
router.put("/products/deleteProduct/:id", deleteProduct.deleteProduct);
//------------------------------------------------------------------------------//
//Users routes
router.post("/users/newUser", postUser.addUser);
router.get("/users/getUsers", getUser.allUsers);
router.get("/users/getUser/:id", getUser.getUser);
router.put("/users/updateUser/:id", putUser.putUser);
router.put("/users/deleteUser/:id", deleteUser.deleteUser);
//------------------------------------------------------------------------------//
//Categories routes
router.post("/Categories/newCategories", postCategorie.addCategorie);
//------------------------------------------------------------------------------//
//orderDetails routes
router.post("/orderDetails/newDetail",postDetails.newDetails);
router.put("/orderDetails/updateDetail",putDetails.updateDetail);
router.get("/orderDetails/allDetails",getDetails.getAllDetails);
router.get("/orderDetails/oneDetail/:id",getDetails.getDetail);
//------------------------------------------------------------------------------//
//commandes routes
router.post("/commandes/newCommande",postOrders.newOrder);
router.put("/commandes/updateCommande",putOrders.setDetails);
router.get("/commandes/allDCommande",getOrders.getAllOrders);
router.get("/commandes/oneDCommande/:id",getOrders.getOrder);

module.exports = router;
