
require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const cors = require("cors");
const authRoutes = require('./routes/auth');
const multer = require('multer');
const upload = multer();

app.use(upload.any()); 

app.use(express.json());
app.use(cors());
app.options('*', cors());

const allowCrossDomain = function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
};
app.use(allowCrossDomain);

const PORT = process.env.PORT || 5000;

app.use('/api/auth', authRoutes)

app.get("/", (req, res) => {
    res.send("You are connected");
})

const start = async () => {
    try {
     await mongoose.connect(process.env.MONGO_URI);
     app.listen(PORT, () => {
        console.log("done");
     });
    } catch (error) {
        console.log("error", error);
    }
}

start()
