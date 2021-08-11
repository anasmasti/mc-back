const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");

require("dotenv").config();

//initelise app
const app = express();

//connect to atlas DB
mongoose.connect(
  process.env.DB_CONNECTION,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  () => {
    console.log("connected to Atlas succesfully");
  }
);

//listen to port
app.listen(3000,'192.168.11.124')

//set midllwares
app.use(bodyParser.json());
app.use(cors());
app.use(express.json());

//hello world route :
app.get("/", (req, res) => {
  res.send("hello world");
});


//productRouts
const users = require('./routes/ecomRouter');
app.use('/ecom/',users);


