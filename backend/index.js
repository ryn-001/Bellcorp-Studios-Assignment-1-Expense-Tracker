const dotenv = require("dotenv");
dotenv.config();

const express = require("express");
const cors =  require("cors");
const connectDatabase = require("./config/connectDatabse.js");

const app = express();


// app.use("/api")

connectDatabase(app);