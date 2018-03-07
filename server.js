require("dotenv").config();

const express = require("express");
const session = require("express-session");
const massive = require("massive");
const cors = require("cors");
const bodyParser = require("body-parser");
const path = require("path");
const { json } = require("body-parser");
const cookieParser = require("cookie-parser");
const flash = require("connect-flash");
const app = express();

app.engine('html', require('ejs').renderFile);

app.use(cors());
app.use(cookieParser());

// uncomment this out and get rid of /build in .gitignore
// app.use(express.static(`${__dirname}/build`)); 
app.use(express.static(`${__dirname}/public`));
app.use(flash());

const connectionString = process.env.DATABASE_URL;
const massiveConnection = massive(connectionString)
  .then(db => {
    app.set("db", db);
  })
  .catch(err => {
    console.log(err);
  });

app.use(
  session({
    secret: process.env.secret,
    resave: true,
    saveUninitialized: true
  })
);

app.get('/api/getInventory', (req, res) => {
    const db = req.app.get('db');
    db.getInventory().then(inventory => {
        res.send(inventory);
    })
})

app.listen(process.env.PORT || 2020, function() {
    console.log(`listening on port ${process.env.PORT}`);
  });