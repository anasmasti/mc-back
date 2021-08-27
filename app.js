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


// midlleware to access assets folder directly exemple:  http://192.168.11.122:3000/assets/1629966369521.jpg
app.use('/assets',express.static('assets'));

//listen to port
app.listen(3000,'192.168.11.122')

//set midllwares
app.use(bodyParser.json());
app.use(cors());
app.use(express.json());

//hello world route :
app.get("/", (req, res) => {
  res.send("hello world");
});


//productRouts
const routes = require('./routes/ecomRouter');
app.use('/ecom/api/v1',routes);


