const express = require("express");
const { model } = require("mongoose");
const app = express();
const ErrorMiddleware = require('./middlewares/error')
const cors = require("cors")


app.use(express.json());
app.use(cors());

//Import all routes
const products = require('./routes/productRoute');

const user = require('./routes/userRoute')

// app.use(function(res, req, next){
//     res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request form
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     res.header("Access-Control-Allow-Methods", "PUT, POST, GET, DELETE, OPTIONS");
//     next();
// });

app.use('/api/v1', products, user)

// error handler middleware
app.use(ErrorMiddleware) 

module.exports = app;