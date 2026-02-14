const dotenv = require("dotenv");
dotenv.config();

const express = require("express");
const cors =  require("cors");
const connectDatabase = require("./config/connectDatabse.js");
const Router = require("./routes/index.routes.js");

const app = express();

app.use(express.json());

app.use("/api", Router);

connectDatabase(app);